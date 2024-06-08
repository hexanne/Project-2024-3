document.querySelector("#general").addEventListener('click',()=>{
document.querySelector('.general').checked = true;
document.querySelector('.support').checked = false;
document.querySelector('#general').style.background = "hsl(148, 38%, 91%)";
document.querySelector('#support').style.background = "hsl(0, 0%, 100%)";
});
document.querySelector("#support").addEventListener('click',()=>{
document.querySelector('.general').checked = false;
document.querySelector('.support').checked = true;
document.querySelector('#general').style.background = "hsl(0, 0%, 100%)";
document.querySelector('#support').style.background = "hsl(148, 38%, 91%)";
});
document.querySelector('#agree').addEventListener('click',()=>{
if(document.querySelector('#box').checked != true){
document.querySelector('#box').checked = true;
}else{
document.querySelector('#box').checked = false;
}});

/* THE HARDEST PART 
-IT IS TIME CONSUMING
*/
document.querySelector('.submitBtn').addEventListener('click',()=>{
if (document.querySelector('#fname').value =="") {
document.querySelector('#errorFname').innerHTML="This field is required";
document.querySelector('#fname').style.borderColor = "hsl(0, 66%, 54%)";
}else{
document.querySelector('#errorFname').innerHTML="";
document.querySelector('#fname').style.borderColor = "hsl(169, 82%, 27%)";
document.querySelector('.success').style.display = "none";
}
if (document.querySelector('#lname').value =="") {
document.querySelector('#errorLname').innerHTML="This field is required";
document.querySelector('#lname').style.borderColor = "hsl(0, 66%, 54%)";
}else{
document.querySelector('#errorLname').innerHTML="";
document.querySelector('#lname').style.borderColor = "hsl(169, 82%, 27%)";
document.querySelector('.success').style.display = "none";
}
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
if(document.querySelector('#mail').value.match(mailformat)) {
document.querySelector('#errorMail').innerHTML="";
document.querySelector('#mail').style.borderColor = "hsl(169, 82%, 27%)";
}else{
document.querySelector('#errorMail').innerHTML="Please enter a valid email address";
document.querySelector('#mail').style.borderColor = "hsl(0, 66%, 54%)";
document.querySelector('.success').style.display = "none";
}
if(document.querySelector('#box').checked != true){
document.querySelector('#errorAgree').innerHTML = "To submit this form, please consent to being contacted";
}else{
document.querySelector('#errorAgree').innerHTML = "";
document.querySelector('.success').style.display = "none";
}
if (document.querySelector('.general').checked == false && document.querySelector('.support').checked== false) {
document.querySelector('#errorQuery').innerHTML="Please select a query type";
}else{
document.querySelector('#errorQuery').innerHTML="";
document.querySelector('.success').style.display = "none";
}
if (document.querySelector('#message').value =="") {
document.querySelector('#errorMessage').innerHTML="This field is required";
document.querySelector('#message').style.borderColor = "hsl(0, 66%, 54%)";
}else{
document.querySelector('#errorMessage').innerHTML="";
document.querySelector('#message').style.borderColor = "hsl(169, 82%, 27%)";
document.querySelector('.success').style.display = "none";
}
if(document.querySelector('#box').checked == true){
document.querySelector('.success').style.display = "block";
}else{
document.querySelector('.success').style.display = "none";
}

});