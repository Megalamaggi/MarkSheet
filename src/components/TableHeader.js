import { React } from 'react';

const TableHeader = (data, key) =>
	<th key={ key } className="headerStyle">{ data }</th>;

export default TableHeader;
