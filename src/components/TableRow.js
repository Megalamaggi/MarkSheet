import { React } from 'react';

const TableRow = ({
	rollNo, name, tamil, english, maths, science, social, total, result, rank,
}, key) =>
	<tr key={ key }>
		<td className="numberStyle">{rollNo}</td>
		<td className="textStyle">{name}</td>
		<td className="numberStyle">{tamil}</td>
		<td className="numberStyle">{english}</td>
		<td className="numberStyle">{maths}</td>
		<td className="numberStyle">{science}</td>
		<td className="numberStyle">{social}</td>
		<td className="numberStyle">{total}</td>
		<td className="numberStyle">{result}</td>
		<td className="numberStyle">{rank}</td>
	</tr>;

export default TableRow;
