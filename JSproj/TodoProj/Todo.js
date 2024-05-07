const todoList = [{}];

displayOnPage = () => {
    let todoListHTML = "";

    for(i=0;i<todoList.length; i++) {
        const todoItem = todoList[i];
        const {name, dueDate} = todoItem;
        const html = `<div>${name}</div> <div>${dueDate}</div> <button class="delete-btn" onclick="removeFromList(${i});">Delete</button></div>`;
        todoListHTML += html;
        document.querySelector(".addToDiv").innerHTML = todoListHTML;
    };
};

addToList = () => {
    const textInput = document.querySelector(".inputText");
    const name = textInput.value;
    const dateInput = document.querySelector(".inputDate");
    const dueDate = dateInput.value;

    todoList.push({name, dueDate});
    console.log(todoList);
    textInput.value = "";

    displayOnPage();
};

removeFromList = (i) => {
    todoList.splice(i, 1);
    displayOnPage();
};