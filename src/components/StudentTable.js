import { React } from 'react';
import headers from '../service/header';
import addFields from '../service/studentsManager';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const StudentTable = ({ state: { markList }}) =>
	<div>
		<h1>MarkSheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{headers.map(TableHeader)}
				</tr>
			</thead>
			<tbody>
				{addFields(markList).map(TableRow)}
			</tbody>
		</table>
	</div>;

export default StudentTable;
