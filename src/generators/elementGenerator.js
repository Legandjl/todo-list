import {
    divGenerator
} from "./divGenerator"
import bin from ".././images/bin.png"
import edit from ".././images/edit.png"
import {
    removeElement,
    showDescription
} from "../dom"
import {removeTodo
} from "../logic"

let generateForm = () => {

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

    let toAppend = [title, desc, date, submitButton];

    toAppend.forEach((item) => {

        form.append(item);
    })

    return form;
}

let generateTodoElement = function (todo) {

    let todoContainer = divGenerator.createDivWithClass("toDoContainer");
    let checkBoxWrapper = divGenerator.createDivWithClass("checkBoxWrapper"); //check if completed
    let titleWrapper = divGenerator.createDivWithClass("titleWrapper"); //will hold todo title
    let descButtonWrapper = divGenerator.createDivWithClass("descButtonWrap"); //holds a button to display a window with the description
    let iconWrap = divGenerator.createDivWithClass("iconWrap"); //holds the bin & edit icon
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "todoCheck";

    if(todo.getCompleted() == true) {

        checkBox.checked = true;
    }

    let title = todo.getTitle();
    let descButton = document.createElement("button");
    let binIcon = new Image();
    binIcon.src = bin;
    let editIcon = new Image();
    editIcon.src = edit;

    checkBoxWrapper.append(checkBox);
    titleWrapper.append(title);
    descButtonWrapper.append(descButton);
    iconWrap.append(binIcon);
    iconWrap.append(editIcon);

    let toAppend = [checkBoxWrapper, titleWrapper, descButtonWrapper, iconWrap];

    toAppend.forEach((item) => {

        todoContainer.append(item);

    })

    todoContainer.setAttribute("data-id", todo.getIdentifier());

    binIcon.addEventListener("click", removeTodo); 
    checkBox.addEventListener("change", todo.setCompleted);
    descButton.addEventListener("click", showDescription);

    return todoContainer;
}

export {
    generateForm,
    generateTodoElement
}