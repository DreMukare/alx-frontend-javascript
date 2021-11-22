export default function taskBlock(trueOrFalse) {
  let task;
  let task2;

  if (trueOrFalse) {
    task = !trueOrFalse;
    task2 = trueOrFalse;
  }

  return [task, task2];
}
