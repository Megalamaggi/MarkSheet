import { peek } from '@laufire/utils/debug';

const passMark = 35;

const getResult = (student) => (Math.min(
	student.tamil,
	student.english,
	student.maths,
	student.science,
	student.social
) >= passMark
	? 'pass'
	: 'fail');

const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return tamil + english + maths + science + social;
};

const processData = (student) => ({
	...student,
	total: getTotal(student),
	result: getResult(student),

});

const getRank = (studentsData) => {
	let rank = 1;
	const sorted = studentsData.sort((a, b) => b.total - a.total);
	const ranked = sorted.map((student) => ({
		...student,
		rank: student.result === 'pass' ? rank++ : '-',
	}));

	return ranked;
};

const addFields = (markSheets) => {
	peek(markSheets);
	const studentsData = markSheets.map(processData);

	return getRank(studentsData);
};

export default addFields;
