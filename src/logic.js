import {
    removeFromDisplay,
    setDisplay,   
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

let todoSubmit = function (e) {

    let submitted = e.target.elements;
    let todoElements = [];
    let todoDate = "";
    let todoPriority = "low";
    

    for (let x = 0; x < submitted.length; x++) {

        if (submitted[x].type == "text") {

            todoElements.push(submitted[x].value)
        }

        if (submitted[x].type == "date") {

            todoDate = submitted[x].value;
        }

        if(submitted[x].type == "radio" && submitted[x].checked == true) {

            todoPriority = submitted[x].value;
           
        }
    }

    let newTodo = objectGenerator().createToDo(todoElements[0], todoElements[1], todoDate, todoPriority);
    addTodo(newTodo);

    let id = todoList.indexOf(newTodo);
    newTodo.setIdentifier(id);

    setDisplay(newTodo);
    e.preventDefault();
}

let addTodo = (todo) => {

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

    clearDisplay();

    todoList.forEach((todo) => {

        setDisplay(todo);

    })
}

let updateToday = () => {

    clearDisplay();

    let todaysTodos = todoList.filter((element) => {

        return element.getDate() == format(new Date, "yyyy-MM-dd");
    })

    todaysTodos.forEach((todo) => {

        setDisplay(todo)
    });
}

let getTodo = (id) => {

    console.log("checking")

    let newTodo = todoList.filter((todo) => {

        return todo.getIdentifier() == id;
    })

    console.log(newTodo[0].getIdentifier())


    return newTodo[0];


}

export {
   
    titleClick,
    todoSubmit,
    removeTodo,
    updateHome,
    updateToday,
    getTodo
}