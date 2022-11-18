/* eslint-disable max-lines-per-function */
import { React } from 'react';
import markSheets from '../service/markSheet';
import headers from '../service/header';
import addFields from '../service/studentsManager';

const Simpletable = () =>
	<div>
		<h1 className="titleStyle">MarkSheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{
						headers.map((data, key) =>
							<th key={ key } className="headerStyle">{ data }
							</th>)
					}
				</tr>
			</thead>
			<tbody>
				{addFields(markSheets).map((markSheet, key) =>
					<tr key={ key }>
						<td className="numberStyle"> {markSheet.rollNo}</td>
						<td className="textStyle"> {markSheet.name}</td>
						<td className="numberStyle"> {markSheet.tamil}</td>
						<td className="numberStyle">{markSheet.english}</td>
						<td className="numberStyle">{markSheet.maths}</td>
						<td className="numberStyle">{markSheet.science}</td>
						<td className="numberStyle">{markSheet.social}</td>
						<td className="numberStyle">{markSheet.total} </td>
						<td className="numberStyle">{markSheet.result} </td>
						<td className="numberStyle">{markSheet.rank} </td>
					</tr>)}
			</tbody>
		</table>
	</div>;

export default Simpletable;
