import {
    setDisplay,
    toggleForm
} from "./dom"
import {
    elementGenerator
} from "./elementFactory"
import {
    divGenerator
} from "./helpers/divGenerator"
import { compareAsc, format } from 'date-fns'

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

let formsubmit = function(e) {

    console.log(e.target.elements)
    let submitted = e.target.elements;
    let todoElements = [];
    let todoDate = "";

    for(let x = 0; x < submitted.length; x ++) {        

        if(submitted[x].type == "text") {

      
            todoElements.push(submitted[x].value)
        }   
        
        if(submitted[x].type == "date") {

           todoDate = submitted[x].value;
        }
    }

    console.log(todoElements);

  
    //needs to create a new todo with the form input
    //then append it to display
    //then reset and close form

    let newTodo = elementGenerator().createToDo(todoElements[0], todoElements[1], todoDate, "low");
    todoList.push(newTodo)
    console.log("Title: " + newTodo.getTitle() + " Desc: " + newTodo.getDesc() + " Date: " + newTodo.getDate()  ); 
    //append to display setDisplay();
    e.preventDefault(); 
}


export {
    addButtonClick,
    titleClick,
    formsubmit
}