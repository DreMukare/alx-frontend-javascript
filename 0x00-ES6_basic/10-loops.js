export default function appendToEachArrayValue(array, appendString) {
  const outputArray = [];
  for (const value of array) {
    outputArray.push(`${appendString}${value}`);
  }
  return outputArray;
}
