// let date = new Date;

// // console.log(date.getDate());
// console.log(date.getDay());
// // console.log(date.getFullYear());

// let weekdays = [`Sunday` , `Monday`, `Tuesday`, `Wednesday`,`Thursday`, `Friday`, `Saturday`];
// console.log(weekdays[date.getDay()]);

// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June', 
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// console.log(months[date.getMonth()]);
// console.log(date.getMonth());


// Function to get the current date and day
function displayDateAndDay() {
    const dateElement = document.getElementById('date-day');
    const currentDate = new Date();  // Get the current date

    // Array of weekday names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Array of month names
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the current day name, month name, and date
    const currentDayName = weekdays[currentDate.getDay()];  // Get day of the week
    const currentMonthName = months[currentDate.getMonth()];  // Get month name
    const currentDay = currentDate.getDate();  // Get day of the month

    // Format the date (e.g., Thursday, October 3)
    const formattedDate = `${currentDayName}, ${currentMonthName} ${currentDay}`;

    // Insert the formatted date into the page
    dateElement.textContent = formattedDate;
}

// Call the function to display date and day
displayDateAndDay();


