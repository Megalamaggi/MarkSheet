import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import Inputs from './components/Inputs';
import markSheets from './service/markSheet';
import StudentsTable from './components/StudentsTable';

const initialState = {
	currentMarkSheet: {
		rollNo: null,
		name: null,
		tamil: 0,
		english: 0,
		maths: 0,
		science: 0,
		social: 0,
	},
	markList: markSheets,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<StudentsTable { ...extendedContext }/>
			<Inputs { ...extendedContext }/>
			<AddButton { ...extendedContext }/>
		</div>
	);
};

export default App;
