let timeSheetData = [
    {
        project: 'Learn Front-end',
        task: 'Learn HTML',
        time: 6
    },
    {
        project: 'Learn Front-end',
        task: 'Learn CSS',
        time: 8
    },
    {
        project: 'Learn Front-end',
        task: 'Learn JS Variables & Data Types',
        time: 6
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        time: 6
    },
];
console.log(timeSheetData);
//Read Table by DOM
console.log(document.getElementById("prj-table"));
{
    for (i = 0; i < timeSheetData.length; i++) {
        document.getElementById("prj-table-b").insertAdjacentHTML("beforeend",
            `<tr class="row" id=${i}>
                <td>${timeSheetData[i].project}</td>
                <td>${timeSheetData[i].task}</td>
                <td>${timeSheetData[i].time}</td>
                <td class="action-col">
                <button class="action-btn" onclick="deleteRow(this.parentElement.parentElement.id)">X</button>
                <button class="action-btn" onclick="updatePrep(this.parentElement.parentElement.id)">U</button>
                </td>
        </tr>`)
    }
}
//Add items function
let rowIDTracker = document.getElementsByClassName("row");
function addRow() {
    var newRow = {
        project: document.getElementById("add-project").value,
        task: document.getElementById("add-task").value,
        time: document.getElementById("add-time").value,
    }
    timeSheetData.push(newRow);
    document.getElementById("prj-table-b").insertAdjacentHTML("beforeend",
        `<tr class="row" id=' '>
                <td>${timeSheetData[timeSheetData.length - 1].project}</td>
                <td>${timeSheetData[timeSheetData.length - 1].task}</td>
                <td>${timeSheetData[timeSheetData.length - 1].time}</td>
                <td class="action-col">
                <button class="action-btn" onclick="deleteRow(this.parentElement.parentElement.id)">X</button>
                <button class="action-btn" onclick="updatePrep(this.parentElement.parentElement.id)">U</button>
                </td>
        </tr>`)
    console.log(timeSheetData);
    for (i = 0; i < rowIDTracker.length; i++) {
        rowIDTracker[i].id = i;
    }
}
//Delete button
{
    function deleteRow(x) {
        timeSheetData.splice(x, 1);
        document.getElementById(x).remove();
        for (i = 0; i < rowIDTracker.length; i++) {
            rowIDTracker[i].id = i;
        }
    }
}
//Clear button
function clearInput() {
    document.getElementById("add-project").value = '';
    document.getElementById("add-task").value = '';
    document.getElementById("add-time").value = '';
}
//Update button
{
    function updatePrep(x) {
        document.getElementById("add-update-btn").textContent = 'Update';
        updatingRowID = x;
    }
}
{
    function updateRow() {
        timeSheetData[updatingRowID] = {
            project: document.getElementById("add-project").value,
            task: document.getElementById("add-task").value,
            time: document.getElementById("add-time").value,
        }
        document.getElementById(updatingRowID).innerHTML = `
        <td>${timeSheetData[updatingRowID].project}</td>
        <td>${timeSheetData[updatingRowID].task}</td>
        <td>${timeSheetData[updatingRowID].time}</td>
        <td class="action-col">
        <button class="action-btn" onclick="deleteRow(this.parentElement.parentElement.id)">X</button>
        <button class="action-btn" onclick="updatePrep(this.parentElement.parentElement.id)">U</button>
        </td>`;
        document.getElementById("add-update-btn").textContent = 'Add';
    }
}
function addUpdateRow() {
    if (document.getElementById("add-update-btn").textContent == 'Add') {
        addRow();
    } else {
        updateRow();
    }
}