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

  div.addEventListener("click", (e) => {
    if (e.target.classList.contains("elementText")) {
      li.classList.toggle("done");
    }
    if (e.target.classList.contains("removeBtn")) {
      e.target.parentElement.remove();
    }
  });

  inp.value=""
});
