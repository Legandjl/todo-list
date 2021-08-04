let divGenerator = {};

divGenerator.createDiv = (id) => {

    let div = document.createElement("div");
    div.id = id;
    return div;
}

divGenerator.createDivWithClass = (className) => {

    let div = document.createElement("div");
    div.classList.add(className);
    return div;
}

divGenerator.createTodoContainer = (todo) => {

    
}

export {
    divGenerator
}