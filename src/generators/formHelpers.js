import { storageFunctions } from "../modules/storage";

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

formHelpers.getFormValuesFromTodo = (title, description, date, index) => {   

    let todo = storageFunctions.getTodo(index);
    title.value = todo.getTitle();
    description.value = todo.getDesc();
    date.value = todo.getDate();
  
}

formHelpers.getFormValues = (title, description, date, index) => {

    title.placeholder = "Title: Call the bank";
    description.placeholder = "Description: e.g reason for calling...";    
}

export {
    formHelpers
}
