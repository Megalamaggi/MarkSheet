/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { React } from 'react';
import markSheets from '../service/markSheet';

const rowStyle = {
	background: 'lavender',
	border: '2px insert black',
	// marginTop: '15px',
	fontSize: '16px',
	webkitBoxShadow: ' 3px 2px 5px 5px darkslateGrey',
	textAlign: 'center',
	color: 'black',

};

const columnStyle = {
	display: 'inline-block',
	paddingLeft: '5px',
	border: '2px inset black',
	width: '100px',
	textAlign: 'left',
	height: '30px',
};

const titleStyle = {
	background: 'lavender',
	paddingLeft: '221.5px',
	border: '2px inset black',
	fontSize: '25px',
	fontWeight: 'bold',
};

const headerStyle = {
	border: '5px',
	background: 'black',
	textAlign: 'center',
	fontWeight: 'bold',
	color: 'white',
};

const numberStyle = {
	...columnStyle,
	paddingRight: '5px',
	textAlign: 'right',
};

const Simplestyles = () => {
	// eslint-disable-next-line max-len
	const lines = markSheets.map(({ rollNo, name, tamil, english, maths, science, social }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ numberStyle }>{rollNo}</span>
			<span style={ columnStyle }>{name}</span>
			<span style={ numberStyle }>{tamil}</span>
			<span style={ numberStyle }>{english}</span>
			<span style={ numberStyle }>{maths}</span>
			<span style={ numberStyle }>{science}</span>
			<span style={ numberStyle }>{social}</span>
		</div>);

	return <div>
		<h1 style={ headerStyle }>MarkSheets</h1>
		<div style={ titleStyle }>
			<span style={ numberStyle }>RollNo</span>
			<span style={ columnStyle }>Name</span>
			<span style={ numberStyle }>Tamil</span>
			<span style={ numberStyle }>English</span>
			<span style={ numberStyle }>Maths</span>
			<span style={ numberStyle }>Science</span>
			<span style={ numberStyle }>Social</span>
		</div>
		<div> {lines} </div>
	</div>;
};

export default Simplestyles;
