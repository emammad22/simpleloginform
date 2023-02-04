const user = JSON.parse(localStorage.getItem('users'));

var userInfo = document.getElementById('user-info');

userInfo.innerHTML = `Hi, Mr.${user.fullName}`;