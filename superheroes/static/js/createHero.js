
function crearHeroeParaInsertar(){
    let nombre = document.getElementById('nombre').value;
    let poder = document.getElementById('poder').value;
    let casa = document.getElementById('casa').value;
    let ciudad = document.getElementById('ciudad').value;
    let biografia = document.getElementById('biografia').value;
    let heroe = {
        "name" : nombre,
        "power" : poder,
        "house" : casa,
        "city" : ciudad,
        "bio":biografia
    }
    return heroe;
}

function guardarCambios(){
    var heroe = crearHeroeParaInsertar();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            redireccionarAlInicio();
        }
    };
    xhttp.open("POST",'http://localhost:8000/superheroes/', true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(heroe));
}

function redireccionarAlInicio(){
    document.location.href = "http://localhost:8000/superheroes";
}
