import {
    removeFromDisplay,
    getLocked,
    lock,
    clearDisplay,
    appendTodoToDisplay,
    unlockWindow,
    updateDisplay
} from "./ui"
import {
    divGenerator
} from "../generators/divGenerator";
import {
    createTodoElement,
    generateAddFormContainer,
    generateDescription,
    generateEditFormContainer,
    generateForm,  
} from "../generators/elementGenerator";
import {
    storageFunctions
} from "./storage";
import {
    createTodo
} from "./objectFactory";
import { formHelpers } from "../generators/formHelpers";

//ui event handlers (buttons etc)

//todo form windows

let addTodoForm = (e) => {  

    let container = document.querySelector("#formWrapper");
    removeFromDisplay(document.querySelector("#formWrapper").firstChild)
    let todoForm = generateForm("todoForm", addNewTodo);
    container.append(todoForm);
};

let addProjectForm = (e) => {

    console.log(e.target.innerText)
};

let addNoteForm = (e) => {

    console.log(e.target.innerText)
};
//end
let addButtonEvent = () => {

    if (getLocked() == true) {

        return;
    }

    lock();
    let formContainer = generateAddFormContainer();
    let formDiv = divGenerator.createDiv("formWrapper");
    let todoForm = generateForm("todoForm", addNewTodo, formHelpers.getFormValues);
    formDiv.append(todoForm);
    formContainer.append(formDiv);
    document.body.appendChild(formContainer);
};

let editButtonEvent = (e) => {

    if (getLocked() == true) {

        return;
    }

    let id = e.target.parentElement.parentElement.dataset.id;
    lock();
    let formContainer = generateEditFormContainer();
    let form = generateForm("editTodoForm", editTodoEvent, formHelpers.getFormValuesFromTodo, id);    

    let identifier = document.createElement("input");
    identifier.type = "hidden";
    identifier.value = id;
    form.append(identifier);

    console.log(form.date + "THis is te form id")
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
/* storage event handlers */
let updateWeek = () => {

    clearDisplay();

    let todoList = storageFunctions.getWeek();
    updateDisplay(todoList);

};

let updateToday = () => {

    clearDisplay();

    let todoList = storageFunctions.getToday();
    updateDisplay(todoList);
};

let updateHome = () => {

    clearDisplay();

    let todoList = storageFunctions.getTodoList();

    updateDisplay(todoList);
};

let removeTodo = (e) => {  
    
    if(getLocked() == true) {

        return;
    }

    let id = e.target.parentElement.parentElement.dataset.id;

    storageFunctions.removeTodo(id);

    removeFromDisplay(e.target.parentElement.parentElement);

};

let editTodoEvent = (e) => {

    let elements = e.target.elements;
    let id;

    for (let x = 0; x < elements.length; x++) {

        if (elements[x].type == "hidden") {

            id = elements[x].value
        }
    }

    let todo = createTodo(e.target.elements)
    let index = id;
    todo.setIdentifier(id);
    storageFunctions.replaceTodo(index, todo);
    updateHome();
    removeFromDisplay(e.target.parentElement);
    unlockWindow();
    e.preventDefault();
};

let addNewTodo = (e) => {

    let todo = createTodo(e.target.elements);
    storageFunctions.addTodo(todo);
    removeFromDisplay(e.target.parentElement.parentElement);
    appendTodoToDisplay(createTodoElement(todo));
    unlockWindow();
    e.preventDefault();
};


export {
    addButtonEvent,
    editButtonEvent,
    openDescriptionWindow,
    addTodoForm,
    addProjectForm,
    addNoteForm,
    updateWeek,
    updateToday,
    updateHome,
    removeTodo,
    editTodoEvent,
    addNewTodo
}