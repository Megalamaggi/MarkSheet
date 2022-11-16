/* eslint-disable max-lines-per-function */
import { React } from 'react';
import markSheets from '../service/markSheet';
import headers from '../service/header';

const numberStyle = {
	background: 'lavender',
	border: '2px solid black',
	fontSize: '16px',
	width: '100px',
	height: '23px',
	paddingRight: '5px',
	textAlign: 'right',
};

const textStyle = {
	...numberStyle,
	textAlign: 'left',
	paddingLeft: '5px',
};

const titleStyle = {
	fontSize: '30px',
	fontWeight: 'bold',
	textAlign: 'center',
};

const headerStyle = {
	background: 'lavender',
	border: '2px solid black',
	textAlign: 'center',
	fontSize: '21px',
	fontWeight: 'bold',
	height: '35px',
};

const tableStyle = {
	borderCollapse: 'collapse',
	margin: 'auto',
};

const Simpletable = () =>
	<div>
		<h1 style={ titleStyle }>MarkSheet</h1>
		<table style={ tableStyle }>
			<thead>
				<tr>
					{
						headers.map((data, key) =>
							<th key={ key } style={ headerStyle }>{ data }</th>)
					}
				</tr>
			</thead>
			<tbody>
				{markSheets.map((markSheet, key) =>
					<tr key={ key }>
						<td style={ numberStyle }> {markSheet.rollNo}</td>
						<td style={ textStyle }> {markSheet.name}</td>
						<td style={ numberStyle }> {markSheet.tamil}</td>
						<td style={ numberStyle }>{markSheet.english}</td>
						<td style={ numberStyle }>{markSheet.maths}</td>
						<td style={ numberStyle }>{markSheet.science}</td>
						<td style={ numberStyle }>{markSheet.social}</td>
						<td style={ numberStyle }>{markSheet.tamil
							+ markSheet.english
							+ markSheet.maths
							+ markSheet.science
							+ markSheet.social} </td>
					</tr>)}
			</tbody>
		</table>
	</div>;

export default Simpletable;
