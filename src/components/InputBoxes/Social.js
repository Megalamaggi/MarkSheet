import React from 'react';

const Social = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			placeholder="social"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: {
					...currentMarkSheet, social: Number(value),
				},
			}) }
		/></div>;
};

export default Social;
