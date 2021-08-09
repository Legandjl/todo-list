import {
    divGenerator
} from "./divGenerator"
import bin from ".././images/bin.png"
import edit from ".././images/edit.png"
import close from ".././images/close.png"
import {
    showDescription,
    editButtonClicked,
    closeWindow,
    clearElement
} from "../dom"
import {
    removeTodo,
    getTodo
} from "../logic"

let generateContainer = (containerId, headerId, headerTitle, headerText) => {

    let formClose = new Image();
    formClose.src = close;
    formClose.classList.add("windowClose");
    let formContainer = divGenerator.createDiv(containerId);
    let formHeader = divGenerator.createDiv(headerId);
    let formHeaderTitle = divGenerator.createDiv(headerTitle);
    formHeaderTitle.innerText = headerText
    formHeader.append(formHeaderTitle);
    formHeader.append(formClose);
    formContainer.append(formHeader);
    formClose.addEventListener("click", closeWindow);
    return formContainer;
}

let generateAddFormContainer = () => {

    let formContainer = generateContainer("addFormContainer", "addFormHeader", "addFormTitle", "Add New");
    let formSidebar = divGenerator.createDiv("addFormSidebar");
    formContainer.append(formSidebar);
    return formContainer;
}

let generateEditFormContainer = () => {

    let formContainer = generateContainer("editFormContainer", "editFormHeader", "editFormTitle", "Edit")
    return formContainer;
}

let generateEditForm = (formId, callback, indexNum) => {

    let form = document.createElement("FORM");
    form.id = formId;

    let title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Title: Call the bank"
    title.classList.add("title");

    let desc = document.createElement("textarea");
    desc.placeholder = "Description: e.g reason for calling..."
    desc.classList.add("desc");

    let date = document.createElement("input");
    date.type = "date";
    date.classList.add("formDate");


    let id = document.createElement("input");
    id.type = "hidden";
    id.value = indexNum;
    //priority

    let radioWrap = divGenerator.createDivWithClass("radioWrap");
    let highPrio = generateRadio("High", "priority", "highPrio");
    let highPrioLabel = generateRadioLabel(highPrio);
    let lowPrio = generateRadio("Low", "priority", "lowPrio");
    lowPrio.checked = true;
    let lowPrioLabel = generateRadioLabel(lowPrio);

    let radioElements = [lowPrioLabel, lowPrio, highPrioLabel, highPrio];

    radioElements.forEach((element) => {

        radioWrap.append(element);
    })

    let label = divGenerator.createDiv("priorityLabel");
    label.innerText = "Priority: "

    let priorityWrap = divGenerator.createDivWithClass("priorityWrap");
    priorityWrap.append(label);
    priorityWrap.append(radioWrap);

    let submitButton = document.createElement("input")
    submitButton.value = "Add";
    submitButton.setAttribute("type", "submit");
    submitButton.id = "todoSubmit";

    let formFooter = divGenerator.createDiv("addFormFooter");

    let footerElements = [date, priorityWrap, submitButton];
    footerElements.forEach((element) => {

        formFooter.append(element);
    })

    let formElements = [title, desc, formFooter, id];

    formElements.forEach((item) => {

        form.append(item);
    })

    form.addEventListener("submit", callback);

    return form;


}

let generateForm = (formId, callback) => {

    let form = document.createElement("FORM");
    form.id = formId;

    let title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Title: Call the bank"
    title.classList.add("title");

    let desc = document.createElement("textarea");
    desc.placeholder = "Description: e.g reason for calling..."
    desc.classList.add("desc");

    let date = document.createElement("input");
    date.type = "date";
    date.classList.add("formDate");

    //priority

    let radioWrap = divGenerator.createDivWithClass("radioWrap");
    let highPrio = generateRadio("High", "priority", "highPrio");
    let highPrioLabel = generateRadioLabel(highPrio);
    let lowPrio = generateRadio("Low", "priority", "lowPrio");
    lowPrio.checked = true;
    let lowPrioLabel = generateRadioLabel(lowPrio);

    let radioElements = [lowPrioLabel, lowPrio, highPrioLabel, highPrio];

    radioElements.forEach((element) => {

        radioWrap.append(element);
    })

    let label = divGenerator.createDiv("priorityLabel");
    label.innerText = "Priority: "

    let priorityWrap = divGenerator.createDivWithClass("priorityWrap");
    priorityWrap.append(label);
    priorityWrap.append(radioWrap);

    let submitButton = document.createElement("input")
    submitButton.value = "Add";
    submitButton.setAttribute("type", "submit");
    submitButton.id = "todoSubmit";

    let formFooter = divGenerator.createDiv("addFormFooter");

    let footerElements = [date, priorityWrap, submitButton];
    footerElements.forEach((element) => {

        formFooter.append(element);
    })

    let formElements = [title, desc, formFooter];

    formElements.forEach((item) => {

        form.append(item);
    })

    form.addEventListener("submit", callback);

    return form;
}

let generateRadio = (value, name, id) => {

    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.value = value;
    radioButton.name = name;
    radioButton.id = id;
    radioButton.classList.add("radioButton");
    return radioButton;
}

let generateRadioLabel = (radio) => {

    let label = document.createElement("label");
    label.htmlFor = radio.id;
    label.innerText = radio.value;
    return label;
}

//takes a container element, clears it, and displays a todo in it

let updateTodoContainer = (todo, container) => {

    if (!container.classList.contains("toDoContainer")) {

        console.log("wrong container type");
        return;
    }

    let todoContainer = container;
    let checkBoxWrapper = divGenerator.createDivWithClass("checkBoxWrapper"); //check if completed
    let titleWrapper = divGenerator.createDivWithClass("titleWrapper"); //will hold todo title
    let descButtonWrapper = divGenerator.createDivWithClass("descButtonWrap"); //holds a button to display a window with the description
    let iconWrap = divGenerator.createDivWithClass("iconWrap"); //holds the bin & edit icon
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "todoCheck";
    let title;
    let descButton = document.createElement("button");
    descButton.innerText = "Details";
    let binIcon = new Image();
    binIcon.src = bin;
    let editIcon = new Image();
    editIcon.src = edit;

    let setCurrentTodo = (todo) => {

        clearElement(todoContainer);

        title = todo.getTitle();

        if (todo.getCompleted() == true) {

            checkBox.checked = true;
        }

        checkBox.addEventListener("change", todo.setCompleted);
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
        editIcon.addEventListener("click", editButtonClicked);
        descButton.addEventListener("click", showDescription);

        if (todo.getPriority() == "High") {

            todoContainer.classList.add("highPriorityIndicator");
            return;
        }

        todoContainer.classList.add("lowPriorityIndicator");

        return;

    }

    setCurrentTodo(todo);

    return {
        setCurrentTodo
    }
}

let createTodoElement = (todo) => {

    let todoContainer = divGenerator.createDivWithClass("toDoContainer");
    updateTodoContainer(todo, todoContainer);
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
    windowClose.classList.add("windowClose")

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
    windowClose.addEventListener("click", closeWindow);

    return description;

}

export {
    generateAddFormContainer,
    generateEditFormContainer,
    generateDescription,
    generateForm,    
    generateEditForm,
    createTodoElement,
    
}