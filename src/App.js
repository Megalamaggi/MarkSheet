import { React } from 'react';
import './App.scss';
import getCompensations from './service/data';

const getOutput = ({ name, amount }) =>
	`${ name } got ${ amount }.`;

const App = () => {
	const compensations = getCompensations();
	const lines = compensations.map((compensation, key) =>
		<div
			key={ key }
			style={ {
				background: 'aqua',
				border: '4px solid black',
				marginTop: '15px',
			} }
		>
			{getOutput(compensation)}
		</div>);

	// eslint-disable-next-line no-console
	console.log({ compensations, lines });

	return <div>
		<h1>Compensations</h1>
		<div> {lines}</div>
	</div>;
};

export default App;
