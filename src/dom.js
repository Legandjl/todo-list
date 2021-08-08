import {
    divGenerator
} from "./generators/divGenerator";
import {
    titleClick,
    updateHome,
    updateToday,
} from "./logic"
import {
    generateFormContainer,
    generateTodoElement,
    generateDescription,
    generateTodoForm
} from "./generators/elementGenerator";

let locked = false;

let setDisplay = function (todo) {

    let todoElement = generateTodoElement(todo);
    getDisplay().append(todoElement);
}

let removeFromDisplay = (element) => {

    element.remove();
}

let clearDisplay = () => {
    while (getDisplay().firstChild) {
        getDisplay().removeChild(display.firstChild);
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

let closeDescription = (e) => {

    removeFromDisplay(document.querySelector(".description"));
    locked = false;
}

let openForm = () => {

    if (locked == true) {

        return;
    }

    locked = true;
    let formContainer = generateFormContainer();
    let todoForm = generateTodoForm("todoForm");
    formContainer.append(todoForm);
    document.body.appendChild(formContainer);
}

let closeForm = () => {

    document.querySelector("#addFormContainer").remove();
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

    addNewButton.addEventListener("click", openForm);

    document.querySelector("#Home").addEventListener("click", updateHome);

    document.querySelector("#Today").addEventListener("click", updateToday);
}

export {
    initialLoad,
    setDisplay,
    removeFromDisplay,
    clearDisplay,
    showDescription,
    closeDescription,
    closeForm
}