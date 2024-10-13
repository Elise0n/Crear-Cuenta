document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = '';
    
    let hasError = false;
    
    if (!validateEmail(email)) {
        addError('El correo electrónico no es válido');
        document.getElementById('email').classList.add('error');
        hasError = true;
    } else {
        document.getElementById('email').classList.remove('error');
    }
    
    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
    addError('La contraseña debe contener al menos un número, una letra mayúscula, una letra minúscula y un carácter especial');
    hasError = true;
    }else {
        document.getElementById('password').classList.remove('error');
    }
    
    if (password !== confirmPassword) {
        addError('Las contraseñas no coinciden');
        document.getElementById('confirm-password').classList.add('error');
        hasError = true;
    } else {
        document.getElementById('confirm-password').classList.remove('error');
    }
    
    if (!hasError) {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('registration-form').reset();
    document.getElementById('error-list').innerHTML = '';
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function addError(message) {
    const errorList = document.getElementById('error-list');
    const errorItem = document.createElement('li');
    errorItem.textContent = message;
    errorList.appendChild(errorItem);
}
