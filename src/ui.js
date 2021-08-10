import {
    divGenerator
} from "./generators/divGenerator";
import {
    titleClick,  
    
} from "./storage"
import {
    addButtonEvent, updateWeek, updateToday, updateHome
} from "./eventHandler";

let locked = false;

let getLocked = () => {

    return locked;
}

let lock = () => {

    locked = true;
}

let appendTodoToDisplay = function (todoElement) {

    getDisplay().append(todoElement);
}
//removes a specific dom element from the display
let removeFromDisplay = (element) => {

    element.remove();
}
//calls clear element on getDisplay()
let clearDisplay = () => {

    clearElement(getDisplay());
}
//removes all children of element
let clearElement = (element) => {

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

let closeWindow = (e) => {

    let element = e.target.parentElement.parentElement;
    element.remove();
    unlockWindow();
}

let unlockWindow = () => {

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
        currentTitle.classList.add("sidebarTitle");
        sideContainer.appendChild(currentTitle);
        currentTitle.addEventListener("click", titleClick);
    })

    addNewButton.addEventListener("click", addButtonEvent);

    document.querySelector("#Home").addEventListener("click", updateHome);

    document.querySelector("#Today").addEventListener("click", updateToday);

    document.querySelector("#Week").addEventListener("click", updateWeek);
}

let updateDisplay = (todoList) => {


}

export {
    initialLoad,
    appendTodoToDisplay,
    removeFromDisplay,
    clearDisplay,
    closeWindow,
    clearElement,
    unlockWindow,
    getLocked,
    lock,    
}