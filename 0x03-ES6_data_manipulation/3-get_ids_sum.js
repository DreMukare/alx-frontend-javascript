export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) return [];
  return list
    .map((value) => value.id)
    .reduce((accumulator, currentVal) => accumulator + currentVal, 0);
}
