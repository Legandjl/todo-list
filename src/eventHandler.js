import {
    removeFromDisplay,
    getLocked,
    lock
} from "./dom"
import {
    divGenerator
} from "./generators/divGenerator";
import {
    generateAddFormContainer,
    generateDescription,
    generateEditForm,
    generateEditFormContainer,
    generateForm
} from "./generators/elementGenerator";
import {
    addTodo,
    editTodo
} from "./logic";

//add form event listeners

let addTodoForm = (e) => {
    console.log(e.target.innerText);
    let container = document.querySelector("#formWrapper");
    removeFromDisplay(document.querySelector("#formWrapper").firstChild)
    let todoForm = generateForm("todoForm", addTodo);
    container.append(todoForm);
};

let addProjectForm = (e) => {

    console.log(e.target.innerText)
};

let addNoteForm = (e) => {

    console.log(e.target.innerText)
};
//sets up and displays the add form window
let addButtonEvent = () => {
    if (getLocked == true) {

        return;
    }

    lock();
    let formContainer = generateAddFormContainer();
    let formDiv = divGenerator.createDiv("formWrapper");
    let todoForm = generateForm("todoForm", addTodo);
    formDiv.append(todoForm);
    formContainer.append(formDiv);
    document.body.appendChild(formContainer);
};
//sets up and displays the edit form window
let editButtonEvent = (e) => {

    let id = e.target.parentElement.parentElement.dataset.id;

    if (getLocked == true) {

        return;
    }

    lock();
    let formContainer = generateEditFormContainer();
    let form = generateEditForm("editTodoForm", editTodo, id);
    formContainer.append(form);
    document.body.appendChild(formContainer);

};

let openDescriptionWindow = (e) => {

    if (getLocked() == true) {

        return;
    }

    lock();

    let todoId = e.target.parentElement.parentElement.dataset.id;
    document.querySelector("#content").append(generateDescription(todoId));
};

export {    
    addButtonEvent,
    editButtonEvent,
    openDescriptionWindow,
    addTodoForm,
    addProjectForm,
    addNoteForm
}