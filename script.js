let addForm = document.getElementById("formulaire");
let addBtn = document.querySelector(".AddButton");
let tasksContainer = document.querySelector(".tasks-List");


addBtn.addEventListener("click", function creerStructureTache(event) {

    event.preventDefault();
    let valeurEntrer = addForm.value;
    if (valeurEntrer == " ") {

    }
    else {
        addForm.style.border = " solid #fff 3px";
        tasksContainer.innerHTML += (`<div class="task">
        <p>${valeurEntrer}</p>
        <div class="btn-container">
            <button class="task__done task-padding"><i class="fa-solid fa-check"></i></button>
            <button class="task__delete task-padding" ><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`);

        addForm.value = " ";
    }

    const supprimer = document.querySelectorAll(".task__delete");
    const done = document.querySelectorAll(".task__done");

    for (let i = 0; i < supprimer.length; i++) {

        supprimer[i].addEventListener("click", (e) => {
            parentElmt = supprimer[i].parentElement.parentElement;
            parentElmt.remove();

        })
    }

    for (let j = 0; j < done.length; j++) {
        done[j].addEventListener("click", (e1) => {
            parentElm = done[j].parentElement.parentElement;
            parentElm.classList.toggle("ckecked");
        })
    }
});