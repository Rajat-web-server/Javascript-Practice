function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}
function h1() {
setTimeout(() => {
    console.log("Hello!!")
}, 4000);
}

greet('Rahul', h1);

//Anonymous callback

function greet1(name, callback){
  console.log("hello, "+ name);
  callback();
}
greet1("Bob", function(){
    console.log("Goodbye");
})

//callback with arguments

function processNumber(num, callback){
    const doubled=num*2;
    callback(doubled);
}

processNumber(5, function(result){
    console.log('The doubled number is: ', result);
});

// callback with asynchronus code

function fetchData(callback){
    console.log("Fetching Data...")
    setTimeout(()=>{
        const data ={id:1, name: "Charlie"};
        callback(data);
    },3000)
}

fetchData(function(data) {
    console.log("Data received: ",data)
});

function fetchData1(callback){
    console.log("Fetching next data....")
    setInterval(()=>{
        const data= {info:'log', num:112};
        console.log('not here!!!');
        callback(data);
    },5000)
}
fetchData1(function(result){
    console.log('The data is ',result);
})