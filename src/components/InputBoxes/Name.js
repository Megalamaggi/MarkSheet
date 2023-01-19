import React from 'react';

const Name = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			type="text"
			placeholder="Enter name"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: { ...currentMarkSheet, name: value },
			}) }
		/> </div>;
};

export default Name;
