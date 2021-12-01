interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks():string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome():string {
    return 'Cannot work from home';
  }

  getToWork():string {
    return 'Cannot have a break';
  }

  workTeacherTasks():string {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number) {
  if (typeof salary === 'number' && salary < 500) return new Teacher;
  return new Director;
}

function isDirector(employee):void employee is Director {}

function executeWork(employee): void {
  if (employee instanceof Director) return employee.workDirectorTasks();
  return teacher.WorkTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects):string {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}
