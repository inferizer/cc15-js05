function login (user,password) {
    if (user == 'admin' && password == 'P@ssw0rd')
        alert('login success')
    else alert('login not success')
}

let user = prompt('Username') || '';
let password = prompt('Password') || '';
login (user,password);