// function Student(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course;

//     this.getName=()=> {
//         console.log("name : " + this.name);
//     }
//     this.getAge=()=>{
//         console.log("Age : " + this.age);
//     } 
//     this.getCourse=()=>{
//         console.log("Course : " + this.course);
//     }

// }

// class Student{
//    constructor(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course; 
//    };

//    getName=()=> {
//         console.log("name : " + this.name);
//     }
//     getAge=()=>{
//         console.log("Age : " + this.age);
//     } 
//     getCourse=()=>{
//         console.log("Course : " + this.course);
//     }
// }


class Todo {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    display() {
        console.log(`${this.task} - ${this.completed ? "done" : "Pending"}`);
    }
}

class TodoList{
    constructor(){
        this.todos=[];
    }

    addTask(task){
        const newTodo = new Todo(task);
        this.todos.push(newTodo);
    }
    showAll(){
        this.todos.forEach((todo)=>todo.display());
    }
}

// const t1 = new Todo("Reading");
// t1.display();
// t1.complete();
// t1.display();

const list = new TodoList();
list.addTask("okk","difd","sfsf");

list.showAll();
