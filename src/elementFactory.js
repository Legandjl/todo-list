const Todo = function (title, desc, date, priority) {

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

    return {
        getTitle,
        getDesc,
        getDate,
        getPriority
    }
}

const Note = (title, contents) => {


} 

const Project = (title) => {


}

const elementGenerator = function() {

const createToDo = function(title, desc, date, priority) {

    return Todo(title, desc, date, priority);

}

return {createToDo}

}

export {
    elementGenerator
}