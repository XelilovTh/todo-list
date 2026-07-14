const inp = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const ul = document.querySelector("ul");

addBtn.addEventListener("click" , (e)=>{

    const text = inp.value.trim();
    if(text==="") return;

    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv")

    ul.appendChild(taskDiv);
    taskDiv.appendChild(li);
    taskDiv.appendChild(deleteBtn)



    li.classList.add("listElement");
    deleteBtn.classList.add("remove");

    li.addEventListener("click" , (e)=>{
        e.currentTarget.classList.toggle("done")
    })
    deleteBtn.addEventListener("click" , (e)=>{
        e.target.parentElement.remove();
    })

    inp.value=""
    
} )