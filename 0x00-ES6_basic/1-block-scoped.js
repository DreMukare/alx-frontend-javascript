export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = !trueOrFalse;
    task2 = trueOrFalse;
  }

  return [task, task2];
}
