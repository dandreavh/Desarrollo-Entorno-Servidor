/**
 * Modifica el formulario del ejercicio Form2 anterior de forma que cuando se rellene el
formulario correctamente y se guarden los datos en un objeto y obtengan su json, también
guarde en una cookie los siguientes datos de registro, durante 1 día:
● usuario = nombre + apellido
● email = email
 */
// CREATE COOKIE
function setCookie(cookieName, cookieValue, exDay){
    let d =  new Date();
    d.setTime(d.getTime()+ exDay *24*60*60*1000);
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";"+expires+";";
}