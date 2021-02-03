if (activeUserObj[0].role == 'admin') {
    document.getElementById('admin-panel-btn').style.display = 'block';
} else {
    document.getElementById('admin-panel-btn').style.display = 'none';
}
function openAdminPanel() {
    document.getElementById("admin-panel-display").style.display = 'block';
}
function closeAdminPanel() {
    document.getElementById("admin-panel-display").style.display = 'none';
    document.getElementById('managed-content-field').style.display = 'none';
}
function displayPostTable() {
    document.getElementById('managed-content-field').style.display = 'block';
    document.getElementById('manage-table-content').innerHTML = `<tr>
    <th>ID</th>
    <th>Post Name</th>
    <th>Actions</th>
    </tr>`;
    for (i = 0; i < post.length; i++) {
        document.getElementById('manage-table-content').insertAdjacentHTML('beforeend',
            `
        <tr>
            <td>${i + 1}</td>
            <td>${post[i].name}</td>
            <td>
                <table style="margin: auto;">
                    <tr>
                        <td class='action-btn' onclick="displayContentByIndex(${i})">R</td>
                        <td class='action-btn' onclick="displayUpdateForm(${i})">U</td>
                        <td class='action-btn' onclick="deleteContentByIndex(${i})">D</td>
                    </tr>
                </table>
            </td>
        </tr>
        `)
    }
    document.getElementById('create-post-btn').style.display = 'block';
}
function displayUserTable() {
    document.getElementById('managed-content-field').style.display = 'block';
    document.getElementById('manage-table-content').innerHTML = `<tr>
    <th>ID</th>
    <th>Username</th>
    <th>Password</th>
    <th>Email</th>
    <th>Permissions</th>
    <th>Actions</th>
    </tr>`;
    for (i = 0; i < userDatabase.length; i++) {
        document.getElementById('manage-table-content').insertAdjacentHTML('beforeend',
            `
        <tr>
            <td>${i + 1}</td>
            <td>${userDatabase[i].username}</td>
            <td>${userDatabase[i].password}</td>
            <td>${userDatabase[i].email}</td>
            <td>${userDatabase[i].role}</td>
            <td>
                <table style="margin: auto;">
                    <tr>
                        <td class='action-btn' onclick="deleteUser(${i})">Delete</td>
                    </tr>
                </table>
            </td>
        </tr>
        `)
    }
    document.getElementById('create-post-btn').style.display = 'none';
}
function deleteContentByIndex(i) {
    post.splice(i, 1);
    resetPostIndex();
    displayPostTable();
}
function deleteUser(i) {
    console.log(userDatabase[i]);
    if (userDatabase[i].role == 'admin') {
        alert('You don\'t have permission to delete an admin')
    } else {
        userDatabase.splice(i, 1);
    }
    displayUserTable();
}