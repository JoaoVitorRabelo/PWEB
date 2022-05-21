function aberta() {
    document.getElementById("janela").src = "minhafoto2.jpg";
    document.getElementById("titulo").innerHTML = "Você abriu a Janela";
}
function fechada(){
    document.getElementById("janela").src = "minhafoto.jpg";
    document.getElementById("titulo").innerHTML = "Você fechou a Janela";
}
function quebrada(){
    document.getElementById("janela").src = "minhafoto3.jpg";
    document.getElementById("titulo").innerHTML = "Você quebrou a Janela";
}