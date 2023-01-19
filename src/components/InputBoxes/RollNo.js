import React from 'react';

const RollNo = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet } = state;

	return <div>
		<input
			placeholder="Enter rollNo"
			onChange={ ({ target: { value }}) => setState({
				...state,
				currentMarkSheet: { ...currentMarkSheet, rollNo: value },
			}) }
		/> </div>;
};

export default RollNo;
