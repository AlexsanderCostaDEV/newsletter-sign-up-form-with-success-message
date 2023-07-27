function prev() {
    window.location.href = "/index.html";
}

function subscribe() {
    const input = document.querySelector('.input');
    const error = document.querySelector('.error');

    if (!validateEmail(input.value)){
        input.style.borderColor = 'hsl(4, 100%, 67%)';
        input.style.color = 'hsl(4, 100%, 67%)';
        input.style.backgroundColor = 'hsla(4, 100%, 67%, 0.15)';
        error.style.display = 'block';
    } else {
        document.querySelector('form').action = '/thanks.html';
        input.style.borderColor = 'hsl(231, 7%, 60%)';
        input.style.color = 'hsl(234, 29%, 20%)';
        input.style.backgroundColor = 'white';
        error.style.display = 'none';
    }

}
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}