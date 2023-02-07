import React from 'react';
import { createStore, useStore } from 'react-hookstore';

const defaultLanguage = 'HE';
const LOCALE_STORE = 'localeStore';

const HEBREW_TRANSLATION = {
	alerts: 'ההתראות שלי',
	address: 'כתובת',
	signin: 'התחברות',
	signout: 'התנתקות',
	joinMeirimCommunity: 'בואו להיות חלק מקהילת מעירים!',
	name: 'מעירים',
	myPlans: 'התוכניות שלי',
	plans: 'תוכניות',
	permits: 'היתרים',
	treePermits: 'עצים',
	vocabulary: 'מילון',
	whoWeAre: 'מי אנחנו',
    urbanPlanning: 'ידע',
    urbanPlanningTitle:'מרכז הידע',
    urbanPlanningSubtitle: 'אנחנו מנגישים ידע ויוצרים תוכן כדי שתוכלו גם לדעת, גם להבין וגם להשפיע על המערכת שהכי משפיעה על החיים שלנו, מערכת התכנון והבניה.',
	meirimTitle: 'מידע תכנוני ואקטיביזם עירוני',
	newAlert: '🏠 תוכניות בניה',
	newAlertTree: '🌳 רשיונות כריתה של עצים', 
	emailAddress: 'כתובת דוא"ל ',
	fullName: 'שם מלא',
	password: 'סיסמה',
	signup: 'הרשמה',
	alreadySignedup: 'כבר רשומים?',
	signupNow: 'הרשמו עכשיו',
	alreadyGotAccount: 'יש לכם כבר חשבון?',
	km: 'ק"מ',
	emailExists: 'כתובת דוא"ל כבר רשומה',
	error: 'שגיאה',
	forgotPassword: 'שכחתם את הסיסמה?',
	forgotMyPassword: 'שכחתי סיסמה',
	loading: 'טוען',
	seenAllPlans: 'זה הכל!',
	callToAction: 'הצטרפו למעירים',
	whatToRegister: 'רוצים השכמה?',
	whyRegister: (
		<div>
            רוצים לדעת מה בונים לכם{' '}
			<strong>ליד הבית?</strong>
		</div>
	),
	howItWorks: `
         מערכת ההתראות שלנו מאגדת במקום אחד את כל התוכניות מכל
         ועדות התכנון ותשלח לכם התראה למייל לפי העדפה
        גיאוגרפית ובזמן אמת בכל פעם שסטטוס התכנית ישתנה.
        מהיום תוכלו לעקוב בקלות אחרי השינויים ליד הבית שלכם.`,
	summary: 'תקציר',
	opinion: 'חוות דעת',
	planningInformation: 'מידע תכנוני',
	sharing: 'שיתוף',
	saving: 'שמירה',
	saved: 'שמור',
	addNewComment: 'הוספת חוות דעת',
	supportUs: 'תמכו בנו',
	review: 'ביקורת',
	iLike: 'אהבתי',
	addAResponse: 'הוספת תגובה',
	improvementProposal: 'הצעה לשיפור',
	generalOpinion: 'חוות דעת כללית',
	emptyTextarea: 'שדה טקסט ריק',
	close: 'סגירה',
	send: 'שליחה',
	chooseType: 'בחרו סוג',
	startDiscussion: 'היו הראשונים להתחיל דיון על התוכנית!',
	shareThought: 'שתפו את הקהילה בדעתכם',
	planDetails: 'פרטי התכנית',
	planGoals: 'מטרות התכנית',
	meanings: 'משמעויות',
	status: 'סטטוס',
	planType: 'סוג תכנית',
	lastUpdateDate: 'עדכון אחרון',
	planDeatailOnGovSite: 'מסמכי התוכנית באתר הממשלה',
	meter: 'מ״ר',
	thisPlanIncreases: 'תוכנית זו מגדילה את השטח הבנוי פי',
	thisPlanAdds: 'תוכנית זו מוסיפה',
	extension: 'תוספת',
	buildingLand: 'שטח בנוי',
	building: 'בניה',
	insteadOf: 'במקום',
	subscribeTitle: 'רוצים לקבל התראה כשהתכנית מתקדמת?',
	subscribeText: 'הירשמו למערכת ההתראות שלנו',
	noThanks: 'לא תודה',
	sharePlan: 'שיתוף תכנית',
	whatsappShare: 'שיתוף ב-Whatsapp',
	facebookShare: 'שיתוף ב-Facebook',
	copyUrl: 'או העתיקו את הקישור',
	copy: 'העתק',
	location: 'מיקום',
	backToComments: 'חזרה לעמוד חוות הדעת',
	publishComment: 'פרסום חוות דעת',
	improvement: 'הצעה לשיפור',
	general: 'חוות דעת כללית',
	savedPlans: 'תוכניות שמורות',
	noPlansSavedTitle: 'טרם שמרת תוכניות',
	ourFacebook: 'Facebook',
	ourTwitter: 'Twitter',
	noPlansSavedContent: 'ניתן לשמור תוכניות כדי לקבל עידכונים שוטפים על כל תוכנית בארץ',
	areaUnitChanges: 'שינוי שטח',
	housingUnitChanges: 'שינוי יחידות דיור',
	planData: 'נתוני התוכנית',
	planDescription: 'תיאור התוכנית',
	fundingMainTitle: 'איך זה שאנחנו יודעים כל כך מעט על המערכת שהכי משפיעה על החיים שלנו?',
	fundingSubTitle: 'רוצים ערים עם היצע של שכונות טובות למגורים, מגוון מקומות בילוי ותעסוקה, תחבורה ציבורית יעילה, רחובות יפים ונעימים, ושלא יחנקו לכם את הנוף והטבע - אבל לא מאמינים שיש לכם את הכוח לעשות משהו?',
	fundingSubTitleBold: ' את זה באנו לשנות.',
	fundingExplanation: 'ככל שהמערכת החינמית שלנו מתפתחת ונרשמים אליה יותר אנשים, עלויות התחזוקה שלה גדלות ומעבר לזה, יש לנו עוד כל כך הרבה חלומות. תמכו בנו כדי שנכל להמשיך ולהנגיש יותר מידע ויותר טוב, להגיע לכמה שיותר אנשים ולבסס קהילה ולשנות את כללי המשחק לטובת הציבור הרחב. תמיכה קבועה בכל סכום יכולה לעזור לנו לבסס את הפעילות בצורה ברמת קיימא.',
	fundingSectionTitle: 'הפכו לשותפים שלנו!',
	fundingStatsTitle: 'תמכו בנו כדי שנוכל להמשיך להפעיל ולפתח את המערכת שלנו, להנגיש יותר מידע בצורה טובה יותר ולהגיע לעוד אנשים.',
	fundingEndGoal: 'אתר חדש עולה לאוויר!',
	fundingShekel: '₪',
	fundingOutOf: 'מתוך',
	fundingSupporters: 'תומכים/ות',
	monthlyPayment: 'תמיכה חודשית',
	startMonthlyPayment: 'התחילו תמיכה חודשית',
	singleTimePayment: 'תמיכה חד פעמית',
	fundingAboutUsText: '"מעירים" הנה עמותה ללא מטרות רווח. אנחנו קבוצה של אנשי מקצוע ופעילים חברתיים משדות התכנון, הבנייה, הסביבה והטכנולוגיה הפועלים לילות כימים ובהתנדבות על מנת להנגיש מידע ולהגביר את השקיפות והמעורבות הציבורית במערכת התכנון והבנייה. כאחת המערכות המשפיעות ביותר על החיים האזרחיים בישראל, אנחנו פועלים להפוך אותה לכזו שמשקפת את האיזון הראוי בין אינטרסים צרים לאינטרסים רחבים, האינטרסים של כולנו.',
	fundingSuccessTitle: 'תודה על התמיכה!',
	fundingSuccessText: 'יאללה, כנסו לעמוד התוכניות שלנו, גלו מה בונים לכם ליד הבית, שתפו עם החברים והחברות באזור והשפיעו על עתיד השכונה והעיר שלכם!',
	fundingSuccessPlans: 'לעמוד התוכניות',
	fundingSuccessHome: 'לדף הבית',
	fundingSuccessClose: 'סגירה',
	readMoreAboutAchievements: 'קראו עוד על ההצלחות שלנו', 
	lastDateToObjectTrees: 'תאריך אחרון להגשת ערר',
	permitNumber: 'מספר רשיון:',
	treePermitOnGovSite: 'קישור לרשיון באתר הציבורי:',
	treeAppealTitle: 'הגשת ערר',
	treeAppealExplained: 
`לפי החוק כריתה או העתקה של עץ בוגר בישראל נדרשת לאישור מפקיד היערות. ניתן להגיש ערר על ההחלטה לכרות או להעתיק עץ בוגר, תוך 14 ימים מפרסום ההחלטה.
ערר ניתן להגיש מטעמים שונים, בין היתר, בשל פגיעה אקולוגית, ערך היסטורי, חברתי או עירוני הקשור בעץ.`,
	shareTree: 'שיתוף רשיון כריתה',
	estimatedLocation: '*המפה מציגה מיקום כללי של הכתובת',
	treeAppealButton: 'למידע נוסף על הגשת ערר',
	accountActivationTitle: 'נרשמתם בהצלחה למעירים! עתה תוכלו להתחבר באמצעות הדוא"ל והסיסמה שהגדרתם',
	accountActivationLoading: 'אנחנו מפעילים את החשבון שלך...',
	accountActivationSuccessPrefix: 'אנו ממליצים לכם לגשת לעמוד ',
	accountActivationSuccessAlerts: 'ההתראות שלי',
	accountActivationSuccessSuffix: ', להגדיר תחומי עניין וכתובות, ולהישאר מעודכנים על מה בונים לכם ליד הבית',
	homepageMainTitle: 'גלו מה מתכננים לכם ליד הבית',
	homepageMainTopTitle: 'מעירים את העיר!',
	homepageMainSubTitleA: 'אנחנו במעירים (ע"ר) פועלים להגברת השקיפות והמעורבות המקצועית והציבורית בהליכי קבלת ההחלטות הנוגעים לתכנון המרחב בו אנחנו חיים. הרשמו למערכת שלנו כדי לקבל התראות בזמן אמת, לפי כתובת מגורים או העדפה גיאוגרפית, על ',
	homepageMainSubTitlePlansLinkText: 'תוכניות בנייה',
	homepageMainSubTitleB: ' חדשות וקיימות ורישיונות ',
	homepageMainSubTitleTreesLinkText: 'לכריתת עצים',
	homepageBanner: 'מעירים (ע״ר) משנה את חוקי המשחק, ונותנת את הכוח להשפיע על עתיד הערים שלנו',
	treesHelperTitle: 'רשיונות כריתה של עצים - חדש באתר!',
	contactUs: 'צור קשר',
	treesHelperTextA: 'כדי לכרות עץ בוגר בישראל - בשטח ציבורי או פרטי - יש להוציא רישיון כריתה. מיום פרסום הרישיון יש לציבור 14 יום ',
	treesHelperTextLink: 'להגיש ערר',
	treesHelperTextB: '.\nהכניסו שם יישוב וצפו ברישיונות הכריתה:',
	plansHelperText: 'שינויים במרחב שלנו, כגון בניית שכונה חדשה, הקמת מפעל או פיתוח פארק, מחייבים עריכת תוכנית.\nועדות התכנון והבנייה אמונות על פיקוח, אישור או דחיית התוכניות.\nהכניסו כתובת וגלו את התוכניות שלידכם:',
	allRightsReserved: 'כל הזכויות שמורות',
	privacyPolicy: 'מדיניות פרטיות',
	termsOfUse: 'תנאי שימוש',
	signInToMeirim: 'התחברות למעירים',
	continue: 'המשך',
	didntJoinYet: 'עוד לא הצטרפתם?',
	loginToCompleteAction: 'כדי להשלים את הפעולה עליכם להיות מחוברים',
	alreadyMembers: 'כבר חברים בקהילה?',
	signupToMeirim: 'הרשמה למעירים',
	searchForAddress: 'חפשות כתובת',
	searchBoxTitle: 'סקרנים לדעת מה בונים לכם ליד הבית?',
	searchAddress: 'חפשו כתובת',
	watchPlans: 'צפיה בתוכניות',
	alertsSubtitle: 'כדי לקבל התראות רלבנטיות הזינו כתובת ורדיוס',
	alertsSubtitleInfo: '*כתובת מגורים, שיש בה דירה בבעלותכם, או כל כתובת שיש לכם עניין לגבי הסביבה שלה',
	alertsSubtitleInfo2: '*ניתן להוסיף יותר מכתובת אחת',
	radius: 'רדיוס',
	whoAmI: 'מי אני?',
	toGetUpdates: 'כדי לקבל עדכונים על מה בונים לך ליד הבית',
	takeAction: 'תושב/ת עם רצון לדעת ולהשפיע',
	aboutYou: 'קצת עליך',
	soMemembersKnowWhoYouAre: 'כדי ששאר חברי הקהילה יכירו אותך',
	youAreConfirming: 'בלחיצה על הכפתור הנך מאשר/ת את',
	almostDone: 'כמעט סיימנו',
	confirmEmail1: 'נשאר רק לאשר את',
	confirmEmail2: 'כתובת המייל שלך',
	sentYouEmailForConfirmation: 'שלחנו לך אימייל - לחיצה על הקישור שבתוכו תשלים את הרשמתך',
	resendEmail: 'המייל לא הגיע? לשליחה חוזרת',
	clickHere: 'לחצו כאן',
	weNeedYou: 'אנחנו צריכים אתכם!',
	weNeedYouMessage: 'יחד אתכם נוכל להציף תוכניות, להנגיש את המידע התכנוני, לקדם דו שיח, ולהרחיב את המעורבות של כולנו במערכת התכנון',
	toContribute: 'לתמיכה',
	addCitiesToGetNotified:'הוסיפו את הערים עליהם תרצו לקבל התראה',
	youCanAddMoreThanOneCity:'ניתן להוסיף יותר מעיר אחת',
	citiesNotAva:'ישנן רשויות שלא זמינות לנו כרגע',
	congratesOnJoining: 'ברכות על הצטרפותך למעירים!',
	congratesOnJoining2: 'כולם מחכים לשמוע מה יש לך לומר',
	addition: 'הוספה',
	noAddress: 'הכתובת לא נמצאה',
	addressExample: 'לדוגמא: מאז"ה 9, תל אביב',
	searchAddressOrCity: 'חפש כתובת או עיר',
	showPlans: 'הצג תוכניות:',
	inProgress: 'בתהליך',
	approved: 'מאושרות',
	moreInfo: 'מידע נוסף', 
	showPlansTooltip: `תוכניות מאושרות הן תוכניות שעברו.
תוכניות בתהליך הן תוכניות שעוברות תהליך אישור בועדות.`,
	tags: {
		public: 'מבני ציבור', 
		housing: 'דיור',
		commerce: 'מסחר',
		employment: 'תעסוקה',
		hoteliery: 'מלונאות',
		forest: 'שטח פתוח',
		lightRail: 'רכבת קלה',
		river: 'נחל'
	},
	features: { 
		createAlerts: 'נרשמים בחינם לקבלת התראות', 
		discoverPlanning: 'מחפשים את הכתובת שלכם', 
		treePermits: 'ואפשר גם לעזור להציל עצים מכריתה!', 
		savePlans: 'שומרים את התוכניות הרלוונטיות עבורכם' 
	},


	// Permits table columns
	permitSubject: 'נושא ההיתר',
	permitPermitCreatedAt: 'תאריך פתיחת היתר',
	permitRegion: 'ועדה איזורית',
	permitRealEstate: 'מקרקעין',
	permitAuthor: 'שם המבקש.ת',
	permitStatus: 'סטטוס',
	permitTimeline: 'זמן להגשת ערר',
	permitImportance: 'חשיבות ההיתר בשבילי',

	permitNav: {
		mainTable: 'טבלה ראשית',
		AOI: 'איזור אישי'
	},

	addAOI: '+ הוספת איזור עניין',
	remove: 'הסרה',
	choosePermitRegion: 'בחרו וועדה אזורית'
};

