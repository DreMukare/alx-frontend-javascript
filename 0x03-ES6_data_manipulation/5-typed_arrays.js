export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('Parameters must be of type number');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);

  try {
    int8View[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }

  return new DataView(buffer);
}
