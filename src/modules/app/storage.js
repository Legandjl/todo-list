import {
    format,
    isSameWeek,
    parseISO
} from 'date-fns'
import {
    updateHome,
    updateProjects
} from './eventHandler';
import {
    createFromState
} from './todo';


let localTodoList = JSON.parse(localStorage.getItem("todoList"));
let localProjectList = JSON.parse(localStorage.getItem("projectList"));
let todoList = []; //store all todos here, then arr filter them to day/week/projects
let projectList = [];
let storageFunctions = {}

storageFunctions.getProjects = () => {

    return projectList;
}
//removes project & removes reference to project from each todo
storageFunctions.removeProject = (projectTitle) => {

    let newProjectList = projectList.filter((project) => {

        return project != projectTitle;
    })

    todoList.forEach((todo) => {

        if (todo.getProject() == projectTitle) {
            todo.setProject("");
        }
    })

    projectList = newProjectList;
    updateLocalStorage();
}

storageFunctions.addProject = (projectTitle) => {

    let match = true;

    projectList.forEach((project) => {

        if (project.toLowerCase() == projectTitle.toLowerCase()) {

            match = false;
        }
    })

    if (match == true) {

        projectList.push(projectTitle);
    }

    updateLocalStorage();
}

storageFunctions.addTodo = (todo) => {  

    todoList.push(todo);
    let id = todoList.indexOf(todo);
    todo.setIdentifier(id);
    updateLocalStorage();
}

storageFunctions.removeTodo = (id) => {

    let newTodoList = todoList.filter((element) => {

        return element.getIdentifier() != id;
    })

    todoList = newTodoList;
    updateLocalStorage();
}
//returns todo at index id
storageFunctions.getTodo = (id) => {

    let newTodo = todoList.filter((todo) => {

        return todo.getIdentifier() == id;
    })

    return newTodo[0];
}
//replaces a todo at index with passed todo
storageFunctions.replaceTodo = (index, todo) => {

    todoList.splice(index, 1, todo);
    updateLocalStorage();
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
//filters todos by project
storageFunctions.filterByProject = (project) => {

    let filteredByProject = todoList.filter((todo) => {

        return todo.getProject().toLowerCase() == project.toLowerCase();
    })

    return filteredByProject;
}
//returns all todos
storageFunctions.getTodoList = () => {

    return todoList;
}
//checks if a currently selected title is a project
storageFunctions.isProject = (element) => {

    let projectSelected = false;

    projectList.forEach((project) => {

        if (project.toLowerCase() == element.innerText.toLowerCase()) {

            projectSelected = true;
        }
    })

    return projectSelected;

}

storageFunctions.checkForLocal = () => {

    if (localTodoList == null) {

        return;

    } else {

        localTodoList.forEach(todo => {
          
            let todoItem = createFromState(todo.title, todo.project, todo.desc, todo.identifier, todo.date, todo.completed, todo.priority);

            todoList.push(todoItem);

        })
    }

    updateHome();

}

storageFunctions.checkForProjects = () => {

    if (localProjectList == null) {

        return;

    } else {

        localProjectList.forEach(item => {
        
            storageFunctions.addProject(item);
        })
    }

    updateProjects();
}

function updateLocalStorage() {

    let localTodoListCreator = [];

    todoList.forEach((todo) => {

        let todoItem = todo.getState();       
        localTodoListCreator.push(todoItem);
    })

    localStorage.setItem("todoList", JSON.stringify(localTodoListCreator));
    localTodoList = JSON.parse(localStorage.getItem("todoList"));

    localStorage.setItem("projectList", JSON.stringify(projectList));
    localProjectList = JSON.parse(localStorage.getItem("projectList"));
}


export {
    storageFunctions

}