class Person {
   
    constructor(private name: string, private age: number) {}
  
    
    public getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  class Student extends Person {
    private grade: string;
  
    
    constructor(name: string, age: number, grade: string) {
      super(name, age); 
      this.grade = grade; 
    }
  
    public getGrade(): string {
      return this.grade;
    }
  }

  const student = new Student("Alice", 20, "A");