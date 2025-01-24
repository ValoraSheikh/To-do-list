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
    
        let formatDate = `${currDay} ${currDate}, ${currMonth} `; 
        // console.log(formatDate);
        
        dateDay.textContent = formatDate;
    
    }
    
    dayFunc(); // Function call
    
    // Todo List scripting
    
    let todoList = document.querySelector('.todo');
    let input = document.querySelector('#input-task');
    // let addTask = document.querySelector('.list');
    let taskArr = JSON.parse(localStorage.getItem("Task")) || [];
    console.log(taskArr);
    
    taskArr.forEach(element => {
        addNewTask(element)
    });
    
    
    input.addEventListener('keydown', function (e) {
        if (e.key == 'Enter' && input.value != "" ) {
            let taskObj = {
                id: Date.now(),
                text: input.value,
                completed: false
            }
            
            taskArr.push(taskObj);
            addNewTask(taskObj);
            saveTaskToLocalSto();
            // todoList.style.display = 'flex';
        } else if(e.key == 'Enter' && input.value == ""){
            modalContainer.style.display = 'block';
            overLay.style.display = 'block';
        }
    })


    function addNewTask(taskObj) {

    
        let task = document.createElement('div')
        task.classList.add('task-items');
        task.setAttribute('data-id', taskObj.id)
    
        // Code to check a task
        let checkBtn = document.createElement('button');
        checkBtn.classList.add('checkBtn')
        checkBtn.innerHTML = `<span class="material-symbols-outlined" id="check"> circle </span> `;
        task.appendChild(checkBtn);
    
        checkBtn.addEventListener('click', function () {
            if (checkBtn.innerText.trim() === 'circle') {
                checkBtn.innerHTML = `<span class="material-symbols-outlined"> check_circle </span>`;
                taskText.style.textDecoration = 'line-through'; // Strike through task text
                taskObj.completed = true;
            } else {
                checkBtn.innerHTML = `<span class="material-symbols-outlined"> circle </span>`;
                taskText.style.textDecoration = 'none'; // Remove strike through when unchecked
                taskObj.completed = false;
            }
            saveTaskToLocalSto()
        });;

        
        // Code for input task
        let taskText = document.createElement('p');
        taskText.classList.add('tast-text');
        taskText.innerText = `${taskObj.text}`;
        task.appendChild(taskText);

        if (taskObj.completed) {
            taskText.style.textDecoration = 'line-through'; // Persist completed state
            checkBtn.innerHTML = `<span class="material-symbols-outlined">check_circle</span>`;
        }
    
        // Code to delete a task
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<span class="material-symbols-outlined"> delete_forever </span>`;
        deleteBtn.classList.add('deleteTask')
        task.appendChild(deleteBtn);
        
        deleteBtn.addEventListener('click', function (e) {
            // let taskElement = e.target;
            let taskId = taskObj.id;

            taskArr = taskArr.filter(task => task.id !== taskId);
            saveTaskToLocalSto();
            task.remove();

        saveTaskToLocalSto();
    });
    
    todoList.appendChild(task)
    input.value = "";

    }
    
    function saveTaskToLocalSto() {
        localStorage.setItem('Task', JSON.stringify(taskArr))
    }
    
    // Code for modal
    
    let modalContainer = document.querySelector('.modal-container');
    let overLay = document.querySelector('.modal-overlay')
    let close = document.querySelector('#close');
    
    close.addEventListener('click', function () {
        modalContainer.style.display = 'none';
        overLay.style.display = 'none';
    })
    
    
    
    
})