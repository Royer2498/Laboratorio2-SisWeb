
function cambiarFondo(){
    document.getElementById('cuerpo').style.backgroundColor = "red";
}

function redireccionar(){
    window.location.assign("../../templates/createHero.html")
}

function prueba2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "http://localhost:8000/superhero/3", true);
    xhttp.send();
}