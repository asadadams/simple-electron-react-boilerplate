import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'; //React Router is used for routing

/*
	Importing  react components
	More components can be created in the Components directory and imported here
*/
import {Home} from './Components/Home';
import {About} from './Components/About';


class App extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
				
				<Route path="/" component={Home}>
					<IndexRoute component={Home}/>
				</Route>

				<Route path="about" component={About}></Route>
				
			</Router>
		);
	}
}

ReactDOM.render(<App />, 
document.getElementById('root'));

