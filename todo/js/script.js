const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoComplete = document.querySelector('.todo-completed');
// header-button

let todaData = JSON.parse(localStorage.getItem("arr"));



const render = function () {
    
    todoList.innerHTML = " ";
    todoComplete.innerHTML = " ";
   
    if (todaData != null) {
        todaData = JSON.parse(localStorage.getItem("arr"));
    } else {
        todaData = [];
    };
    todaData.forEach(function (el, index) {
        if (el.completed) {
            todoComplete.insertAdjacentHTML('afterbegin',
                `<li class="todo-item">
    <span class="text-todo">${el.text}</span>
    <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
    </div>
</li>`);;
        } else {
            todoList.insertAdjacentHTML('afterbegin',
                `<li class="todo-item">
    <span class="text-todo">${el.text}</span>
    <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
    </div>
</li>`)
        };
        const li = document.querySelector('.todo-item')
        li.querySelector('.todo-complete').addEventListener('click', function () {
            if (todaData.includes(el)) {
                el.completed = !el.completed;
            };
            localStorage.setItem("arr", JSON.stringify(todaData));
            render();

        });
        li.querySelector('.todo-remove').addEventListener('click', () => {
            todaData.splice(index, 1);
            li.remove();
            localStorage.setItem("arr", JSON.stringify(todaData));
            render();
        });
    });
};
todoControl.addEventListener('submit', (event) => {
    event.preventDefault();
    const newDoto = {
        text: headerInput.value,
        completed: false

    };
    if (headerInput.value.trim()) {
        todaData.push(newDoto)
        headerInput.value = ""
        localStorage.setItem("arr", JSON.stringify(todaData));
        render()
    }
    


   

})


render()