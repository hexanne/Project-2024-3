document.querySelector("#subscribe").addEventListener('click',()=>{
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; if(document.querySelector('.input').value.match(mailformat)) {
document.querySelector('.sign-up-form').style.display = "none";
document.querySelector('.subscribed').style.display = "block";
document.querySelector('.mail').innerHTML = document.querySelector('.input').value;
return document.querySelector('.error').innerHTML = ""
}else{
document.querySelector('.input').style.border = "2px solid hsl(4, 100%, 67%)";
document.querySelector('.input').style.color = "hsl(4, 100%, 67%)";
document.querySelector('.input').style.background = "hsl(10, 100%, 95%)";
return document.querySelector('.error').innerHTML = "Valid email required"
}});

