let loginBtn =  document.getElementById('login')


function Auth() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value
  let usrname = localStorage.getItem('username')
  let pswd = localStorage.getItem('password')
  if (usrname === username){
    if (pswd === password ) {
      alert(`Welcome ${localStorage.getItem('full_name')}`)
    }else{
      alert('invalid  login detail')
    }
  }else{
    alert('user not found')
  }
}

loginBtn.addEventListener('click', Auth)