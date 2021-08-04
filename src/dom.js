import {
    divGenerator
} from "./helpers/divGenerator";
import {
    titleClick,
    addButtonClick,
    formsubmit
} from "./logic"

const sideBarTitles = ["Home", "Today", "Week", "Projects", "Notes"];
let header = divGenerator.createDiv("header");
let sidebar = divGenerator.createDiv("sideBar");
let sideContainer = divGenerator.createDiv("sideContainer");
let buttonContainer = divGenerator.createDiv("buttonContainer");
let addNewButton = document.createElement("button");
let display = divGenerator.createDiv("display");
let content = document.querySelector("#content");


let formContainer = divGenerator.createDiv("formContainer");
formContainer.classList.add("hidden");
let form = document.createElement("FORM");
form.id = "todoForm"
let title = document.createElement("input");
title.type = "text";
title.classList.add("title")
let desc = document.createElement("input");
desc.type = "text";
desc.classList.add("desc");
let date = document.createElement("input");
date.type = "date";
date.classList.add("formDate");
//priority
let submitButton = document.createElement("input")
submitButton.setAttribute("type", "submit");
submitButton.id = "todoSubmit";
form.append(title);
form.append(desc);
form.append(date);
form.append(submitButton);
formContainer.append(form);
form.addEventListener("submit", formsubmit)



let initialLoad = function () {

    sidebar.appendChild(sideContainer);
    sidebar.appendChild(buttonContainer);
    buttonContainer.appendChild(addNewButton);
    addNewButton.id = "addNewButton";

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(display);

    document.body.appendChild(formContainer);

    sideBarTitles.forEach((title) => {

        let currentTitle = divGenerator.createDivWithClass("sideBarTitle");
        currentTitle.id = title;
        currentTitle.innerText = title;
        sideContainer.appendChild(currentTitle);
        currentTitle.addEventListener("click", titleClick);
    })

    addNewButton.addEventListener("click", addButtonClick);
}

let toggleForm = function () {

    formContainer.classList.toggle("hidden");
}

let setDisplay = function (todo) {

    let todoContainer = divGenerator.createDivWithClass("todoElement");

    let checkBoxWrapper = divGenerator.createDivWithClass("checkBoxWrapper"); //check if completed
    let titleWrapper = divGenerator.createDivWithClass("titleWrapper"); //will hold todo title
    let descButtonWrapper = divGenerator.createDivWithClass("descButtonWrap"); //holds a button to display a window with the description
    let iconWrap = divGenerator.createDivWithClass("iconWrap"); //holds the bin & edit icon

    //append all the above to the container

    //then append the correct elements to each (title, descbutton, icons etc)

    //then append to the display   

    display.append(element);
}

export {
    initialLoad,
    setDisplay,
    toggleForm
}