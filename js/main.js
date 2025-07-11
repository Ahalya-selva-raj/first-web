function greet(event) {
    event.preventDefault();
    document.getElementById("result").innerHTML = `Successfully submitted`
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const message = document.getElementById("result");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            message.style.color = 'green';
            message.innerHTML = 'Login Successful';
        } else {
            message.style.color = 'red';
            message.innerHTML = 'Invalid credentials'
        }
    });
})