export default function hasValuesFromArray(set, array) {
  if (!set || !Array.isArray(array)) throw new Error('invalid parameter');
  let output = true;
  for (let i = 0; i < array.length; i++) {
    set.has(array[i]) ? output = true : output = false;
  }
  return output;
}
