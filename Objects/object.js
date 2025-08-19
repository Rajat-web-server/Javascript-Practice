function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    this.getName=()=> {
        console.log("name : " + this.name);
    }
    this.getAge=()=>{
        console.log("Age : " + this.age);
    } 
    this.getCourse=()=>{
        console.log("Course : " + this.course);
    }

}

class Student{
   constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course; 
   };

   getName=()=> {
        console.log("name : " + this.name);
    }
    getAge=()=>{
        console.log("Age : " + this.age);
    } 
    getCourse=()=>{
        console.log("Course : " + this.course);
    }
}


