export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const output = [];

  const departmentArrays = Object.keys(allEmployees).map(
    (department) => allEmployees[department],
  );

  for (const employees in departmentArrays) {
    if ({}.hasOwnProperty.call(departmentArrays, employees)) {
      output.push(...departmentArrays[employees]);
    }
  }
  return output;
}
