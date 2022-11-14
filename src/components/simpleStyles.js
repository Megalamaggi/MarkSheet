import { React } from 'react';
import compensations from '../service/data';

const style = {
	background: 'plum',
	border: '2px inset black',
	marginTop: '15px',
	fontSize: '16px',
	webkitBoxShadow: ' 3px 2px 5px 5px darkslateGrey',
	textAlign: 'center',
};

const columnStyle = {
	display: 'inline-block',
	border: '2px inset black',
	width: '150px',
};

const Simplestyles = () => {
	const lines = compensations.map(({ name, amount }, key) =>
		<div
			key={ key }
			style={ style }
		>
			<span style={ columnStyle }>{name}</span>
			<span style={ columnStyle }>{amount}</span>
		</div>);

	return <div>
		<h1>compensations</h1>
		<div> {lines} </div>
	</div>;
};

export default Simplestyles;
