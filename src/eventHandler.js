import {
    removeFromDisplay,
    getLocked,
    lock,
    clearDisplay,
    appendTodoToDisplay
} from "./ui"
import {
    divGenerator
} from "./generators/divGenerator";
import {
    createTodoElement,
    generateAddFormContainer,
    generateDescription,
    generateEditForm,
    generateEditFormContainer,
    generateForm
} from "./generators/elementGenerator";
import {
    addTodo,
    editTodo,
    storageFunctions
} from "./storage";

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

let updateWeek = () => {

    clearDisplay();

    let todoList = storageFunctions.getWeek(); 

    todoList.forEach((todo) => {

        appendTodoToDisplay(createTodoElement(todo));
    }) //refactor to ui

}

let updateToday = () => {

    clearDisplay();

    let todoList = storageFunctions.getToday();

    todoList.forEach((todo) => {

        appendTodoToDisplay(createTodoElement(todo));
    });
}//refactor to ui /eventhandler

let updateHome = () => {

    clearDisplay();

    let todoList = storageFunctions.getTodoList();

    todoList.forEach((todo) => {

        appendTodoToDisplay(createTodoElement(todo));

    })
}
/*
let editnewTodo = (e) => {

    let elements = e.target.elements;  
   
    let id;

    for (let x = 0; x < elements.length; x++) {

        if (elements[x].type == "hidden") {            

            id = elements[x].value
        }
    }

    let todo = generateTodo(e.target.elements)
    let index = id;
    todo.setIdentifier(id);
    todoList.splice(index, 1, todo);
    updateHome();
    removeFromDisplay(e.target.parentElement);
    unlockWindow();
    e.preventDefault();
}*/

export {    
    addButtonEvent,
    editButtonEvent,
    openDescriptionWindow,
    addTodoForm,
    addProjectForm,
    addNoteForm,
    updateWeek,
    updateToday,
    updateHome
}