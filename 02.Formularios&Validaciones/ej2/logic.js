/*
Valida el contenido introducido en todos campos según las siguientes especificaciones:
 - Nombre (Mínimo 1 nombre, Máximo 2 nombres)
 - Apellidos (Mínimo 1 apellido, Máximo 2 apellidos)
 - Email (xxxxxx@yyyyy.zzz)
 - WEB (http://www.xxxx.yyy)
Validar también que no puedan dejarse en blanco.
NOTA: puedes utilizar tanto validaciones HTML como lo aprendido en Javascript.
En caso de que se informe correctamente guardar la información en un objeto y obtener el
JSON correspondiente, en caso contrario mostrar un mensaje de error.
*/
const $FORM = document.getElementById("Ej2");
const $NAME = document.getElementById("name");
const $SURNAME = document.getElementById("surname");
const $EMAIL = document.getElementById("email");
const $WEB = document.getElementById("web");

function handleSubmit(e) {
  e.preventDefault();
  const name = $NAME.value;
  const surname = $SURNAME.value;
  const email = $EMAIL.value;
  const web = $WEB.value;

    if (name == false || isValidText(name) == false) {
      alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras"
      );
    } else {
      if (surname == false || isValidText(surname) == false) {
        alert(
          "El o los apellidos debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras"
        );
      } else {
        if (email == false || isValidEmail(email) == false) {
          alert(
            "El email debe ser un valor válido : \n -Debe estar relleno \n -Debe seguir este formato: xxxxxx@yyyyy.zzz)"
          );
        } else {
          if (web == false || isValidWeb(web) == false) {
            alert(
              "La web personal debe ser un valor válido : \n -Debe estar relleno \n -Debe tener este formato: http://www.xxxx.yyy"
            );
          } else {
            alert("Datos presentados con éxito");
            let regUser = {
              name: name,
              surname: surname,
              email: email,
              web: web
            };
            console.log(regUser);
            let newUser = JSON.stringify(regUser);
            console.log(newUser);
            document.getElementById("newUser").innerHTML = newUser;
          }
        }
      }
    }
}
function isValidText(text) {
  const validacion =
  /^(([A-Za-záéíóúÁÉÍÓÚ]{2,})|([A-Za-záéíóúÁÉÍÓÚ]{2,}\s[A-Za-záéíóúÁÉÍÓÚ]{2,}))$/;
  return validacion.test(text);
}

function isValidEmail(email) {
  const validacion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validacion.test(email);
}

function isValidWeb(web) {
  const validacion = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  return validacion.test(web);
}
$FORM.addEventListener("submit", handleSubmit);