const ARABIC_TRANSLATION =  {
	addressExample: 'على سبيل المثال: شارع توفيق زياد 17، الناصرة',
	noAddress: 'العنوان غير موجود',
	addition: 'اضافة',
	congratesOnJoining2: 'כולם מחכים לשמוע מה יש לך לומר',
	congratesOnJoining: 'نحن سعيدون بانضمامك لنا',
	citiesNotAva: 'هناك بعض السلطات المحلية التي المعلومات بخصوصها غير متوفرة لنا الآن',
	youCanAddMoreThanOneCity:'يمكنك اضافة اكثر من مدينة',
	addCitiesToGetNotified:'أضف المدن التي تريد أن يتم إعلامك بها',
	toContribute: 'للدعم',
	weNeedYouMessage: 'معًا سنستطيع بعرض مخططات أكثر، أن نتيح معلومات تخطيطية بشكل أفضل، أن ندعم الحوار المهني، ونوسع مشاركتنا في سيرورة ومنظومة التخطيط',
	weNeedYou: 'نحن بحاجتك!',
	aboutYou: 'القليل عنك',
	almostDone: 'تقريبًا أنهينا',
	soMemembersKnowWhoYouAre: 'حتى يتمكن أعضاء "معيريم" من التعرف عنك',
	youAreConfirming: 'بالضغط على الزر أنت تؤكد',
	supportUs: 'ادعمونا',
	toGetUpdates: 'للحصول على إشعارات حول ما يتم بناؤه لك بالقرب من منزلك',
	signInToMeirim: 'تسجيل الدخول الى معيريم',
	watchPlans: 'شاهد المخططات',
	takeAction: 'مواطنة مع رغبة بالتأثير',
	address: 'عنوان',
	sentYouEmailForConfirmation: 'قمنا بإرسال بريد إلكتروني لك - بالضغط على الرابط المرفق ستتمكن من إنهاء عملية التسجيل',
	clickHere: 'اضعط هنا',
	resendEmail: 'لم يصلك الإيميل؟ للإرسال من جديد',
	joinMeirimCommunity: 'انضمو الى عائلة معيريم!',
	confirmEmail1: 'تبقى تأكيد',
	confirmEmail2: 'عنوان بريدك الإلكتروني',
	alerts: 'إشعارات',
	alreadySignedup: 'لديك حساب؟',
	signupToMeirim: 'تسجيل لمعيريم',
	signin: 'تسجيل الدخول',
	signout: 'خروج',
	signupNow:'سجلو الان',
	name: 'معيريم',
	myPlans: 'مخططاتي',
	loginToCompleteAction: 'لإكمال العملية يجب أن تسجلي الدخول',
	searchAddress: 'ادخل عنوان',
	plans: 'مخططات',
	searchBoxTitle: 'هل لديك فضول لمعرفة ما الذي يتم بناؤه بالقرب من منزلك؟',
	treePermits: 'اشجار',
	vocabulary: 'قاموس',
	whoWeAre: 'من نحن',
	meirimTitle: 'معلومات تخطيطية ونشاط بلدي',
	newAlert: '🏠 مخططات بناء',
	alertsSubtitle: 'للحصول على إشعار، أدخل العنوان وقطر المحيط',
	alertsSubtitleInfo: 'يمكنك ادخال عنوان سكني، او عنوان شقتك، أو أي عنوان تهتم به فيما يتعلق بمحيطه',
	alertsSubtitleInfo2: 'يمكنك إضافة أكثر من عنوان',
	newAlertTree: '🌳 تراخيص قطع الأشجار', 
	emailAddress: 'البريد الالكتروني',
	fullName: 'الاسم الكامل',
	password: 'كلمة السر',
	signup: 'تسجيل',
	alreadyGotAccount: 'هل لديك حساب؟',
	km: 'كم',
	didntJoinYet: 'لم تنتضمو حتى الان؟',
	termsOfUse: 'شروط الاستخدام',
	allRightsReserved: 'كل الحقوق محفوظة',
	emailExists: 'כתובת דוא"ל כבר רשומה',
	error: 'حدث خطا!',
	forgotPassword: 'هل نسيت كلمة السر؟',
	forgotMyPassword: 'استرجاع كلمة السر',
	loading: 'جاري التحميل',
	seenAllPlans: 'هذا هو!',
	alreadyMembers: 'هل انضممتم الى معيريم؟',
	callToAction: 'انضموا لطاقمنا',
	whatToRegister: 'רוצים השכמה?',
	ourFacebook: 'فيسبوك',
	ourTwitter: 'Twitter',
	privacyPolicy: 'سياسة الخصوصية',
	whyRegister: (
		<div>
            רוצים לדעת מה בונים לכם{' '}
			<strong>ליד הבית?</strong>
		</div>
	),
	howItWorks: `
         מערכת ההתראות שלנו מאגדת במקום אחד את כל התוכניות מכל
         ועדות התכנון ותשלח לכם התראה למייל לפי העדפה
        גיאוגרפית ובזמן אמת בכל פעם שסטטוס התכנית ישתנה.
        מהיום תוכלו לעקוב בקלות אחרי השינויים ליד הבית שלכם.`,
	summary: 'ملخص',
	opinion: 'تعليقات',
	planningInformation: 'معلومات المخطط',
	sharing: 'مشاركة',
	saving: 'حفظ',
	saved: 'حفظ بنجاح',
	addNewComment: 'اضف تعليق',
	review: 'تعليق',
	iLike: 'حبيت',
	addAResponse: 'اضف رد',
	improvementProposal: 'הצעה לשיפור',
	generalOpinion: 'חוות דעת כללית',
	emptyTextarea: 'שדה טקסט ריק',
	close: 'اغلاق',
	searchForAddress: 'ادخل عنوان',
	radius: 'نصف قطر (بعد عن العنوان)',
	send: 'ارسل',
	continue: 'اكمل',
	chooseType: 'בחרו סוג',
	startDiscussion: 'היו הראשונים להתחיל דיון על התוכנית!',
	shareThought: 'שתפו את הקהילה בדעתכם',
	planDetails: 'تفاصيل الخطة',
	planGoals: 'اهداف الخطة',
	meanings: 'משמעויות',
	status: 'الحالة',
	planType: 'نوع الخطة',
	lastUpdateDate: 'اخر تحديث',
	planDeatailOnGovSite: 'ملفات المخطط في موقع الحكومة',
	meter: 'متر',
	contactUs: 'اتصل بنا',
	thisPlanIncreases: 'يزيد هذا المخطط مساحة البناء ب',
	thisPlanAdds: 'هذا المخطط يزيد',
	extension: 'زيادة',
	buildingLand: 'مساحة بنا',
	building: 'בניה',
	insteadOf: 'بدلا',
	subscribeTitle: 'רוצים לקבל התראה כשהתכנית מתקדמת?',
	subscribeText: 'הירשמו למערכת ההתראות שלנו',
	noThanks: 'لا شكرا',
	sharePlan: 'شارك الخطة',
	whatsappShare: 'شارك عبر WhatsApp',
	copyUrl: 'او انسخو عبر الرابط',
	copy: 'نسخ',
	location: 'مكان',
	backToComments: 'חזרה לעמוד חוות הדעת',
	publishComment: 'פרסום חוות דעת',
	improvement: 'הצעה לשיפור',
	general: 'חוות דעת כללית',
	savedPlans: 'תוכניות שמורות',
	noPlansSavedTitle: 'טרם שמרת תוכניות',
	noPlansSavedContent: 'ניתן לשמור תוכניות כדי לקבל עידכונים שוטפים על כל תוכנית בארץ',
	areaUnitChanges: 'تغيير مساحة',
	housingUnitChanges: 'تغييرات وحدات سكنية',
	planData: 'معلومات المخطط',
	planDescription: 'وصف المخطط',
	fundingMainTitle: 'איך זה שאנחנו יודעים כל כך מעט על המערכת שהכי משפיעה על החיים שלנו?',
	fundingSubTitle: 'רוצים ערים עם היצע של שכונות טובות למגורים, מגוון מקומות בילוי ותעסוקה, תחבורה ציבורית יעילה, רחובות יפים ונעימים, ושלא יחנקו לכם את הנוף והטבע - אבל לא מאמינים שיש לכם את הכוח לעשות משהו?',
	fundingSubTitleBold: ' את זה באנו לשנות.',
	fundingSectionTitle: 'הצטרפו אל השינוי',
	fundingStatsTitle: 'תמכו בנו כדי שנוכל להמשיך להפעיל ולפתח את המערכת שלנו, להנגיש יותר מידע בצורה טובה יותר ולהגיע לעוד אנשים.',
	fundingEndGoal: 'אתר חדש עולה לאוויר!',
	fundingShekel: '₪',
	fundingOutOf: 'מתוך',
	fundingSupporters: 'תומכים/ות',
	monthlyPayment: 'תמיכה חודשית',
	singleTimePayment: 'תמיכה חד פעמית',
	startMonthlyPayment: 'התחילו תמיכה חודשית',
	readMoreAboutAchievements: 'קראו עוד על ההצלחות שלנו', 
	fundingAboutUsText: '"מעירים" הנה עמותה ללא מטרות רווח. אנחנו קבוצה של אנשי מקצוע ופעילים חברתיים משדות התכנון, הבנייה, הסביבה והטכנולוגיה הפועלים לילות כימים ובהתנדבות על מנת להנגיש מידע ולהגביר את השקיפות והמעורבות הציבורית במערכת התכנון והבנייה. כאחת המערכות המשפיעות ביותר על החיים האזרחיים בישראל, אנחנו פועלים להפוך אותה לכזו שמשקפת את האיזון הראוי בין אינטרסים צרים לאינטרסים רחבים, האינטרסים של כולנו.',
	fundingSuccessTitle: 'תודה על התמיכה!',
	fundingSuccessText: 'יאללה, כנסו לעמוד התוכניות שלנו, גלו מה בונים לכם ליד הבית, שתפו עם החברים והחברות באזור והשפיעו על עתיד השכונה והעיר שלכם!',
	whoAmI: 'من انا؟',
	fundingSuccessPlans: 'לעמוד התוכניות',
	fundingSuccessHome: 'لصفحة الرئيسية',
	fundingSuccessClose: 'اغلاق',
	lastDateToObjectTrees: 'תאריך אחרון להגשת ערר',
	permitNumber: 'מספר רשיון:',
	treePermitOnGovSite: 'קישור לרשיון באתר הציבורי:',
	treeAppealTitle: 'הגשת ערר',
	treeAppealExplained: 
`לפי החוק כריתה או העתקה של עץ בוגר בישראל נדרשת לאישור מפקיד היערות. ניתן להגיש ערר על ההחלטה לכרות או להעתיק עץ בוגר, תוך 14 ימים מפרסום ההחלטה.
ערר ניתן להגיש מטעמים שונים, בין היתר, בשל פגיעה אקולוגית, ערך היסטורי, חברתי או עירוני הקשור בעץ.`,
	shareTree: 'שיתוף רשיון כריתה',
	estimatedLocation: '*המפה מציגה מיקום כללי של הכתובת',
	treeAppealButton: 'למידע נוסף על הגשת ערר',
	accountActivationTitle: 'عملية تسجيلكم لـ "معيريم" تمت بنجاح! الآن يمكنك الدخول عبر البريد الإلكتروني وكلمة المرور الخاصة بكم',
	accountActivationLoading: 'אנחנו מפעילים את החשבון שלך...',
	accountActivationSuccessPrefix: 'אנו ממליצים לכם לגשת לעמוד ',
	accountActivationSuccessAlerts: 'ההתראות שלי',
	accountActivationSuccessSuffix: ', להגדיר תחומי עניין וכתובות, ולהישאר מעודכנים על מה בונים לכם ליד הבית',
	homepageMainTitle: 'معيريم | معلومات تخطيطية ونشاط بلدي',
	homepageMainTopTitle: 'מעירים את העיר!',
	homepageMainSubTitleA: 'نحن فب معيريم نعمل لزيادة الشفافية والحراك المهني والجماهيري في سيرورة اتخاذ القرار بكل ما يتعلق بمجال تخطيط الحيز الذي نعيش به. انضموا الى المنظومة لتتمكنوا من الحصول على اطراءات عن مخططات بناء جديدة او قديمة بقربة عنوانكم او بأي منطقة جغرافية اخرى.',
	homepageMainSubTitlePlansLinkText: 'خطط بناء',
	homepageMainSubTitleB: 'جديدة وقديمة ورخص',
	homepageMainSubTitleTreesLinkText: 'لقطع الاشجار',
	homepageBanner: 'מעירים (ע״ר) משנה את חוקי המשחק, ונותנת את הכוח להשפיע על עתיד הערים שלנו',
	treesHelperTitle: 'تراخيص قطع الأشجار - جديد في الموقع!',
	treesHelperTextA: 'כדי לכרות עץ בוגר בישראל - בשטח ציבורי או פרטי - יש להוציא רישיון כריתה. מיום פרסום הרישיון יש לציבור 14 יום ',
	treesHelperTextLink: 'להגיש ערר',
	treesHelperTextB: '.\nהכניסו שם יישוב וצפו ברישיונות הכריתה:',
	plansHelperText: 'تتطلب التغييرات في الحيز الذي نعيش به، مثل بناء حي جديد أو بناء مصنع أو تطوير حديقة، وضع خطط ومخططات. لجان التخطيط والبناء تقوم بالإشراف على الخطط، وبالمقابل تصادق عليها أو ترفضها. أدخل عنوانًا واكتشف المخططات المجاورة لك:',
	searchAddressOrCity: 'חפש כתובת או עיר',
	showPlans: 'הצג תוכניות:',
	inProgress: 'בתהליך',
	approved: 'מאושרות',
    urbanPlanning: 'ידע',
    urbanPlanningTitle:'מרכז הידע',
    urbanPlanningSubtitle: 'אנחנו מנגישים ידע ויוצרים תוכן כדי שתוכלו גם לדעת, גם להבין וגם להשפיע על המערכת שהכי משפיעה על החיים שלנו, מערכת התכנון והבניה.',
	showPlansTooltip: `תוכניות מאושרות הן תוכניות שעברו.
תוכניות בתהליך הן תוכניות שעוברות תהליך אישור בועדות.`,
	tags: {
		public: 'مباني عامة', 
		housing: 'سكن',
		commerce: 'تجارة',
		employment: 'إشغال',
		hoteliery: 'فندقة',
		forest: 'أراضي مفتوحة',
		lightRail: 'قطار خفيف',
		river: 'تيار مائي'
	},
	features: { 
		createAlerts: 'נרשמים בחינם לקבלת התראות', 
		discoverPlanning: 'מחפשים את הכתובת שלכם', 
		treePermits: 'ואפשר גם לעזור להציל עצים מכריתה!', 
		savePlans: 'שומרים את התוכניות הרלוונטיות עבורכם' 
	}
};

