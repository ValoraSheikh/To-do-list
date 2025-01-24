document.addEventListener('DOMContentLoaded', () => {
    function dayFunc() {
        let dateDay = document.querySelector('#date-day');
        let date = new Date;
    
        // Array of weekday names
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Array of month names
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    
        let currDay = weekdays[date.getDay()];
        let currMonth = months[date.getMonth()];
        let currDate = date.getDate();
    
        let formatDate = `${currDay}, ${currDate} ${currMonth} `; 
        // console.log(formatDate);
        
    
    
        dateDay.textContent = formatDate;
    
    }
    
    dayFunc();
    
    // Todo List scripting
    
    let todoList = document.querySelector('.todo');
    let input = document.querySelector('#input-task');
    let addTask = document.querySelector('.list');
    
    function addNewTask() {
    
        let task = document.createElement('div')
        task.classList.add('task-items');
    
    
        // Code to check a task
        let checkBtn = document.createElement('button');
        checkBtn.classList.add('checkBtn')
        checkBtn.innerHTML = `<span class="material-symbols-outlined" id="check"> circle </span> `;
        task.appendChild(checkBtn);
    
        checkBtn.addEventListener('click', function () {
            if (checkBtn.innerText.trim() === 'circle') {
                checkBtn.innerHTML = `<span class="material-symbols-outlined"> check_circle </span>`;
                taskText.style.textDecoration = 'line-through'; // Strike through task text
            } else {
                checkBtn.innerHTML = `<span class="material-symbols-outlined"> circle </span>`;
                taskText.style.textDecoration = 'none'; // Remove strike through when unchecked
            }
            
        });;
    
    
        // Code for input task
        let taskText = document.createElement('p');
        taskText.classList.add('tast-text');
        taskText.innerText = `${input.value}`;
        task.appendChild(taskText);
        
    
        // Code to delete a task
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<span class="material-symbols-outlined"> delete_forever </span>`;
        deleteBtn.classList.add('deleteTask')
        task.appendChild(deleteBtn);
    
        todoList.appendChild(task)
    
        deleteBtn.addEventListener('click', function (e) {
        let target = e.target;
        console.log(target);
        
        target.parentElement.parentElement.remove();    
        });
    
        input.value = "";
    }
    
    
    
    input.addEventListener('keydown', function (e) {
        if (e.key == 'Enter' && input.value != "" ) {
            addNewTask();
            // todoList.style.display = 'flex';
        } else if(e.key == 'Enter' && input.value == ""){
            modalContainer.style.display = 'block';
            overLay.style.display = 'block';
        }
    })
    
    // Code for modal
    
    let modalContainer = document.querySelector('.modal-container');
    let overLay = document.querySelector('.modal-overlay')
    let close = document.querySelector('#close');
    
    close.addEventListener('click', function () {
        modalContainer.style.display = 'none';
        overLay.style.display = 'none';
    })
    
    
    
    
})