import {
    removeFromDisplay,
    updateTodoList,
    clearDisplay
} from "./dom"
import {
    objectGenerator
} from "./objectFactory"
import {
    format
} from 'date-fns'

let currentSelection = "Home";

let todoList = []; //store all todos here, then arr filter them to day/week/projects

let titleClick = function (e) {

    currentSelection = e.target.innerText;
    console.log(currentSelection);

    //will update display to the chosen module (ie projects, notes etc)  
}


let generateTodo = (elements) => {

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

            console.log("here");

            todoPriority = submitted[x].value;

        }
    }

    return objectGenerator().createToDo(todoElements[0], todoElements[1], todoDate, todoPriority); //return this
}

let addTodo = (e) => {    

    let todo = generateTodo(e.target.elements);
    todoList.push(todo);
    let id = todoList.indexOf(todo);
    todo.setIdentifier(id);
    updateTodoList(todo);
    e.preventDefault();
}


let editTodo = (e) => {    

    let elements = e.target.elements;
    let id;

    for (let x = 0; x < elements.length; x++) {

        if (elements[x].type == "hidden") {

            console.log("im here an firing")

            id = elements[x].value
        }
    }

    let todo = generateTodo(e.target.elements)
    let index = id;
    todo.setIdentifier(id);
    todoList.splice(index, 1, todo);
    updateHome();

    e.preventDefault();
}

let removeTodo = (e) => {

    let id = e.target.parentElement.parentElement.dataset.id;

    let newTodoList = todoList.filter((element) => {

        return element.getIdentifier() != id;
    })

    todoList = newTodoList;

    removeFromDisplay(e.target.parentElement.parentElement);
}

let updateHome = () => {

    clearDisplay();

    todoList.forEach((todo) => {

        updateTodoList(todo);

    })
}

let updateToday = () => {

    clearDisplay();

    let todaysTodos = todoList.filter((element) => {

        return element.getDate() == format(new Date, "yyyy-MM-dd");
    })

    todaysTodos.forEach((todo) => {

        updateTodoList(todo)
    });
}

let getTodo = (id) => {

    console.log("checking")

    let newTodo = todoList.filter((todo) => {

        return todo.getIdentifier() == id;
    })

    return newTodo[0];
}

export {

    titleClick,

    removeTodo,
    updateHome,
    updateToday,
    getTodo,
    addTodo,
    editTodo
}