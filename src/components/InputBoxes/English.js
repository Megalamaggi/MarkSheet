import React from 'react';

const English = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			placeholder="english"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: {
					...currentMarkSheet, english: Number(value),
				},
			}) }
		/> </div>;
};

export default English;
