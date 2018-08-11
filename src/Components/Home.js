import React from 'react';
import { Link,hashHistory } from 'react-router';



export class Home extends React.Component {  


  render() {
    return (
		<div className='home'>
			<h1>This is the Home Route</h1>
			<Link to="about">GO TO ABOUT</Link>
		</div>
    );
  }
}

