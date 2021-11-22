export default function appendToEachArrayValue(array, appendString) {
  const outputArray = [];
  for (const value of array.keys()) {
    outputArray += `${appendString}${array[value]}`;
  }
  return outputArray;
}
