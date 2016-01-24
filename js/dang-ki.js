// JavaScript Document
function kiemtra(){
  var name = document.getElementById('txtName').value;
  if(name == ""){
    document.getElementById('error').innerHTML = "Vui long nhap ten";
    return;
  }
  var nick = document.getElementById('nickName').value;
  if(nick == ""){
    document.getElementById('error').innerHTML = "Vui long nhap ten truy cap";
    return;
  }
  else if(nick.length <= 3 ){
    document.getElementById('error').innerHTML = "Ten truy cap >= 3 ";
    return;
  }
  var email = document.getElementbyId('txtEmail').value; 
  if(email == ""){
    document.getElementById('error').innerHTML = "Vui long nhap email";
    return;
  }
  var pass = document.getElementById('Password').value;
  if(pass == ""){
    document.getElementById('error').innerHTML = "Vui long nhap password";
    return;
  }
  var repass = document.getElementById('rePassword').value;
  if(repass == ""){
    document.getElementById('error').innerHTML = "Vui long nhap lại password";
    return;
  }
 
}