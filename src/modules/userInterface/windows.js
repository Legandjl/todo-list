import { addNoteForm, addProjectForm, addTodoForm } from "../app/eventHandler";
import { storageFunctions } from "../app/storage";
import { closeWindow } from "./ui";
import { divGenerator } from "../misc/divGenerator";
import close from ".././images/close.png"

let windowGen = {};
//takes a todo id and generates a decription from it for dom display
windowGen.generateDescription = (todoId) => {

    let todo = storageFunctions.getTodo(todoId);

    

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
//generates a form container with no sidebar as not required, this form is only for editing a specific todo, uses generate form container as base
windowGen.generateEditFormContainer = () => {

  
    let formContainer = windowGen.generateFormContainer("editFormContainer", "editFormHeader", "editFormTitle", "Edit")
    return formContainer;
}
//generates a form container with a sidebar to hold all add new options, uses generate form container as its base
windowGen.generateAddFormContainer = () => {



    let projectHandlers = {

        "Todo": addTodoForm,
        "Project": addProjectForm,
        "Note": addNoteForm
    }    
  

    let formContainer = windowGen.generateFormContainer("addFormContainer", "addFormHeader", "addFormTitle", "Add New");
    let formSidebar = divGenerator.createDiv("addFormSidebar");
    let titles = ["Todo", "Project", "Note"];



    titles.forEach((title) => {

        let titleHolder = divGenerator.createDivWithClass("addSidebarTitle");
        titleHolder.innerText = title;
        titleHolder.addEventListener("click", projectHandlers[title]);
        formSidebar.append(titleHolder);
    })

    formContainer.append(formSidebar);
    return formContainer;
}
//generates a container using id paramaters so it can be used in diff css styles
windowGen.generateFormContainer = (containerId, headerId, headerTitle, headerText) => {

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


export{windowGen}