export default function setFromArray(input) {
  if (!Array.isArray(input)) throw new TypeError('input must be an array');
  return new Set(input);
}
