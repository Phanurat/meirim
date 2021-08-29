const PlanAreaChanges = require('../../../api/model/plan_area_changes');
const { tagDataRules } = require('../../constants');
const PlanChartFourRow = require('../../../api/model/plan_chart_four_row');

const isTagByUsageAddition = async (planId, rule) => {
	try {
		const result = await PlanAreaChanges.byPlanAndUsage(planId, rule.usage);
		if (result && result.models && result.models[0]) {
			const changeToApprovedState = result.models[0].attributes.change_to_approved_state;
			if ( (changeToApprovedState.length > 1) && 
				(changeToApprovedState.substring(0,1) === '+') ) {
				const change = Number(changeToApprovedState.replace('+','').replace(',',''));
				if (change >= Number(rule.minValue)) {
					return {   
						created_by_data_rules: `{rule:'${rule.description}',detail:'adds ${changeToApprovedState} ${rule.usage}'}`
					}; 
				}
			}

		}		
		
	   
	} catch (error) {
		console.log(`error ${error.message}\n`);
		console.debug(error);
	}
};

const doesTagApplyHelper = async (planId, tagName, tagsResources) => {
	const dataRules = [];
	const tagInfo = tagDataRules.filter(tag => {return tag.tagName === tagName})[0];
	for (const counter in tagInfo.rules) {

		const rule = tagInfo.rules[counter];
		try {
			const isTag = await isTagByUsageAddition(planId, rule);

			if (isTag) {
				dataRules.push(
					isTag.created_by_data_rules
				);
			}

		} catch (err) {
			console.debug(err);			
		}
			
	} 
	if (dataRules.length > 0) {
		return {
			plan_id: planId,
			tag_id: tagsResources.tagNameToTagId[tagName],
			display_score: 0, /* TODO: Add the correct display score here */
			// TODO: MOVE TO JSON.Stringify ?
			created_by_data_rules: `[${dataRules.toString(',')}]`
		};
	}

	return null;
};


// isTagApplies is a function that gets a father category and return true if it satisfies the tag.
// dataRuleIfApplies is a dict that explains on the data rule
const isTagApplyTable4FatherCategory = async (planId, isTagApplies, tagName, tagsResources, dataRuleIfApplies) => {
	const table4FatherCategories = await PlanChartFourRow.getFatherCategoriesOfPlan(planId);
	if (table4FatherCategories && table4FatherCategories.models) {
		for (const model of table4FatherCategories.models) {
			const fatherCategory = model.attributes.father_category;

			if (isTagApplies(fatherCategory)) {
				return {
					plan_id: planId,
					tag_id: tagsResources.tagNameToTagId[tagName],
					display_score: 0, /* TODO: Add the correct display score here */
					created_by_data_rules: JSON.stringify([dataRuleIfApplies])
				};
			}
		}
	}

	return null;
};



module.exports = {
	isTagByUsageAddition, doesTagApplyHelper, isTagApplyTable4FatherCategory
};