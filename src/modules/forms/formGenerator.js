import {
    divGenerator
} from "../misc/divGenerator"
import {    
    addNewProject
} from "../app/eventHandler"
import {
    formHelpers
} from "./formHelpers"

//formvaluecallback is either getvaluefromtodo or getformvalues, which assign to values or placeholder respectively
let generateForm = (formId, callback, formValueCallback, indexNum) => {

    let form = document.createElement("FORM");
    form.id = formId;

    let title = document.createElement("input");
    title.type = "text";

    title.classList.add("title");
    title.setAttribute("required", "");

    let desc = document.createElement("textarea");

    desc.classList.add("desc");
    desc.setAttribute("required", "");

    let date = document.createElement("input");
    date.type = "date";
    date.classList.add("formDate");
    date.setAttribute("required", "");

    //priority

    let radioWrap = divGenerator.createDivWithClass("radioWrap");
    let highPrio = formHelpers.generateRadio("High", "priority", "highPrio");
    let highPrioLabel = formHelpers.generateRadioLabel(highPrio);
    let lowPrio = formHelpers.generateRadio("Low", "priority", "lowPrio");

    let lowPrioLabel = formHelpers.generateRadioLabel(lowPrio);

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
    submitButton.value;
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

    let inputs = {
        "title": title,
        "desc": desc,
        "date":date,
        "submitButton":submitButton,
        "lowPrio":lowPrio,
        "highPrio":highPrio,
        "indexNum":indexNum
    }

    formValueCallback(inputs);

    form.addEventListener("submit", callback);

    return form;
}
//takes a todo id and generates a decription from it for dom display
let generateProjectForm = () => {

    let form = document.createElement("FORM");
    form.id = "projectForm";

    let title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Project title..."
    title.maxLength = 15;

    let submitButton = document.createElement("input")
    submitButton.value = "Add Project"
    submitButton.setAttribute("type", "submit");
    submitButton.id = "projectSubmit";

    form.append(title);
    form.append(submitButton);

    form.addEventListener("submit", addNewProject)

    return form;
    
}

export {   
    generateForm,
    generateProjectForm    
}