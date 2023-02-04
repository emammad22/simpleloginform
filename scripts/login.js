var username = document.getElementById('username');
var password = document.getElementById('password');
var submit = document.getElementById('submit');

var loading = document.getElementById('loading');
var form = document.getElementById('loginform');

// event listeners
submit.addEventListener('click', loginUser);



function loginUser(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'userinfo.json', true);

    loading.style.display = "block";
    form.style.display = "none";

    setTimeout(() => {
        xhr.onload = function () {
            loading.style.display = 'none';
            form.style.display = "block";
            let users = JSON.parse(this.responseText);
            console.log(users.length);
            for (let i = 0; i < users.length; i++) {
                if (username.value === users[i].name && password.value === users[i].password) {
                    // console.log('successfull');
                    localStorage.setItem('users', JSON.stringify(users[i]));
                    window.open('user.html', '_self');
                    break;
                } else {
                    // console.log('unsuccessful');
                    username.classList.add('is-invalid');
                    password.classList.add('is-invalid');
                    continue;
                }
            }
        }
        xhr.send();
    }, 2000)

}
