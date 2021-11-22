export default function appendToEachArrayValue(array, appendString) {
  let outputArray = [];
  for (const value of array.keys()) {
    outputArray.push(`${appendString}${array[value]}`);
  }
  return outputArray;
}
