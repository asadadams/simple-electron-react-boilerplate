import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //React Router is used for routing

/*
	Importing  react components
	More components can be created in the Components directory and imported here
*/
import Home from './Components/Home';
import About from './Components/About';


class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/about" component={About}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<App />,
	document.getElementById('root'));

