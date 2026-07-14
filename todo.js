const inp = document.querySelector("#input");
const addBtn = document.querySelector(".addBtn");
const list = document.querySelector("ul");

addBtn.addEventListener("click", (e) => {
  const text = inp.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  const div = document.createElement("div");

  li.textContent = text;
  removeBtn.textContent = "✖";
  li.classList.add("elementText");
  removeBtn.classList.add("removeBtn");
  div.classList.add("listElement")
  div.appendChild(li);
  div.appendChild(removeBtn);
  list.appendChild(div)

  removeBtn.addEventListener("click" , (e)=>{
    e.target.parentElement.remove();
  });

  li.addEventListener("click" , (e)=>{
    li.classList.toggle("done")
  });

  inp.value=""
});
