class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.courses = []
  }

  name() {
    return `${this.firstName} ${this.lastName}`;
  }

  enroll(course) {
    if (this.courses.includes(course)) {
      return "${this.name} is already enrolled to this course.";
    } else {
      this.courses.push(course);
      course.addStudent(this);
    }
  }

  //Returns a hash of departments as keys and values being the amount of credits per department
  courseLoad() {
    const courseLoad = {};

    this.courses.forEach(course => {
      let dpt = course.department;
      courseLoad[dpt] = courseLoad[dpt] || 0;
      courseLoad[dpt] += course.credits;
    });

    return courseLoad;
  }
}

class Course {
  constructor(name, department, numCredits, daysOfWeek, timeBlock) {
    this.name = name,
    this.department = department,
    this.credits = numCredits,
    this.students = [],
    this.daysOfWeek = daysOfWeek,
    this.timeBlock = timeBlock
  }

  addStudent(student) {
    if (this.students.includes(student)) {
      return "That student is already enrolled to this course.";
    } else {
      student.enroll(this)
      this.students.push(student);
    }
  }

  conflictsWith(second_course) {
    if (this.timeBlock !== second_course.timeBlock) {
      return false;
    }

    for (let i = 0; i < this.daysOfWeek.length; i++) {
      if (second_course.daysOfWeek.includes(this.daysOfWeek[i])) {
        return true;
      } 
    }
    return false;
  }

}

let student1 = new Student("Nigel", "Leffler");
let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
let course2 = new Course("201", "CS", 3, ["wed"], 1);
let course3 = new Course("301", "ENG", 3, ["tue"], 1);
let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
student1.enroll(course2);
console.log(student1.courseLoad());
console.log('should be true = ' + course1.conflictsWith(course2));
console.log('should be false = ' + course1.conflictsWith(course3));
console.log('should be false = ' + course1.conflictsWith(course4));


