import React from 'react';

const Tamil = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			type="number"
			placeholder="tamil"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: { ...currentMarkSheet, tamil: Number(value) },
			}) }
		/></div>;
};

export default Tamil;
