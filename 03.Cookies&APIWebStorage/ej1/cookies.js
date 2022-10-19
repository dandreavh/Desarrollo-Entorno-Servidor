/**
 * Crea un fichero que se llame “cookies. y que permita trabajar con las cookies de manera
que puedas crear, consultar, actualizar y borrar una cookie, operaciones CRUD.
NOTA:Consulta los métodos tratados en clase y recuerda que el método borrar no ha sido
creado aún así que deberás crearlo tú mismo.
 */

// CHECK IF NAVIGATOR HAS ENABLED COOKIES
function enabledCookie(){
    navigator.cookieEnabled == true ? alert("Cookies activas") : alert("Cookies desactivadas");
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

// CHECK COOKIE
function checkCookie() {
    let nombre = getCookie("nombre");
    let usuario = getCookie("usuario");
    if (nombre != "" && usuario != "") {
        alert("Hola, " + nombre + ".\nTu usuario es: " + usuario);
    } else {
        nombre = prompt("Indica tu nombre:", "");
        if (nombre != "" && nombre != null) {
            setCookie("nombre", nombre);
        }
        usuario = prompt("Indica tu usuario:", "");
        if (usuario != "" && usuario != null) {
            setCookie("usuario", usuario);
            //alert("Refresca la página");
        }
    }
}
checkCookie();

// DELETE COOKIE
function deleteCookie() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
confirm("quieres eliminar?") ? deleteCookie() : null;

function updateNombre(){
    nombre= prompt("Indica nuevamente nombre")
    if(nomber != "" && nombre != null){
        setCookie("nombre", nombre);
    }
}