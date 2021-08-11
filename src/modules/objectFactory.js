const Todo = function (title, desc, date, priority) {

    let identifier;
    let completed = false;

    let getTitle = () => {

        return title;
    }

    let getDesc = () => {

        return desc;
    }

    let getDate = () => {

        return date;
    }

    let getPriority = () => {

        return priority;
    }

    let setIdentifier = (id) => {

        identifier = id;
    }

    let getIdentifier = () => {

        return identifier;
    }

    let setCompleted = () => {

        console.log(completed);

        if (completed == true) {

            completed = false;
            return;
        }

        completed = true;
    }

    let getCompleted = () => {

        return completed;
    }

    return {
        getTitle,
        getDesc,
        getDate,
        getPriority,
        getIdentifier,
        setIdentifier,
        setCompleted,
        getCompleted
    }
}

let createTodo = (elements) => {

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

            todoPriority = submitted[x].value;
        }
    }

    return Todo(todoElements[0], todoElements[1], todoDate, todoPriority);
}
export {    
    createTodo
}