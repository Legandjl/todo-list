import {
    divGenerator
} from "./generators/divGenerator";
import {
    titleClick,
    addButtonClick,
    todoSubmit,
    updateHome,
    updateToday
} from "./logic"
import {
    generateForm,
    generateTodoElement
} from "./generators/elementGenerator";

const sideBarTitles = ["Home", "Today", "Week", "Projects", "Notes"];
let header = divGenerator.createDiv("header");
let sidebar = divGenerator.createDiv("sideBar");
let sideContainer = divGenerator.createDiv("sideContainer");
let buttonContainer = divGenerator.createDiv("buttonContainer");

let addNewButton = document.createElement("button");
let display = divGenerator.createDiv("display");
let content = document.querySelector("#content");

let sidebarElements = [sideContainer, buttonContainer];
let contentElements = [header, sidebar, display];

let formContainer = divGenerator.createDiv("formContainer");
formContainer.classList.add("hidden");
let form = generateForm();
let formHeader = divGenerator.createDiv("formHeader");
let formSidebar = divGenerator.createDiv("formSidebar");

formContainer.append(form);

formContainer.append(formHeader);
formContainer.append(formSidebar);
form.addEventListener("submit", todoSubmit)

let toggleForm = function () {

    formContainer.classList.toggle("hidden");
}

let setDisplay = function (todo) {

    let todoElement = generateTodoElement(todo);
    display.append(todoElement);
}

let removeFromDisplay = (element) => {

    element.remove();
}

let removeAllChildNodes = () => {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

let showDescription = () => {

    console.log("desc");
}

let initialLoad = function () {

    sidebarElements.forEach((element) => {

        sidebar.append(element);
    })

    buttonContainer.appendChild(addNewButton);
    addNewButton.id = "addNewButton";

    contentElements.forEach((element) => {

        content.append(element);
    })

    document.body.appendChild(formContainer);

    sideBarTitles.forEach((title) => {

        let currentTitle = divGenerator.createDivWithClass("sideBarTitle");
        currentTitle.id = title;
        currentTitle.innerText = title;
        sideContainer.appendChild(currentTitle);
        currentTitle.addEventListener("click", titleClick);
    })

    addNewButton.addEventListener("click", addButtonClick);

    document.querySelector("#Home").addEventListener("click", updateHome);


    document.querySelector("#Today").addEventListener("click", updateToday);
}

export {
    initialLoad,
    setDisplay,
    toggleForm,
    removeFromDisplay,
    removeAllChildNodes,
    showDescription
}