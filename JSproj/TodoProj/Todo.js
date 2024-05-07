const todoList = [];

displayOnPage = () => {
    let todoListHTML = "";

    for(i=0;i<todoList.length; i++) {
        const todoItem = todoList[i];
        const html = `<p>${todoItem}</p>`;
        todoListHTML += html;
        document.querySelector(".addToDiv").innerHTML = todoListHTML;
    };
};

addToList = () => {
    const textInput = document.querySelector(".inputText");
    const itemName = textInput.value;
    todoList.push(itemName);
    console.log(todoList);
    textInput.value = "";

    displayOnPage();
};