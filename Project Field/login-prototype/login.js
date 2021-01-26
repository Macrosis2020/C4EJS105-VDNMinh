function redirectToLogin() {
    document.getElementById("register-form").hidden = true;
    document.getElementById("login-form").hidden = false;
}
function redirectToRegister() {
    document.getElementById("register-form").hidden = false;
    document.getElementById("login-form").hidden = true;
}
document.getElementById("redirect-to-login").addEventListener('click', redirectToLogin);
document.getElementById("redirect-to-register").addEventListener('click', redirectToRegister);
//--------------------------------------------------------------------------------------------
//LOGIN CODE
function logInFunction() {
    registeredStatus = false;
    let userIndex;
    for (i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].username == document.getElementById('input-username').value && userDatabase[i].password == document.getElementById('input-password').value) {
            registeredStatus = true;
            userIndex = i;
            console.log(userDatabase[i]);
        }
    }
    if (registeredStatus == true) {
        console.log(userDatabase[i]);
        activeUser = userDatabase[i];
        alert('Login Successfully!');
    } else {
        alert('Username or password not valid');
        document.getElementById('input-username').value = '';
        document.getElementById('input-password').value = '';
    }
}
//--------------------------------------------------------------------------------------------
//REGISTER CODE
function registerFunction() {
    let dataOverlap = false;
    for (i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].username == document.getElementById('input-register-name').value) {
            alert('Sorry, this username is already taken');
            document.getElementById('input-register-name').value = '';
            dataOverlap = true;
            break;
        } else if (userDatabase[i].email == document.getElementById('input-register-email').value) {
            alert('Sorry, this email is already registered');
            document.getElementById('input-register-email').value = '';
            dataOverlap = true;
            break;
        }
    }
    if (document.getElementById('input-register-password').value == '' || document.getElementById('input-register-password').value == '' ||
        document.getElementById('input-register-email').value == '' || document.getElementById('input-register-name').value == '') {
        alert('Please fill in all fields');
    } else if (document.getElementById('input-register-password').value == document.getElementById('input-register-confirm-password').value) {
        let newUser = {
            username: `${document.getElementById('input-register-name').value}`,
            password: `${document.getElementById('input-register-password').value}`,
            role: 'user',
        }
        console.log(newUser);
        userDatabase.push(newUser);
        console.log(userDatabase);
        alert('Registered Successfully!');
        redirectToLogin();
    } else {
        alert('Password & confirmed password must match');
        document.getElementById('input-register-password').value = '';
        document.getElementById('input-register-confirm-password').value = '';
    }
}