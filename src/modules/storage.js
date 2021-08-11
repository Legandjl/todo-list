import {
    format,
    isSameWeek,
    parseISO
} from 'date-fns'

let currentSelection = "Home";

let todoList = []; //store all todos here, then arr filter them to day/week/projects

let storageFunctions = {}

let titleClick = function (e) {

    currentSelection = e.target.innerText;
    console.log(currentSelection);
    //will update display to the chosen module (ie projects, notes etc)  
}

storageFunctions.addTodo = (todo) => {

    todoList.push(todo);
    let id = todoList.indexOf(todo);
    todo.setIdentifier(id);
}

storageFunctions.removeTodo = (id) => {

    let newTodoList = todoList.filter((element) => {

        return element.getIdentifier() != id;
    })

    todoList = newTodoList;
}
//returns todo at index id
storageFunctions.getTodo = (id) => {

    let newTodo = todoList.filter((todo) => {

        return todo.getIdentifier() == id;
    })

    return newTodo[0];
}

storageFunctions.replaceTodo = (index, todo) => {

    todoList.splice(index, 1, todo);
}
//returns an array of todo with todays day
storageFunctions.getToday = () => {

    let todaysTodos = todoList.filter((element) => {

        return element.getDate() == format(new Date, "yyyy-MM-dd");
    })

    return todaysTodos;
}
//returns an array of todos in this week
storageFunctions.getWeek = () => {

    let thisWeekTodos = todoList.filter((element) => {

        return isSameWeek(parseISO(element.getDate()), parseISO(format(new Date, "yyyy-MM-dd")));
    });

    return thisWeekTodos;
}
//returns all todos
storageFunctions.getTodoList = () => {

    return todoList;
}

export {
    titleClick,
    storageFunctions
}