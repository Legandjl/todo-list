import {
    divGenerator
} from "./generators/divGenerator";
import {
    titleClick,
    addButtonClick,
    todoSubmit,
    updateHome,
    updateToday,
    getTodo
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

let locked = false;

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

let showDescription = (e) => {

    if (locked == true) {

        return;
    }

    locked = true;

    console.log("made here")
    let todoId = e.target.parentElement.parentElement.dataset.id;
    console.log(todoId + "this is the id")
    let todo = getTodo(todoId);
    console.log(todo.getDesc());

    let description = divGenerator.createDivWithClass("description");
    let descHeader = divGenerator.createDivWithClass("descriptionHeader");
    let descBody = divGenerator.createDivWithClass("descriptionBody");
    let descFooter = divGenerator.createDivWithClass("descFooter");
    let descTitle = divGenerator.createDivWithClass("descTitleWrap");
    let descWrapper = divGenerator.createDivWithClass("descWrap");
    let dateWrapper = divGenerator.createDivWithClass("descDateWrapper");

    dateWrapper.innerText = "Date: " + todo.getDate();

    //also need due date, priority, and project (if any)

    descWrapper.innerText = "Description: " + todo.getDesc();
    descTitle.innerText = "Title: " + todo.getTitle();

    descHeader.append(descTitle);
    descBody.append(descWrapper);
    descFooter.append(dateWrapper);
    
    description.append(descHeader);
    description.append(descBody);
    description.append(descFooter);

    document.querySelector("#content").append(description);
    descHeader.addEventListener("click", closeDesciption);
}

let closeDesciption = (e) => {

    e.target.parentElement.parentElement.remove();
    locked = false;
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