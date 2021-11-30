export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('set must be a set');
  } else if (typeof startString !== 'string') {
    throw new TypeError('startString must be a string');
  }

  if (!startString || startString === '') return '';

  let output = '';

  set.forEach((value) => {
    if (value.includes(startString)) {
      if (output === '') {
        output += value.replace(startString, '');
      } else {
        output += `-${value.replace(startString, '')}`;
      }
    }
  });

  return output;
}
