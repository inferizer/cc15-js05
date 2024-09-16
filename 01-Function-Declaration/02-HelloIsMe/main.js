function sayHelloUser(user){
    alert(`Hello  ${user}`);
}

let user = prompt('Username:') || '';
sayHelloUser(user);