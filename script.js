let addForm = document.getElementById("formulaire");
let addBtn = document.querySelector(".AddButton");
let tasksContainer = document.querySelector(".tasks-List");
let array = [];


addBtn.addEventListener("click", function creerStructureTache(event) {
    // // Element div tasck
    // let divTask = document.createElement('div');
    // divTask.className = "task";
    // tasksContainer.append(divTask);

    // // elemt paragraphe
    // let para = document.createElement("p");
    // divTask.append(para);


    // // Element container btn
    // let containerBoutton = document.createElement('div');
    // containerBoutton
    //     .className = "btn-container";
    // divTask.append(containerBoutton);

    // // boutton supprimer
    // let boutonSuppr = document.createElement('button');
    // boutonSuppr.className = " task__delete task-padding";
    // boutonSuppr.innerHTML += `<i class="fa-solid fa-check"></i>`;
    // containerBoutton.append(boutonSuppr);

    // // boutton done
    // let boutonDone = document.createElement('button');
    // boutonDone.className = " task__done task-padding";
    // boutonDone.innerHTML += `<i class="fa-solid fa-trash-can"></i>`;
    // containerBoutton.append(boutonDone);

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
    for (let i = 0; i < supprimer.length; i++) {
        supprimer[i].addEventListener("click", (e) => {
            parentElmt = supprimer[i].parentElement.parentElement;
            parentElmt.remove();

        })
    }

});

