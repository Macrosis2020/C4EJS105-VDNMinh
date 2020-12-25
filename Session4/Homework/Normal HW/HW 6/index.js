//6.1
console.log('These are your tasks for your front-end developer career training');
let task1 = {
    name: 'HTML',
    completion: false,
}
let task2 = {
    name: 'CSS',
    completion: false,
}
let task3 = {
    name: 'Basics of JS',
    completion: false,
}
let task4 = {
    name: 'NPM',
    completion: false,
}
let task5 = {
    name: 'Git',
    completion: false,
}
let tasks = [task1, task2, task3, task4, task5];
{
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].completion == false) {
            console.log(`[ ] ${i + 1}. ${tasks[i].name}`);
        } else {
            console.log(`[x] ${i + 1}. ${tasks[i].name}`);
        }
    }
    console.log(' ');
}
//the rest
console.log(' ');
while (true) {
    let usrcmd = prompt('Enter your command (New, Delete, Update, Complete)').toLowerCase();
    if (usrcmd == 'new') {
        let newTaskName = prompt('Insert your new task:');
        let newTask = {
            name: newTaskName,
            completion: false,
        }
        tasks.push(newTask);
        {
            for (i = 0; i < tasks.length; i++) {
                if (tasks[i].completion == false) {
                    console.log(`[ ] ${i + 1}. ${tasks[i].name}`);
                } else {
                    console.log(`[x] ${i + 1}. ${tasks[i].name}`);
                }
            }
            console.log(' ');
        }
    } else if (usrcmd == 'update') {
        let updatePos = Number(prompt('Enter the position of the task')) - 1;
        let taskUpdate = prompt('Insert the new task title');
        tasks[updatePos].name = taskUpdate;
        {
            for (i = 0; i < tasks.length; i++) {
                if (tasks[i].completion == false) {
                    console.log(`[ ] ${i + 1}. ${tasks[i].name}`);
                } else {
                    console.log(`[x] ${i + 1}. ${tasks[i].name}`);
                }
            }
            console.log(' ');
        }
    } else if (usrcmd == 'complete') {
        let completePos = Number(prompt('Enter the position of the task')) - 1;
        tasks[completePos].completion = true;
        {
            for (i = 0; i < tasks.length; i++) {
                if (tasks[i].completion == false) {
                    console.log(`[ ] ${i + 1}. ${tasks[i].name}`);
                } else {
                    console.log(`[x] ${i + 1}. ${tasks[i].name}`);
                }
            }
            console.log(' ');
        }
    } else if (usrcmd == 'delete') {
        let deletePos = Number(prompt('Enter the position of the task')) - 1;
        tasks.splice(deletePos, 1);
        {
            for (i = 0; i < tasks.length; i++) {
                if (tasks[i].completion == false) {
                    console.log(`[ ] ${i + 1}. ${tasks[i].name}`);
                } else {
                    console.log(`[x] ${i + 1}. ${tasks[i].name}`);
                }
            }
            console.log(' ');
        }
    } else if (usrcmd == false) {
        break;
    } else {
        alert('Invalid command');
    }
}