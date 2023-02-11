document.getElementById('submit-btn').addEventListener('click',function(){
   let uname = document.getElementById('username').value;
   let pass = document.getElementById('password').value;

   if (uname ==='m' && pass ==='12') {
     window.location.href='bank.html';
   } else {
    alert('Incorrect username or password');
   }
   
})