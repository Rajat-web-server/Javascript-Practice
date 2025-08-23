// setTimeout(()=>{
//     console.log('heloo, world in 5s');
// },5000);

// setTimeout(()=>{
//     console.log('heloo, world in 6s');
// },6000);

const time = setInterval(()=>{
    console.log('heloo.world, every 3 seconds');
},3000)

setTimeout(()=>clearInterval(time),10000);