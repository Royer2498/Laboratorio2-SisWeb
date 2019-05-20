
function redireccionarAEditarHeroe(heroe){
    document.location.href = "http://localhost:8000/editHero?id="+encodeURIComponent(heroe.id);
}

function redireccionarACrearHeroe(){
    document.location.href = "http://localhost:8000/createHero";
}

function redireccionarAlInicio(){
    document.location.href = "http://localhost:8000/superheroes";
}

function eliminarHeroe(heroe){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 204) {
        redireccionarAlInicio();
    }
    };
    xhttp.open("DELETE", "http://localhost:8000/superhero/"+heroe.id, true);
    xhttp.send();
}
