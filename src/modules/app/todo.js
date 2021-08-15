import {
    divGenerator
} from "../misc/divGenerator";
import bin from ".././images/bin.png";
import edit from ".././images/edit.png";
import {
    clearElement
} from "../userInterface/ui";
import {
    editButtonEvent,
    openDescriptionWindow,
    removeTodo
} from "./eventHandler";

const Todo = function (title, desc, date, priority) {

    let identifier;
    let completed = false;
    let project = "";

    let getProject = () => {

        return project;
    }

    let setProject = (projectName) => {

        project = projectName;
    }

    let getTitle = () => {

        return title;
    }

    let getDesc = () => {

        return desc;
    }

    let getDate = () => {

        return date;
    }

    let getPriority = () => {

        return priority;
    }

    let setIdentifier = (id) => {

        identifier = id;
    }

    let getIdentifier = () => {

        return identifier;
    }

    let setCompleted = () => {      

        if (completed == true) {
      
            completed = false;
       
            return;
        }
    
        completed = true;
    }

    let getCompleted = () => {

        return completed;
    }

    let setCompleteFromState = () => {

        completed = true;
    }

    let getState = () => {

        return {

            "title": getTitle(),
            "project":getProject(),
            "desc": getDesc(),
            "identifier":getIdentifier(),
            "date":getDate(),
            "completed": getCompleted(),
            "priority": getPriority()
        }
    }

    return {
        getTitle,
        getDesc,
        getDate,
        getPriority,
        getIdentifier,
        setIdentifier,
        setCompleted,
        getCompleted,
        setProject,
        getProject,
        getState,
        setCompleteFromState
    }
}

let createFromState = (title, project, desc, identifier, date, completed, priority) => {

    let todo = Todo(title, desc, date, priority);
    todo.setProject(project);
    todo.setIdentifier(identifier);

    if(completed == true) {

    todo.setCompleteFromState();

    }

    return todo;
}

let createTodo = (elements) => {

    let submitted = elements;
    let todoElements = [];
    let todoDate;
    let todoPriority;
    let id;

    for (let x = 0; x < submitted.length; x++) {

        if (submitted[x].type == "text" || submitted[x].type == "textarea") {

            todoElements.push(submitted[x].value)
        }

        if (submitted[x].type == "date") {

            todoDate = submitted[x].value;
        }

        if (submitted[x].type == "radio" && submitted[x].checked == true) {

            todoPriority = submitted[x].value;
        }
    }

    return Todo(todoElements[0], todoElements[1], todoDate, todoPriority);
}

let createTodoElement = (todo) => {

    let todoContainer = divGenerator.createDivWithClass("toDoContainer");
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
            titleWrapper.classList.add("completed");
        }

        checkBox.addEventListener("change", todo.setCompleted);        
        checkBoxWrapper.append(checkBox);
        titleWrapper.append(title);
        descButtonWrapper.append(descButton);
        iconWrap.append(binIcon);
        iconWrap.append(editIcon);

        checkBox.addEventListener("change", function () { 

            if (todo.getCompleted() == true) {

                checkBox.checked = true;
                titleWrapper.classList.add("completed");
                return;
            }

            titleWrapper.classList.remove("completed");            
        })

        let toAppend = [checkBoxWrapper, titleWrapper, descButtonWrapper, iconWrap];

        toAppend.forEach((item) => {

            todoContainer.append(item);

        })

        todoContainer.setAttribute("data-id", todo.getIdentifier());
        binIcon.addEventListener("click", removeTodo);
        editIcon.addEventListener("click", editButtonEvent);
        descButton.addEventListener("click", openDescriptionWindow);

        if (todo.getPriority() == "High") {

            todoContainer.classList.add("highPriorityIndicator");
            return;
        }

        todoContainer.classList.add("lowPriorityIndicator");

        return;
    }


    setCurrentTodo(todo);

    return todoContainer;
}

export {
    createTodo,
    createTodoElement,
    createFromState

}