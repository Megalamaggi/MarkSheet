import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import InputBoxes from './components/InputBoxes/InputBoxes';
import Simpletable from './components/Simpletable';
import markSheets from './service/markSheet';

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

	return <div className="App">
		<Simpletable { ...extendedContext }/>
		<InputBoxes { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
	</div>;
};

export default App;
