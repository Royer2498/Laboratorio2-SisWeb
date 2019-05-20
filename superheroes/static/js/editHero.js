

function obtenerIdDelHeroe() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    return data.id;
}

function obtenerHeroeAEditar(){
    var idDelHeroe = obtenerIdDelHeroe();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        mostrarDelHeroeActual(JSON.parse(this.responseText));
    }
    };
    xhttp.open("GET", "http://localhost:8000/superhero/" + idDelHeroe, true);
    xhttp.send();
}


function mostrarDelHeroeActual(heroe){
    console.log(heroe);
    document.getElementById('nombre').value = heroe.name;
    document.getElementById('poder').value = heroe.power;
    document.getElementById('casa').value = heroe.house;
    document.getElementById('ciudad').value = heroe.city;
    document.getElementById('biografia').value = heroe.bio;
}

function crearHeroeParaInsertar(){
    let id = obtenerIdDelHeroe();
    let nombre = document.getElementById('nombre').value;
    let poder = document.getElementById('poder').value;
    let casa = document.getElementById('casa').value;
    let ciudad = document.getElementById('ciudad').value;
    let biografia = document.getElementById('biografia').value;
    let heroe = {
        "id" : id,
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
    console.log(heroe);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            redireccionarAlInicio();
        }
    };
    xhttp.open("PUT",'http://localhost:8000/superhero/' + heroe.id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(heroe));
}

function redireccionarAlInicio(){
    document.location.href = "http://localhost:8000/superheroes";
}




