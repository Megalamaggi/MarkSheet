import React from 'react';

const Science = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			placeholder="science"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: {
					...currentMarkSheet, science: Number(value),
				},
			}) }
		/></div>;
};

export default Science;
