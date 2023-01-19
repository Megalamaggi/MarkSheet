import React from 'react';

const AddButton = (context) => {
	const { setState, state } = context;
	const { currentMarkSheet, markList } = state;

	return (
		<button onClick={ () => setState({
			...state,
			markList: [...markList, currentMarkSheet],
		}) }
		>Add</button>
	);
};

export default AddButton;
