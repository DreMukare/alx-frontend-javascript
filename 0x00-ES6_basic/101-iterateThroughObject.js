export default function iterateThroughObject(reportWithIterator) {
  let i = 0;
  let output = '';
  for (const value in reportWithIterator) {
    if (i !== reportWithIterator.length - 1) {
      output += `${reportWithIterator[value]} | `;
    } else {
      output += reportWithIterator[value];
    }
    i += 1;
  }

  return output;
}
