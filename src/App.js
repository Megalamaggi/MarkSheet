import { React, useContext, useState } from 'react';
import './App.scss';

import Simpletable from './components/Simpletable';
import markSheets from './service/markSheet';

const App = () => {
	const [state, setState] = useState({ markSheets });
	const extendedContext = { ...useContext, state, setState };

	return <div className="App">
		<Simpletable { ...extendedContext }/>
	</div>;
};

export default App;
