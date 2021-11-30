export default function hasValuesFromArray(set, array) {
  if (!set || !Array.isArray(array)) throw new Error('invalid parameter');
  let output = true;
  for (let i = 0; i < array.length; i += 1) {
    output = set.has(array[i]);
  }
  return output;
}
