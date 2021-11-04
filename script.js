var form = document.getElementById('form');
var email = document.getElementById('email');
var message = document.getElementById('message')
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var btn = document.getElementById('btn');


function checkInput(){
    emailValue = email.value;
    console.log(emailValue)
    if (String(emailValue).match(pattern)){
        form.submit();
        message.innerHTML = "";
    }
    else
    {
        message.innerHTML = "Please enter a valid email address";
        message.style.color = "hsl(0, 100%, 63%)";
    }
}

btn.addEventListener('click', e => {
    e.preventDefault();


    checkInput();
})