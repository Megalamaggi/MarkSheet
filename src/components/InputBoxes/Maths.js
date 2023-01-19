import React from 'react';

const Maths = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			placeholder="maths"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: {
					...currentMarkSheet, maths: Number(value),
				},
			}) }
		/></div>;
};

export default Maths;
