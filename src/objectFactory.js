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

        if(completed == true) {

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

const Note = (title, contents) => {


}

const Project = (title) => {


}

const objectGenerator = function () {

    const createToDo = function (title, desc, date, priority) {

        return Todo(title, desc, date, priority);

    }

    return {
        createToDo
    }

}

export {
    objectGenerator 
}