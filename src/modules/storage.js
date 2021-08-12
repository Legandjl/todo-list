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

    projectList.forEach((project) => {

        console.log(project);
    })
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
storageFunctions.isProject = (name) => {

    let projectSelected = false;

    projectList.forEach((project) => {

        if (project.toLowerCase() == name.toLowerCase()) {

            projectSelected = true;
        }
    })

    return projectSelected;

}

export {

    storageFunctions
}