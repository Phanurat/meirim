const Router = require('express').Router();
const SignUp = require('./controller/sign');
const Password = require('./controller/password');
const Alert = require('./controller/alert');
// const Activity = require('./controller/activity');
// const cron = require('./Controller/cron');
// const Tag = require('./controller/tag');
// const Status = require('./controller/status');
// const health = require('./Controller/health');
const {
  wrap,
} = require('./controller/controller');


// Sign up
Router.post('/sign/up', wrap(SignUp.signup, SignUp));
Router.post('/sign/activate', wrap(SignUp.activate, SignUp));
Router.post('/sign/in', wrap(SignUp.signin, SignUp));
Router.post('/sign/out', wrap(SignUp.signout, SignUp));

// Activity
// Router.get('/activity/', wrap(Activity.browse));
// Router.post('/activity/', wrap(Activity.create));
// Router.get('/activity/:id', wrap(Activity.read));
// Router.post('/activity/:id/join', wrap(Activity.join));

// Password
Router.post('/password/sendResetToken', wrap(Password.sendResetToken));
Router.post('/password/resetWithToken', wrap(Password.resetWithToken));

// Alert
Router.get('/alert/', wrap(Alert.browse, Alert));
Router.get('/alert/:id', wrap(Alert.read, Alert));
Router.post('/alert/', wrap(Alert.create, Alert));
Router.delete('/alert/:id', wrap(Alert.delete, Alert));

// Cron
// Router.get('/cron/iplan', wrap(iplan));
// Router.get('/cron/send_planning_alerts', wrap(sendPlanningAlerts));

// Tag
// Router.get('/tag/', wrap(Tag.instance.browse, Tag.instance));

// Status
// Router.get('/', wrap(Status.browse));

// Health
Router.get('/health', wrap(() => true));

module.exports = Router;