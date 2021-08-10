import {
    removeFromDisplay,
    appendTodoToDisplay,
    unlockWindow,
} from "./ui"
import {
    createTodoElement,
} from "./generators/elementGenerator";
import {
    createTodo,
    objectGenerator
} from "./objectFactory"
import {
    format,
    isSameWeek,
    parseISO
} from 'date-fns'
import {
    updateHome
} from "./eventHandler";

let currentSelection = "Home";

let todoList = []; //store all todos here, then arr filter them to day/week/projects

let storageFunctions = {}

let titleClick = function (e) {

    currentSelection = e.target.innerText;
    console.log(currentSelection);
    //will update display to the chosen module (ie projects, notes etc)  
}
//creates a new todo with form values
let generateTodo = (elements) => {

    return createTodo(elements);
}

//form event - on submit calls addtodo
let addTodo = (e) => {

    let todo = generateTodo(e.target.elements);
    todoList.push(todo);
    let id = todoList.indexOf(todo);
    todo.setIdentifier(id);
    appendTodoToDisplay(createTodoElement(todo));
    removeFromDisplay(e.target.parentElement.parentElement);
    unlockWindow();
    e.preventDefault();
}
//form event - on submit calls edittodo
let editTodo = (e) => {

    let elements = e.target.elements;
    let id;

    for (let x = 0; x < elements.length; x++) {

        if (elements[x].type == "hidden") {

            id = elements[x].value
        }
    }

    let todo = generateTodo(e.target.elements)
    let index = id;
    todo.setIdentifier(id);
    todoList.splice(index, 1, todo);
    updateHome();
    removeFromDisplay(e.target.parentElement);
    unlockWindow();
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
//returns todo at index id
let getTodo = (id) => {

    let newTodo = todoList.filter((todo) => {

        return todo.getIdentifier() == id;
    })

    return newTodo[0];
}

storageFunctions.replaceTodo = () => {

    todoList.splice(index, 1, todo);
}

storageFunctions.getToday = () => {

    let todaysTodos = todoList.filter((element) => {

        return element.getDate() == format(new Date, "yyyy-MM-dd");
    })

    return todaysTodos;
}

storageFunctions.getWeek = () => {

    let thisWeekTodos = todoList.filter((element) => {

        return isSameWeek(parseISO(element.getDate()), parseISO(format(new Date, "yyyy-MM-dd")));
    });

    return thisWeekTodos;
}

storageFunctions.getTodoList = () => {

    return todoList;
}

export {
    titleClick,
    removeTodo,
    getTodo,
    addTodo,
    editTodo,

    storageFunctions
}