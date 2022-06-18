let addForm = document.getElementById("formulaire");
let addBtn = document.querySelector(".AddButton");
let tasksContainer = document.querySelector(".tasks-List");
let valeurEntrer = addForm.value;

// fonction qui gere la verification du formulaire d'ajout 
function verifierForm() {
    valeurEntrer = addForm.value;
    if (valeurEntrer == " ") {
        return
    }
    else {
        return ajouterList();
    }
};

// fonction qui ajoute une tache  
function ajouterList() {
    valeurEntrer = addForm.value;
    addForm.style.border = " solid #fff 3px";
    tasksContainer.innerHTML += (`<div class="task">
    <p>${valeurEntrer}</p>
    <div class="btn-container">
        <button class="task__done task-padding"><i class="fa-solid fa-check"></i></button>
        <button class="task__delete task-padding" ><i class="fa-solid fa-trash-can"></i></button>
    </div>
</div>`);
    compterListTache();
    addForm.value = " ";
}

// fonction qui supprime une tache dans la liste des taches  
function supprimerTache() {
    const supprimer = document.querySelectorAll(".task__delete");
    for (let i = 0; i < supprimer.length; i++) {
        supprimer[i].addEventListener("click", (e) => {
            parentElmt = supprimer[i].parentElement.parentElement;
            parentElmt.remove();
            compterListTache();
        })
    }
}

//foction qui compte les nombres des taches 
function compterListTache() {
    let nbrTache = document.querySelector(".nbrTache");
    let tache = document.getElementsByClassName("task");

    for (let index = 0; index <= tasksContainer.children.length; index++) {
        nbrTache.innerHTML = tasksContainer.children.length;
    }
}

function marquerFait() {
    const done = document.querySelectorAll(".task__done");
    for (let j = 0; j < done.length; j++) {
        done[j].addEventListener("click", (e1) => {
            parentElm = done[j].parentElement.parentElement;
            parentElm.classList.toggle("ckecked");
            compterListTache();
        })

    }

}

// Au clic du btn ajouter il execute ses instructions
addBtn.addEventListener("click", function creerStructureTache(event) {
    event.preventDefault();
    verifierForm();
    supprimerTache();
    marquerFait();
});
