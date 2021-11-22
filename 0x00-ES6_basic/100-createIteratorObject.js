export default function createIteratorObject(report) {
	const { allEmployees } = report;
	const output = [];

	const departmentArrays = Object.keys(allEmployees).map(
		(department) => allEmployees[department]
	);

	for (let employees in departmentArrays) {
		output.push(...departmentArrays[employees]);
	}
	return output;
}
