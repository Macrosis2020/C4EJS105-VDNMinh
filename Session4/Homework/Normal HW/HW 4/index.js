//4.1
// let dictDB = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     ui: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
//     ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// }
// alert('You\'ve opened the most budget dictionary ever made');
// while (true) {
// let usrcmd = prompt('Type in a keyword:');
// usrcmd = usrcmd.toLowerCase();
// if (usrcmd == false) {
//     break;
// } else if (dictDB[usrcmd] == undefined) {
//     alert(`We could not find your word '${usrcmd}'`);
// } else {
//     alert(`${usrcmd}\n${dictDB[usrcmd]}`);
// }
// }
//4.2
let dictDB = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    ui: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
    ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
}
alert('You\'ve opened the most budget dictionary ever made');
while (true) {
    let usrcmd = prompt('Type in a keyword:');
    usrcmd = usrcmd.toLowerCase();
    if (usrcmd == false) {
        break;
    } else if (dictDB[usrcmd] == undefined) {
        let newDef = prompt(`We could not find your word '${usrcmd}', enter your definition below:`)
        if (newDef == false) {
            alert('No description was provided, database update failed');
        } else {
            dictDB[usrcmd] = newDef;
            alert('Database updated');
        }
    } else {
        alert(`${usrcmd}\n${dictDB[usrcmd]}`);
    }
}