setTimeout(() => {
  console.log("Salam Dunya");
}, 2000);

function xosGeldiniz() {
  console.log("Xos Geldiniz!");
}

setTimeout(xosGeldiniz, 5000);

const gecikmeID = setTimeout(() => {
  console.log("Gecikme basa catdi");
}, 1500);

console.log(gecikmeID);

const mesajID = setTimeout(() => {
  console.log("Mesaj");
}, 10000);

setTimeout(() => {
  clearTimeout(mesajID);
  console.log("Timer legv edildi");
}, 3000);

clearTimeout(mesajID);

setInterval(() => {
  console.log("Salam");
}, 2000);

const cariVaxt = new Date;
cariVaxt.toLocaleString;
console.log(cariVaxt);







const inp = document.querySelector("input");

const btn = document.querySelector(".btn");

const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  const text = inp.value.trim();

  if (text === "") return;

  list.innerHTML += `<li class="done">${text} <button class="delete">❌</button></li>`;

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    }

    if (e.target.classList.contains("done")) {
      e.target.parentElement.classList.toggle("completed");
    }
  });

  inp.value = "";
});






const inp = document.querySelector("input");

const btn = document.querySelector(".btn");

const list = document.querySelector("ul");

btn.addEventListener("click", addTodo);

function addTodo() {
  const text = inp.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  li.textContent = text;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";

  li.appendChild(deleteBtn);
  list.appendChild(li);

  li.addEventListener("click", (e) => {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  inp.value = "";
}