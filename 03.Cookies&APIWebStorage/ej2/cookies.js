/**
 * Modifica el formulario del ejercicio Form1 anterior de la siguiente manera:
● Cada vez que el usuario trate de enviar el formulario y haya algún error, una variable
contador (almacenada en una cookie) se incrementará.
● El resultado del número de intentos se reflejará en un campo de texto que se
encontrará al final del formulario.
● Si el usuario sale del programa y vuelve a entrar, el campo de texto mostrará el
número almacenado en la cookie.
● Junto al campo de texto habrá un botón que, al pulsarlo, permitirá reiniciar el valor
de la cookie a 0.
 */

// CHECK COOKIE
function checkCookie() {
    let contErrores = getCookie("contErr");
    (contErrores != "" && contErrores != null) ? (setCookie("contErr", ++contErrores)) : (setCookie("contErr", 1));
    document.getElementById("contador").innerHTML = "Nº intentos: " + getCookie("contErr");
}

// CREATE COOKIE
function setCookie(cookieName, cookieValue){
    document.cookie = cookieName + "=" + cookieValue + ";";
}

// CONSULT COOKIE
function getCookie(cookieName){
    let nameEQ = cookieName + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(nameEQ) == 0){ 
            return c.substring(nameEQ.length,c.length);
        }
    }
   return "";
}

// RESET COOKIE VALUE
function resetearCookie(){
    setCookie("contErr", -1);
    document.getElementById("contador").innerHTML = "Nº intentos: " + getCookie("contErr");
}