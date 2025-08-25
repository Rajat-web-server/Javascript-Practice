//*Creating an array

let A = ["one", 2, "three", 4, "five"];

console.log(A[0])
console.log(A[4])

A[2] = 3;
console.log(A);

console.log(A.length);

// *Basic Array method
A.pop();
console.log(A);
A.push("five")
console.log(A)
A.unshift(0)
console.log(A)
A.shift();
console.log(A)


let numbers=[1,2,3,4,5,6,12]
let found = numbers.find(numb=>numb>10);
console.log(found);



