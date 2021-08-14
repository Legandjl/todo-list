import {
    format,
    isSameWeek,
    parseISO
} from 'date-fns'

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

        if(todo.getProject() == projectTitle) {
            todo.setProject("");
        }
    })

    projectList = newProjectList;    
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
//replaces a todo at index with passed todo
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

export {

    storageFunctions
}