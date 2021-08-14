import {
    removeFromDisplay,
    getLocked,
    lock,
    clearDisplay,
    appendTodoToDisplay,
    unlockWindow,
    updateDisplay,
    clearElement,
    getCurrentTab,
    setCurrentTab    
} from "../userInterface/ui"
import {
    divGenerator
} from "../misc/divGenerator";
import {
    generateForm,  
    generateProjectForm,
} from "../forms/formGenerator";
import {
    storageFunctions
} from "./storage";
import {
    createTodo,
    createTodoElement
} from "./todo";
import {
    formHelpers
} from "../forms/formHelpers";
import {
    windowGen
} from "../userInterface/windows";
import bin from "../images/bin.png";

//add new window events - switch between project and todo on sidebar title click

let addTodoForm = (e) => {

    let container = document.querySelector("#formWrapper");
    removeFromDisplay(document.querySelector("#formWrapper").firstChild)
    let todoForm = generateForm("todoForm", addNewTodo, formHelpers.getFormPlaceholders);
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

    let formContainer = windowGen.generateAddFormContainer();
    let formDiv = divGenerator.createDiv("formWrapper");
    let todoForm = generateForm("todoForm", addNewTodo, formHelpers.getFormPlaceholders);
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
    let formContainer = windowGen.generateEditFormContainer();
    let form = generateForm("editTodoForm", editTodoEvent, formHelpers.getFormValuesFromTodo, id);
    let identifier = document.createElement("input");
    identifier.type = "hidden";
    identifier.value = id;
    form.append(identifier);
    formContainer.append(form);
    document.body.appendChild(formContainer);

};

let openDescriptionWindow = (e) => {

    if (getLocked() == true) {
        return;
    }

    lock();

    let todoId = e.target.parentElement.parentElement.dataset.id;
    document.querySelector("#content").append(windowGen.generateDescription(todoId));


};

let removeTodo = (e) => {

    if (getLocked() == true) {

        return;
    }

    let id = e.target.parentElement.parentElement.dataset.id;

    storageFunctions.removeTodo(id);

    removeFromDisplay(e.target.parentElement.parentElement);

};

let removeProject = (e) => {

    console.log(e.target.parentElement.innerText);
    storageFunctions.removeProject(e.target.parentElement.innerText);
    e.target.parentElement.remove();
    setCurrentTab(document.querySelector("#home"));
    updateHome();
   
    
}
/* form submit events */

let addNewProject = (e) => {

    storageFunctions.addProject(e.target.elements[0].value);
    updateProjects();
    removeFromDisplay(e.target.parentElement.parentElement);
    unlockWindow();
    e.preventDefault();
}

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

        todo.setProject(getCurrentTab().innerText);
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

let filterProjects = (e) => {

    setCurrentTab(e.target)
    clearDisplay();
    let todoList = storageFunctions.filterByProject(e.target.innerText);
    updateDisplay(todoList);

}

/*new project added event*/

let updateProjects = () => {

    let projectWrap = document.querySelector("#projectWrap");
    clearElement(projectWrap);
    let projectList = storageFunctions.getProjects();
    projectList.forEach((project) => {

        let projectTitle = divGenerator.createDivWithClass("projectTitle");
        let binIcon = new Image();
        binIcon.src = bin;
        binIcon.addEventListener("click", removeProject);     
        projectTitle.append(binIcon);
        let projectTitleText = divGenerator.createDivWithClass("projectTitleText");
        projectTitleText.innerText = project;
        projectTitleText.addEventListener("click", filterProjects);
        projectTitle.append(projectTitleText);
        projectWrap.append(projectTitle);
    })
}


export {
    addButtonEvent,
    editButtonEvent,
    openDescriptionWindow,
    addTodoForm,
    addProjectForm,
    updateWeek,
    updateToday,
    updateHome,
    removeTodo,
    editTodoEvent,
    addNewTodo,
    addNewProject

}