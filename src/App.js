import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import Inputs from './components/Inputs';
import markSheets from './service/markSheet';
import StudentTable from './components/StudentTable';

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
			<StudentTable { ...extendedContext }/>
			<Inputs { ...extendedContext }/>
			<AddButton { ...extendedContext }/>
		</div>
	);
};

export default App;