export const LANGUAGES = {
    AR: ARABIC_TRANSLATION,
    HE: HEBREW_TRANSLATION,
};

export const localeStore = createStore(LOCALE_STORE, {
    selectedLanguage: defaultLanguage,
    translate: LANGUAGES[defaultLanguage],
});

export const useTranslation = () => {
    const [localeState, setLocalState] = useStore(LOCALE_STORE);
    const changeLanguage = (newLanguage) => {
        setLocalState({
            selectedLanguage: newLanguage,
            translate: LANGUAGES[newLanguage],
        });
    };

    return {
        t: localeState.translate,
        selectedLanguage: localeState.selectedLanguage,
        changeLanguage,
    };
};

export default {
    alerts: 'إشعارات',
    signin: 'تسجيل الدخول',
    signout: 'התנתקות',
    name: 'מעירים',
    myPlans: 'התוכניות שלי',
    plans: 'مخططات',
    treePermits: 'اشجار',
    vocabulary: 'قاموس',
    whoWeAre: 'من نحن',
    meirimTitle: 'מידע תכנוני ואקטיביזם עירוני',
    newAlert: 'תוכניות בניה',
    newAlertTree: 'רשיונות כריתה של עצים',
    emailAddress: 'כתובת דוא"ל',
    fullName: 'שם מלא',
    password: 'סיסמה',
    signup: 'تسجيل',
    signupNow: 'הרשמו עכשיו',
    alreadyGotAccount: 'יש לכם כבר חשבון?',
    km: 'ק"מ',
    emailExists: 'כתובת דוא"ל כבר רשומה',
    error: 'שגיאה',
    forgotPassword: 'שכחתם את הסיסמה?',
    forgotMyPassword: 'שכחתי סיסמה',
    loading: 'טוען',
    seenAllPlans: 'זה הכל!',
    callToAction: 'הצטרפו למעירים',
    whatToRegister: 'רוצים השכמה?',
    whyRegister: (
        <div>
            רוצים לדעת מה בונים לכם <strong>ליד הבית?</strong>
        </div>
    ),
    howItWorks: `
         מערכת ההתראות שלנו מאגדת במקום אחד את כל התוכניות מכל
         ועדות התכנון ותשלח לכם התראה למייל לפי העדפה
        גיאוגרפית ובזמן אמת בכל פעם שסטטוס התכנית ישתנה.
        מהיום תוכלו לעקוב בקלות אחרי השינויים ליד הבית שלכם.`,
	saved: 'שמור',
	addNewComment: 'הוספת חוות דעת',
	review: 'ביקורת',
	iLike: 'אהבתי',
	addAResponse: 'הוספת תגובה',
	improvementProposal: 'הצעה לשיפור',
	generalOpinion: 'חוות דעת כללית',
	emptyTextarea: 'שדה טקסט ריק',
	close: 'סגירה',
	send: 'שליחה',
	chooseType: 'בחרו סוג',
	startDiscussion: 'היו הראשונים להתחיל דיון על התוכנית!',
	shareThought: 'שתפו את הקהילה בדעתכם',
	planDetails: 'פרטי התכנית',
	planGoals: 'מטרות התכנית',
	meanings: 'משמעויות',
	status: 'סטטוס',
	planType: 'סוג תכנית',
	lastUpdateDate: 'עדכון אחרון',
	planDeatailOnGovSite: 'מסמכי התוכנית באתר הממשלה',
	meter: 'מ״ר',
	thisPlanIncreases: 'תוכנית זו מגדילה את השטח הבנוי פי',
	thisPlanAdds: 'תוכנית זו מוסיפה',
	extension: 'תוספת',
	buildingLand: 'שטח בנוי',
	building: 'בניה',
	insteadOf: 'במקום',
	subscribeTitle: 'רוצים לקבל התראה כשהתכנית מתקדמת?',
	subscribeText: 'הירשמו למערכת ההתראות שלנו',
	noThanks: 'לא תודה',
	sharePlan: 'שיתוף תכנית',
	whatsappShare: 'שיתוף ב-Whatsapp',
	facebookShare: 'שיתוף ב-Facebook',
	copyUrl: 'או העתיקו את הקישור',
	copy: 'העתק',
	location: 'מיקום',
	backToComments: 'חזרה לעמוד חוות הדעת',
	publishComment: 'פרסום חוות דעת',
	improvement: 'הצעה לשיפור',
	general: 'חוות דעת כללית',
	savedPlans: 'תוכניות שמורות',
	noPlansSavedTitle: 'טרם שמרת תוכניות',
	noPlansSavedContent: 'ניתן לשמור תוכניות כדי לקבל עידכונים שוטפים על כל תוכנית בארץ',
	areaUnitChanges: 'שינוי שטח',
	housingUnitChanges: 'שינוי יחידות דיור',
	planData: 'נתוני התוכנית',
	planDescription: 'תיאור התוכנית',
	fundingMainTitle: 'עזרו לנו להמשיך ולהגביר את השקיפות והשותפות בהחלטות שמעצבות את המרחב שלנו',
	fundingSubTitle: 'מעירים הנה עמותה ללא מטרות רווח המאגדת אנשי מקצוע ופעילים חברתיים משדות התכנון, הבנייה, הסביבה והטכנולוגיה הפועלים על מנת להנגיש מידע ולהגביר את השקיפות והמעורבות המקצועית והציבורית במערכת התכנון והבנייה. אנו חותרים ליצירת שותפות בין הציבור הרחב, הארגונים, אנשי המקצוע והחברים בוועדות התכנון באמצעות חדשנות דיגיטלית ופיתוח כלים להנגשת מידע ועידוד שיח ',
	fundingSubTitleBold: 'במטרה לתת ייצוג הולם לקולות שונים, לצמצם פערים חברתיים ולשמור על הסביבה.',
	fundingExplanation: 'ככל שהמערכת החינמית שלנו מתפתחת ונרשמים אליה יותר אנשים, עלויות התחזוקה שלה גדלות ומעבר לזה, יש לנו עוד כל כך הרבה חלומות. תמכו בנו כדי שנכל להמשיך ולהנגיש יותר מידע ויותר טוב, להגיע לכמה שיותר אנשים ולבסס קהילה ולשנות את כללי המשחק לטובת הציבור הרחב. תמיכה קבועה בכל סכום יכולה לעזור לנו לבסס את הפעילות בצורה ברמת קיימא.',
	fundingSectionTitle: 'הפכו לשותפים שלנו!',
	fundingStatsTitle: 'תמכו בנו כדי שנוכל להמשיך להפעיל ולפתח את המערכת שלנו, להנגיש יותר מידע בצורה טובה יותר ולהגיע לעוד אנשים.',
	fundingEndGoal: 'אתר חדש עולה לאוויר!',
	readMoreAboutAchievements: 'קראו עוד על ההצלחות שלנו', 
	fundingShekel: '₪',
	fundingOutOf: 'מתוך',
	fundingSupporters: 'תומכים/ות',
	monthlyPayment: 'תמיכה חודשית',
	singleTimePayment: 'תמיכה חד פעמית',
	fundingAboutUsText: '"מעירים" הנה עמותה ללא מטרות רווח. אנחנו קבוצה של אנשי מקצוע ופעילים חברתיים משדות התכנון, הבנייה, הסביבה והטכנולוגיה הפועלים לילות כימים ובהתנדבות על מנת להנגיש מידע ולהגביר את השקיפות והמעורבות הציבורית במערכת התכנון והבנייה. כאחת המערכות המשפיעות ביותר על החיים האזרחיים בישראל, אנחנו פועלים להפוך אותה לכזו שמשקפת את האיזון הראוי בין אינטרסים צרים לאינטרסים רחבים, האינטרסים של כולנו.',
	fundingSuccessTitle: 'תודה על התמיכה!',
	fundingSuccessText: 'יאללה, כנסו לעמוד התוכניות שלנו, גלו מה בונים לכם ליד הבית, שתפו עם החברים והחברות באזור והשפיעו על עתיד השכונה והעיר שלכם!',
	fundingSuccessPlans: 'לעמוד התוכניות',
	fundingSuccessHome: 'לדף הבית',
	fundingSuccessClose: 'סגירה',
	lastDateToObjectTrees: 'תאריך אחרון להגשת ערר',
	permitNumber: 'מספר רשיון:',
	treePermitOnGovSite: 'קישור לרשיון באתר הציבורי:',
	treeAppealTitle: 'הגשת ערר',
	moreInfo: 'מידע נוסף', 
	treeAppealExplained: 
`לפי החוק כריתה או העתקה של עץ בוגר בישראל נדרשת לאישור מפקיד היערות. ניתן להגיש ערר על ההחלטה לכרות או להעתיק עץ בוגר, תוך 14 ימים מפרסום ההחלטה.
ערר ניתן להגיש מטעמים שונים, בין היתר, בשל פגיעה אקולוגית, ערך היסטורי, חברתי או עירוני הקשור בעץ.`,
    shareTree: 'שיתוף רשיון כריתה',
    estimatedLocation: '*המפה מציגה מיקום כללי של הכתובת',
    treeAppealButton: 'למידע נוסף על הגשת ערר',
    accountActivationTitle:
        'נרשמתם בהצלחה למעירים! עתה תוכלו להתחבר באמצעות הדוא"ל והסיסמה שהגדרתם',
    accountActivationLoading: 'אנחנו מפעילים את החשבון שלך...',
    accountActivationSuccessPrefix: 'אנו ממליצים לכם לגשת לעמוד ',
    accountActivationSuccessAlerts: 'ההתראות שלי',
    accountActivationSuccessSuffix:
        ', להגדיר תחומי עניין וכתובות, ולהישאר מעודכנים על מה בונים לכם ליד הבית',
    homepageMainTitle: 'מעירים: לדעת, להשתתף ולהשפיע!',
    homepageMainSubTitleA:
        'אנחנו במעירים (ע"ר) פועלים להגברת השקיפות והמעורבות המקצועית והציבורית בהליכי קבלת ההחלטות הנוגעים לתכנון המרחב בו אנחנו חיים. הרשמו למערכת שלנו כדי לקבל התראות בזמן אמת, לפי כתובת מגורים או העדפה גיאוגרפית, על ',
    homepageMainSubTitlePlansLinkText: 'תוכניות בנייה',
    homepageMainSubTitleB: ' חדשות וקיימות ורישיונות ',
    homepageMainSubTitleTreesLinkText: 'לכריתת עצים',
    treesHelperTitle: 'רשיונות כריתה של עצים - חדש באתר!',
    treesHelperTextA:
        'כדי לכרות עץ בוגר בישראל - בשטח ציבורי או פרטי - יש להוציא רישיון כריתה. מיום פרסום הרישיון יש לציבור 14 יום ',
    treesHelperTextLink: 'להגיש ערר',
    treesHelperTextB: '.\nהכניסו שם יישוב וצפו ברישיונות הכריתה:',
    plansHelperText:
        'שינויים במרחב שלנו, כגון בניית שכונה חדשה, הקמת מפעל או פיתוח פארק, מחייבים עריכת תוכנית.\nועדות התכנון והבנייה אמונות על פיקוח, אישור או דחיית התוכניות.\nהכניסו כתובת וגלו את התוכניות שלידכם:',
    searchAddressOrCity: 'חפש כתובת או עיר',
    showPlans: 'הצג תוכניות:',
    inProgress: 'בתהליך',
    approved: 'מאושרות',
    showPlansTooltip: `תוכניות מאושרות הן תוכניות שעברו.
תוכניות בתהליך הן תוכניות שעוברות תהליך אישור בועדות.`,
};
