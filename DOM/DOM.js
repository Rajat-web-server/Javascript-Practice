
// let b1 = document.getElementById("add");
// b1.addEventListener("click",(e)=>{
//     // e.stopPropagation();//only prevents bubbling to ancestors
//     if(e.target !== b1) return;//this iqnores clicks on child button;
//     const li = document.createElement("button");
//     li.innerText="New Item";
//     b1.append(li);
// });

let b1 = document.getElementById("add");
b1.addEventListener("click",(e)=>{
    // e.stopPropagation();//only prevents bubbling to ancestors
    if(e.target !== b1) return;//this iqnores clicks on child button;
    const li = document.createElement("li");
    li.innerText="New Item";
    b1.appendChild(li);
});

const b2=document.getElementById("insert");
b2.addEventListener("click",(e)=>{
    if(e.target!==b2) return;
    const li = document.createElement("p");
    li.textContent="Focus here there's something going on here";
    li.style.backgroundColor="blue";
    b2.prepend(li);
})

