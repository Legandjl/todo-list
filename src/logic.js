import {
    removeFromDisplay,
    setDisplay,
    toggleForm,
    removeAllChildNodes
} from "./dom"
import {
    objectGenerator
} from "./objectFactory"
import {
    compareAsc,
    format,
    isSameDay
} from 'date-fns'

let currentSelection = "Home";

let todoList = []; //store all todos here, then arr filter them to day/week/projects

let titleClick = function (e) {

    currentSelection = e.target.innerText;
    console.log(currentSelection);

    //will update display to the chosen module (ie projects, notes etc)  
}

let addButtonClick = function (e) {

    console.log(currentSelection);
    toggleForm();
    //will add to the currently clicked display
    //so create - currentSelection - div
    //get the currentSelection type module - generate contents, add contents to div append to display
}

let todoSubmit = function (e) {

    let submitted = e.target.elements;
    let todoElements = [];
    let todoDate = "";

    for (let x = 0; x < submitted.length; x++) {

        if (submitted[x].type == "text") {

            todoElements.push(submitted[x].value)
        }

        if (submitted[x].type == "date") {

            todoDate = submitted[x].value;
        }
    }

    let newTodo = objectGenerator().createToDo(todoElements[0], todoElements[1], todoDate, "low");
    addTodo(newTodo);

    let id = todoList.indexOf(newTodo);
    newTodo.setIdentifier(id);

    setDisplay(newTodo);
    e.preventDefault();
}

let addTodo = (todo) => {

    console.log(format(new Date, "yyyy-MM-dd") == todo.getDate()); //can use to filter to day 



    todoList.push(todo);
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

    removeAllChildNodes();

    todoList.forEach((todo) => {

        setDisplay(todo);

    })
}

let updateToday = () => {

    removeAllChildNodes();

    let todaysTodos = todoList.filter((element) => {

        return element.getDate() == format(new Date, "yyyy-MM-dd");
    })

    todaysTodos.forEach((todo) => {
        
        setDisplay(todo)
    });
}

export {
    addButtonClick,
    titleClick,
    todoSubmit,
    removeTodo,
    updateHome,
    updateToday
}