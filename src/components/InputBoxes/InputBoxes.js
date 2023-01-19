import React from 'react';
import English from './English';
import Maths from './Maths';
import Name from './Name';
import RollNo from './RollNo';
import Science from './Science';
import Social from './Social';
import Tamil from './Tamil';

const InputBoxes = (context) =>
	<div>
		<span>
			<RollNo { ...context }/>
			<Name { ...context }/>
			<Tamil { ...context }/>
			<English { ...context }/>
			<Maths { ...context }/>
			<Science { ...context }/>
			<Social { ...context }/>
		</span>
	</div>;

export default InputBoxes;
