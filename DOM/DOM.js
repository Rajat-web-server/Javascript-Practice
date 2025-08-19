
const list = document.getElementById("list")
/* const title = document.getElementsById("title")  */

//adding element

document.getElementById("add").addEventListener("click",() => {
    const li = document.createElement("li");
    li.textContent="New item (Appended)";
    add.append(li);
})

const addd = document.getElementById("replace");

addd.addEventListener("click",()=>{
    const h1 = document.createElement("h1");
    h1.textContent = "Hello, World!!";
    addd.append(h1);
})