function registrarUser() {
    const $FORM = document.getElementById('Ej1');
    const $NAME = document.getElementById('nombre');
    const $SURNAME = document.getElementById('apellido');
    const $ PHONE = document.getElementById('phone');
    const $PASSWORD = document.getElementById('password');
    const $COMMENTS = document.getElementById('comentario');
    const $HOUR = document.getElementById('condiciones');

    function handleSubmit(e) {
        e.preventDefault();
        const name = $NAME.value;
        const surname = $SURNAME.value;
        const phone = $ PHONE.value;
        const password = $PASSWORD.value;
        const comentario = $COMMENTS.value;
        const hour = $HOUR.checked;
        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        } else {
            if (phone == false || isValidEmail(phone) == false) {
                alert('El phone debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un @ y un ".algo"');
            } else {
                if (comentario == false || isValidComent(comentario) == false) {
                    alert('El comentario tiene que tener un formato válido : \n-Debe estar relleno \n -Debe de tener un total de 50 caracteres');
                } else {
                    if (isValidPassword(password) == false) {
                        alert('El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito');
                    }
                }
            }
        }
        var regUsuario = {
            nombre: name,
            apellido: surname,
            phone: phone,
            comentario: comentario,
            password: password
        };
        console.log(regUsuario);
        var newUser = JSON.stringify(regUsuario);
        console.log(newUser);
    }

    function isValidName(name) {
        const validacion =
            /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }

    function isValidEmail(phone) {
        const validacion = /^(.+\@.+\..+)$/;
        return validacion.test(phone);
    }

    function isValidPassword(password) {
        const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
        return validacion.test(password);
    }

    function isValidComent(comentario) {
        const validacion = /^[\s\S]{1,50}$/;
        return validacion.test(comentario);
    }
    $FORM.addEventListener('submit', handleSubmit);
}