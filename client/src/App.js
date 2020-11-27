import './assets/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faTimes, faBuilding, 
	faPaperPlane, faChartArea
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Home, AlertUnsubscribe, Alerts, 
	SinglePlan, Plans, Activate, About, 
	ForgotPassword, Vocabulary, Terms, NotFound } from 'scenes'
import EmailSent from 'pages/Register/emailSent';
import Modal from 'shared/modal'
import 'App.css';
import { CookieHook } from 'hooks'

library.add(faSpinner, faTimes, faBuilding, faPaperPlane, faChartArea, faWhatsapp);

const theme = createMuiTheme({
	palette: {
	  primary: {
	      main: '#652dd0'
		},
		secondary: {
			main: '#1a2d66'
		}
	}
});

const App = () => {
	const [me] = React.useState(null)

	const { success, response ,error, loading } = CookieHook()
	console.log('🚀 ~ file: App.js ~ line 37 ~ App ~  success, response ,error, loading ',  success, response ,error, loading )
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div>
					<Modal />
					<Switch>
						<Route
							exact
							path="/"
							render={props => <Home {...props} me={me} />}
						/>
						<Route
							path="/alerts/unsubscribe/:token"
							render={props => <AlertUnsubscribe {...props} me={me} />}
						/>
						<Route
							path="/alerts"
							render={props => <Alerts {...props} me={me} />}
						/>
						<Route
							path="/plan/:id/:title"
							render={props => <SinglePlan {...props} me={me} />}
						/>
						<Route
							path="/plan/:id"
							render={props => <SinglePlan {...props} me={me} />}
						/>
						<Route
							path="/plans"
							render={props => <Plans {...props} me={me} />}
						/>
						<Route
							path="/activate"
							render={props => <Activate {...props} me={me} />}
						/>
						<Route
							path="/forgot"
							render={props => (
								<ForgotPassword {...props} me={me} />
							)}
						/>
						<Route
							path="/vocabulary"
							render={props => <Vocabulary {...props} me={me} />}
						/>
						<Route
							path="/about"
							render={props => <About {...props} me={me} />}
						/>
						<Route
							path="/terms"
							render={props => <Terms {...props} me={me} />}
						/>
						<Route
							path="/404"
							render={props => <NotFound {...props} me={me} />}
						/>
						<Route
							path="/email-sent"
							render={props => <EmailSent {...props} me={me} />}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
			<ToastContainer autoClose={false}/>
		</MuiThemeProvider>
	);
}

export default App;
