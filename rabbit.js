document.getElementById('registration').addEventListener('submit');
const username=document.getElementById('username').value;
const password=document.getElementById('password').value;
const confirmpassword=document.getElementById('confirmpassword').value;
const userid=document.getElementById('userid').value;
if(password!=confirmpassword)
{
    alert("access denied user not verified");
}
else
{
    alert("user verified");
}
document.getElementById('mybutton' ,addEventListener('click',function())) 
const messageElement=document.getElementById('message');
messageElement.text='button clicked';