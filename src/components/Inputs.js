import React from 'react';

const Inputs = (context) => {
	const { state, setState, config: { headers }} = context;
	const { currentMarkSheet } = state;

	return headers.map((header, Key) =>
		<span Key={ Key }>
			<label>{header}:</label>
			<input
				style={ { width: '71px' } }
				onChange={ ({ target: { value }}) => setState({
					...state,
					currentMarkSheet: {
						...currentMarkSheet, [header]: value,
					},
				}) }
			/>
		</span>);
};

export default Inputs;
