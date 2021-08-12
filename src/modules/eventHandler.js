import {
    removeFromDisplay,
    getLocked,
    lock,
    clearDisplay,
    appendTodoToDisplay,
    unlockWindow,
    updateDisplay,
    clearElement,
    setProjectTab,
    getCurrentTab,
    setCurrentTab
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
    generateProjectForm,
} from "../generators/elementGenerator";
import {
    storageFunctions
} from "./storage";
import {
    createTodo
} from "./objectFactory";
import {
    formHelpers
} from "../generators/formHelpers";

//todo form windows

let addTodoForm = (e) => {

    let container = document.querySelector("#formWrapper");
    removeFromDisplay(document.querySelector("#formWrapper").firstChild)
    let todoForm = generateForm("todoForm", addNewTodo, formHelpers.getFormValues);
    container.append(todoForm);
};

let addProjectForm = (e) => {

    let container = document.querySelector("#formWrapper");
    removeFromDisplay(document.querySelector("#formWrapper").firstChild)
    let projectForm = generateProjectForm();
    container.append(projectForm);
};

/* ui button events */

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

let removeTodo = (e) => {

    if (getLocked() == true) {

        return;
    }

    let id = e.target.parentElement.parentElement.dataset.id;

    storageFunctions.removeTodo(id);

    removeFromDisplay(e.target.parentElement.parentElement);

};
/* form events */

let addNewProject = (e) => {

    storageFunctions.addProject(e.target.elements[0].value);
    updateProjects();
    removeFromDisplay(e.target.parentElement.parentElement);
    unlockWindow();
    e.preventDefault();
}

let addNoteForm = (e) => {

    console.log(e.target.innerText)
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
    let project = storageFunctions.getTodo(id).getProject();
    todo.setIdentifier(id);
    todo.setProject(project);
    storageFunctions.replaceTodo(id, todo);
    updateHome();
    removeFromDisplay(e.target.parentElement);
    unlockWindow();
    e.preventDefault();
};

let addNewTodo = (e) => {

    let todo = createTodo(e.target.elements);   

    if (storageFunctions.isProject(getCurrentTab())) {

        todo.setProject(getCurrentTab());       
    }

    storageFunctions.addTodo(todo);
    removeFromDisplay(e.target.parentElement.parentElement);
    appendTodoToDisplay(createTodoElement(todo));
    unlockWindow();
    e.preventDefault();
};

/*filter events - ui title clicks */

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

let projectUpdate = (e) => {

    setCurrentTab(e.target.innerText)
    clearDisplay();
    let todoList = storageFunctions.filterByProject(e.target.innerText);
    updateDisplay(todoList);

}

/*project events */

let updateProjects = () => {

    let projectWrap = document.querySelector("#projectWrap");
    clearElement(projectWrap);
    let projectList = storageFunctions.getProjects();
    projectList.forEach((project) => {

        let projectTitle = divGenerator.createDivWithClass("projectTitle");
        projectTitle.innerText = project;
        projectTitle.addEventListener("click", projectUpdate);
        projectWrap.append(projectTitle);
    })
}


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
    addNewTodo,
    addNewProject
}