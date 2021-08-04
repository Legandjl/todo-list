import "./style.css"
import {initialLoad} from "./dom"
initialLoad();

//todo generator - title, desc, date, priority 
//note generator - title, contents - note section of ui will be grid auto fill style
//project generator - title
//overall controller for adding each of these (ie list.addNewProect(), list.addNewTodo() etc) -- the above 3 can be separate modules imported into a controller module
//get all contents from a form

//initial load can be its own module
//dom changes can have its own module

//adding todos

//to dos get added to either default location or current selected project - or add to default, then have an id on the todo that can also assign it to a project
//might work like  domstuff.getCurrentSelection() -- returning the currently clicked project, home etc
//<element on click> domstuff.setCurrentSelection()
//default selection == home (onload)

//sorting todos

//<date element onclick> display all todos for that date (either today or this week)
//todos get sorted by date - if date of todo is today, show it in today section of app
//default can show all todos 

