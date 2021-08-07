import {
    divGenerator
} from "./divGenerator"
import bin from ".././images/bin.png"
import edit from ".././images/edit.png"
import close from ".././images/close.png"
import {   
    showDescription,   
    closeForm,
    closeDescription
} from "../dom"
import {
    removeTodo,
    getTodo,
    todoSubmit
} from "../logic"

let generateForm = () => {

    let formClose = new Image();
    formClose.src = close;

    let formContainer = divGenerator.createDiv("addFormContainer");

    let form = document.createElement("FORM");
    form.id = "todoForm"

    let title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Title: Call the bank"
    title.classList.add("title");

    let desc = document.createElement("input");
    desc.type = "text";
    desc.placeholder = "Description: e.g reason for calling..."
    desc.classList.add("desc");

    let date = document.createElement("input");
    date.type = "date";
    date.classList.add("formDate");
    //priority

    let radioWrap = divGenerator.createDiv("radioWrap");
    let highPrio = document.createElement("input");
    highPrio.type = "radio";
    highPrio.value = "high";
    highPrio.name = "priority";
    highPrio.id = "highPrio";
    highPrio.classList.add("radioButton")
    let lowPrio = document.createElement("input");
    lowPrio.type = "radio";
    lowPrio.value = "low";
    lowPrio.name = "priority";
    lowPrio.id = "lowPrio"
    lowPrio.classList.add("radioButton")

    radioWrap.append(highPrio);
    radioWrap.append(lowPrio);

    let label = divGenerator.createDiv("prioityLabel");
    label.innerText = "Priority: "

    let priorityWrap = divGenerator.createDiv("priorityWrap");    
    priorityWrap.append(label);
    priorityWrap.append(radioWrap);  

    let submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit");
    submitButton.id = "todoSubmit";

    let toAppend = [title, desc, date, priorityWrap, submitButton];

    toAppend.forEach((item) => {

        form.append(item);
    })

    let formHeader = divGenerator.createDiv("addFormHeader");
    let formHeaderTitle = divGenerator.createDiv("addFormTitle");
    formHeaderTitle.innerText = "Add New";
    formHeader.append(formHeaderTitle);
    formHeader.append(formClose);
    formClose.addEventListener("click", closeForm);

    let formSidebar = divGenerator.createDiv("addFormSidebar");
    formContainer.append(form);
    formContainer.append(formHeader);
    formContainer.append(formSidebar);
    form.addEventListener("submit", todoSubmit);

    return formContainer;
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

    if (todo.getCompleted() == true) {

        checkBox.checked = true;
    }

    let title = todo.getTitle();
    let descButton = document.createElement("button");
    descButton.innerText = "Details";
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

let generateDescription = (todoId) => {

    let todo = getTodo(todoId);    

    let description = divGenerator.createDivWithClass("description");
    let descHeader = divGenerator.createDivWithClass("descriptionHeader");
    let descBody = divGenerator.createDivWithClass("descriptionBody");
    let descFooter = divGenerator.createDivWithClass("descFooter");
    let descTitle = divGenerator.createDivWithClass("descTitleWrap");
    let descWrapper = divGenerator.createDivWithClass("descWrap");
    let priorityWrapper = divGenerator.createDivWithClass("priorityDescription");
    let dateWrapper = divGenerator.createDivWithClass("descDateWrapper");

    let windowClose = new Image();
    windowClose.src = close;

    dateWrapper.innerText = "Date: " + todo.getDate();

    //also need due date, priority, and project (if any)

    descWrapper.innerText = "Description: " + todo.getDesc();
    priorityWrapper.innerText = "Priority: " + todo.getPriority();
    descTitle.innerText = "Title: " + todo.getTitle();

    descHeader.append(descTitle);
    descHeader.append(windowClose);
    descBody.append(descWrapper);
    descFooter.append(dateWrapper);
    descFooter.append(priorityWrapper);
    description.append(descHeader);
    description.append(descBody);
    description.append(descFooter);

    windowClose.addEventListener("click", closeDescription);

    return description;

}

export {
    generateForm,
    generateTodoElement,
    generateDescription
}