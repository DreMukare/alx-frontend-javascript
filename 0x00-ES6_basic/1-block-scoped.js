export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
