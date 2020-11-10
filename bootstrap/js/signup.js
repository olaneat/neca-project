let submitBtn = document.getElementById('submit')
function signUp() {
  let fullName = document.getElementById('full_name').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let pswd = document.getElementById('password').value
  localStorage.setItem('full_name', fullName);
  localStorage.setItem('username', username);
  localStorage.setItem('password', pswd);
  localStorage.setItem('email', email);
  document.getElementById('alert').style.display = 'inline'
  document.getElementById('alert').innerText = 'Registration complete!!!'
  console.log(localStorage.getItem(username))
  console.log(localStorage.getItem(pswd))

}


submitBtn.addEventListener('click', signUp)