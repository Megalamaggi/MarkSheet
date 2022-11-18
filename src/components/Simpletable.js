/* eslint-disable max-len */
import { React } from 'react';
import markSheets from '../service/markSheet';
import headers from '../service/header';
import addFields from '../service/studentsManager';

const TableHeader = (data, key) =>
	<th key={ key } className="headerStyle">{ data }</th>;

const TableRow = ({ rollNo, name, tamil, english, maths, science, social, total, result, rank }, key) =>
	<tr key={ key }>
		<td className="numberStyle"> { rollNo}</td>
		<td className="textStyle"> {name}</td>
		<td className="numberStyle"> {tamil}</td>
		<td className="numberStyle">{english}</td>
		<td className="numberStyle">{maths}</td>
		<td className="numberStyle">{science}</td>
		<td className="numberStyle">{social}</td>
		<td className="numberStyle">{total} </td>
		<td className="numberStyle">{result} </td>
		<td className="numberStyle">{rank} </td>
	</tr>;

const Simpletable = () =>
	<div>
		<h1 className="titleStyle">MarkSheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{
						headers.map(TableHeader)
					}
				</tr>
			</thead>
			<tbody>
				{addFields(markSheets).map(TableRow)}
			</tbody>
		</table>
	</div>;

export default Simpletable;
