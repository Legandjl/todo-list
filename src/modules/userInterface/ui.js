import {
    divGenerator
} from "../misc/divGenerator";
import {
    addButtonEvent,
    updateWeek,
    updateToday,
    updateHome    
} from "../app/eventHandler";
import {  
    createTodoElement
} from "../app/todo";

let locked = false;
let currentTab;

let getLocked = () => {

    return locked;
}

let lock = () => {

    locked = true;
}

let unlockWindow = () => {

    locked = false;
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

let getDisplay = () => {

    return document.querySelector("#display");
}

let updateDisplay = (todoList) => {

    todoList.forEach((todo) => {

        appendTodoToDisplay(createTodoElement(todo));
    })
}

let getProjectContainer = () => {

    return document.querySelector("#projectWrap");
}

let titleClick = function (e) {

    if(e.target.innerText != "Projects") {
    setCurrentTab(e.target);  
    }
    //will update display to the chosen module (ie projects, notes etc)  
}

let getCurrentTab = () => {

    return currentTab;
}

let setCurrentTab = (element) => {

    currentTab.classList.remove("activeTab");   

    currentTab = element;

    element.classList.add("activeTab");
}

let initialLoad = function () {

    const sideBarTitles = ["Home", "Today", "Week","Projects", "projectWrap"];
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

        if (title == "projectWrap") {

            sidebar.append(divGenerator.createDiv("projectWrap"));
            return;
        }

        let currentTitle = divGenerator.createDivWithClass("sideBarTitle");
        currentTitle.id = title.toLowerCase();
        currentTitle.innerText = title;    
     
        sideContainer.appendChild(currentTitle);
        currentTitle.addEventListener("click", titleClick);

    })

    addNewButton.addEventListener("click", addButtonEvent);

    currentTab = document.querySelector("#home");
    setCurrentTab(document.querySelector("#home"));

    document.querySelector("#home").addEventListener("click", updateHome);

    document.querySelector("#today").addEventListener("click", updateToday);

    document.querySelector("#week").addEventListener("click", updateWeek);

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
    updateDisplay,
    getProjectContainer,
    getCurrentTab,
    setCurrentTab    
}