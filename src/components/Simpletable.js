/* eslint-disable max-len */
import { React } from 'react';
import markSheets from '../service/markSheet';
import headers from '../service/header';
import addFields from '../service/studentsManager';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

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
