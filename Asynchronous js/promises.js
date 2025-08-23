/* console.log("heloo, world");
console.log(1+2) */

/* let p = new Promise ((resolve, reject)=> {
   let a = 1+1+3
   if(a==2){
    resolve('Success')
   }else{
    reject("Failed")
   }
})
p.then((message)=> {
    console.log('This is in the then ' + message);
}).catch((message)=>{
    console.log('This is the catch '+ message);
}) */

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat meme',
                message: 'tushardev < cat'
            })
        } else {
            resolve('Thumbs up and subscribe')
        }
    })
}

watchTutorialPromise().then((message)=>{
    console.log('Success: '+ message)
}).catch((error)=>{
    console.log('failed: '+error.name+ ' '+ error.message)
})

const readBook = new Promise((resolve, reject)=>{
    resolve('Book1 Finished')
})

const recordBook2 = new Promise((resolve, reject)=>{
    resolve('Book2 Finished')
})

const recordBook3 = new Promise((resolve, reject)=>{
    resolve('Book3 Finished')
})


Promise.all([
    readBook,
    recordBook2,
    recordBook3
]).then((message)=>{
    console.log(message)
})

Promise.race([
    readBook,
    recordBook2,
    recordBook3
]).then((message)=>{
    console.log(message)
})
