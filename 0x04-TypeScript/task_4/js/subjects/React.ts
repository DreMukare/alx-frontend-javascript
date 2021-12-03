import Subject from './Subject.ts';

namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }

  class React extends Subject{
    constructor() {
      super();
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact ?
        `Available Teacher: ${this.teacher.firstName}`:
        'No available teacher';
    }
  }
}
