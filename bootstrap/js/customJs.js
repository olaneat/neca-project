let submitBtn = document.getElementById('submit')
let loginBtn =  document.getElementById('submit')
function signUp(params) {
  let fullName = document.getElementById('full_name').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let pswd = document.getElementById('password').value
  localStorage.setItem('full_name', fullName)
  localStorage.setItem('username', username)
  localStorage.setItem('pswd', pswd)
  localStorage.setItem('email', email)
}

function Auth() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  let usrname = localStorage.getItem('username')
  let pswd = localStorage.getItem('password')
  if (usrname === username){
    if (pswd === password ) {
      alert('Congrats', + localStorage.getItem('fullname'))
    }else{
      alert('invalid  login detail')
    }
  }else{
    alert('user not found')
  }
}

submitBtn.addEventListener('click', signUp)
loginBtn.addEventListener('click', Auth)