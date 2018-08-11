import React from 'react';
import { Link,hashHistory } from 'react-router';



export class About extends React.Component {  


  render() {
    return (
		<div className='About'>
			<h1>This is the About Route</h1>
			<Link to="/">GO TO HOME</Link>
		</div>
    );
  }
}

