function abc(){
   var firstName = document.getElementById("fn").value;
   var lastName = document.getElementById("ln").value;
   var email = document.getElementById("email").value;
   var password= document.getElementById("password").value;
   var confirmPassword = document.getElementById("confirm-password").value;


   alert();
   if(firstName.length ===0 ){
    alert("firstname should contain atleast onecharacter")
   }
   if(lastName.length ===0){
    alert("firstname should contain atleast onecharacter")
   }
   if(email.length === 0 && email ==="@" ){
    alert('email should contain @ and length should be more than 1 char');
   }
   if(password !== confirmPassword){
    alert("password must be same")
   }
}