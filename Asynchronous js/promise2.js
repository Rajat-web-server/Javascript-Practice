const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Data loaded succesfully");
        reject("Data didn't resolved");
    }, 2000)
})

// promise1.then(result=>{
//     console.log('The result is ',result);
// })
promise1.catch(result => {
    console.log('The result is ', result);
})

//Adding rejection handling
const promise2 = new Promise((resolve, reject) => {
    const success = false;
    setTimeout(() => {
        if (success) {
            resolve("All good");
        } else {
            reject("not all good");
        }
    }, 3000)
})

promise2
    .then(result => {
        console.log('----> ', result);
    })
    .catch(result => {
        console.log('----> ', result);
    })

//loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//chaining Promises
const promise3 = new Promise((resolve, reject) => {
    const data = false;
    setTimeout(() => {
        if (data) { resolve(10); }
        else { reject(20); }

    }, 4000)
})

promise3.then(num => {
    console.log("First value : ", num);
    return num * 2
})
    .then(num => {
        console.log("First value : ", num);
        return num * 3
    })
    .then(num => {
        console.log("First value : ", num);
        return num * 4
    }).then(num => {
        console.log("First value : ", num);
        return num * 5
    })
    .catch(num => {
        console.log("First value : ", num);
        throw num * 3
    })
    .catch(num => {
        console.log("First value : ", num);
        throw num * 4
    })
    .catch(num => {
        console.log("First value : ", num);

    });

//using Promise.all()

const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("user data is resolved")
    }, 5000)
})

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Posting the data");
    }, 5500)
})

Promise.all([fetchData1, fetchData2])
    .then(result => {
        console.log("Status : ", result);
    })
    .catch(error => {
        console.error("Error : ", error);
    })

