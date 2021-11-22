export default function appendToEachArrayValue(array, appendString) {
	for (let value of array.keys()) {
		array[value] = `${appendString}${array[value]}`;
	}
	return array;
}
