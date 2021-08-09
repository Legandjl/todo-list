import {
    divGenerator
} from "./generators/divGenerator";
import {
    titleClick,
    updateHome,
    updateToday,
    addTodo,
    editTodo,
    getTodo
} from "./logic"
import {
    generateAddFormContainer,
    generateDescription,
    generateForm,
    generateEditFormContainer,    
    createTodoElement,
    generateEditForm, 
} from "./generators/elementGenerator";

let locked = false;

let updateTodoList = function (todo) {

    let todoElement = createTodoElement(todo);
    getDisplay().append(todoElement);
}

let removeFromDisplay = (element) => {

    element.remove();
}

let clearDisplay = () => {

    clearElement(getDisplay());
}

let clearElement = (element) => {

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

}

let showDescription = (e) => {

    if (locked == true) {

        return;
    }

    locked = true;

    let todoId = e.target.parentElement.parentElement.dataset.id;
    let description = generateDescription(todoId);
    document.querySelector("#content").append(description);

}

let addNewButtonClicked = () => {

    if (locked == true) {

        return;
    }

    locked = true;
    let formContainer = generateAddFormContainer();
    let todoForm = generateForm("todoForm", addTodo);
    formContainer.append(todoForm);
    document.body.appendChild(formContainer);
}

let editButtonClicked = (e) => {

    let id = e.target.parentElement.parentElement.dataset.id;

  //remove todo first, then generate a new one and add it
  //or edit todo object to let you change its state

  if (locked == true) {

      return;
  }

  locked == true;

  let formContainer = generateEditFormContainer();
  let form = generateEditForm("editTodoForm", editTodo, id);
  formContainer.append(form);
  document.body.appendChild(formContainer);
}

let closeWindow = (e) => {

    let element = e.target.parentElement.parentElement;
    element.remove();
    locked = false;
}

let getDisplay = () => {

    return document.querySelector("#display");
}

let initialLoad = function () {

    const sideBarTitles = ["Home", "Today", "Week", "Projects", "Notes"];
    let header = divGenerator.createDiv("header");
    header.innerText = "TO-DO APPLICATION"

    let sidebar = divGenerator.createDiv("sideBar");
    let sideContainer = divGenerator.createDiv("sideContainer");
    let buttonContainer = divGenerator.createDiv("buttonContainer");

    let addNewButton = document.createElement("button");
    addNewButton.innerText = "+";
    let display = divGenerator.createDiv("display");
    let content = document.querySelector("#content");

    let sidebarElements = [sideContainer, buttonContainer];
    let contentElements = [header, sidebar, display];


    sidebarElements.forEach((element) => {

        sidebar.append(element);
    })

    buttonContainer.appendChild(addNewButton);
    addNewButton.id = "addNewButton";

    contentElements.forEach((element) => {

        content.append(element);
    })

    sideBarTitles.forEach((title) => {

        let currentTitle = divGenerator.createDivWithClass("sideBarTitle");
        currentTitle.id = title;
        currentTitle.innerText = title;
        sideContainer.appendChild(currentTitle);
        currentTitle.addEventListener("click", titleClick);
    })

    addNewButton.addEventListener("click", addNewButtonClicked);

    document.querySelector("#Home").addEventListener("click", updateHome);

    document.querySelector("#Today").addEventListener("click", updateToday);
}

export {
    initialLoad,
    updateTodoList,
    removeFromDisplay,
    clearDisplay,
    showDescription,
    editButtonClicked,
    closeWindow,
    clearElement
}