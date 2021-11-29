export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('set must be a set');
  } else if (typeof startString !== 'string') {
    throw new TypeError('startString must be a string');
  }
  if (!startString) return '';
  const arrayFromSet = Array.from(set);
  let output = '';
  for (let i = 0; i < arrayFromSet.length; i++) {
    if (arrayFromSet[i].includes(startString)) {
      if (output === '') {
        output += arrayFromSet[i].replace(startString, '');
      } else {
        output += `-${arrayFromSet[i].replace(startString, '')}`;
      }
    }
  }
  return output;
}
