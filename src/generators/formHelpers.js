import {
    storageFunctions
} from "../modules/storage";

let formHelpers = {};

formHelpers.generateRadio = (value, name, id) => {

    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.value = value;
    radioButton.name = name;
    radioButton.id = id;
    radioButton.classList.add("radioButton");
    return radioButton;
}

formHelpers.generateRadioLabel = (radio) => {

    let label = document.createElement("label");
    label.htmlFor = radio.id;
    label.innerText = radio.value;
    return label;
}

formHelpers.getFormValuesFromTodo = (inputs) => {

    let title = inputs["title"];
    let description = inputs["desc"];
    let lowPrio = inputs["lowPrio"];
    let submitButton = inputs["submitButton"];
    let index = inputs["indexNum"];
    let date = inputs["date"];
    let highPrio = inputs["highPrio"];

    let todo = storageFunctions.getTodo(index);
    title.value = todo.getTitle();
    description.value = todo.getDesc();
    date.value = todo.getDate();
    submitButton.value = "Edit";

    if(todo.getPriority() == "Low") {

        lowPrio.checked = true;
        return;
    }

    highPrio.checked = true;
}

formHelpers.getFormValues = (inputs) => {

    let title = inputs["title"];
    let description = inputs["desc"];
    let lowPrio = inputs["lowPrio"];
    let submitButton = inputs["submitButton"];

    title.placeholder = "Title: Call the bank";
    description.placeholder = "Description: e.g reason for calling...";
    lowPrio.checked = true;
    submitButton.value = "Add"; 
}

export {
    formHelpers
}