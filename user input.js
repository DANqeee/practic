var tasks = [];
function onClickButton() {
    const userInput = document.getElementById("userInput").value;

    var  element = document.getElementById("copyTasks");
    const header = document.createElement("h1");

   header.innerHTML = userInput;

   element.appendChild(header);
}
//document.write(Date());
/*
const userInput = document.getElementById("userInput").value;
console.log(tasks);
const container = document.querySelector(".botton_div");
const copyTasks = document.getElementById("copyTasks");
let clone = copyTasks.cloneNode(true);
clone.children[1].textContent = userInput;





container.append(clone);

tasks.push(clone);*/
