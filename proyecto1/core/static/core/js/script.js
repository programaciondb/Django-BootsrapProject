var indicadoresObtenidos;
var valorUF;
var valorPropiedad;
var conexion = new XMLHttpRequest();
var url = 'https://mindicador.cl/api';

function obtenerUFdeAPI() {

    callOtherDomain();

    function callOtherDomain() {
        if (conexion) {
            conexion.open('GET', url, true);
            conexion.onreadystatechange = handler;
            conexion.send();
        }
        else {
            indicadoresObtenidos = "Lo siento, hubo un problema al cargar el valor de la UF actualizado";
            var valorUF = document.getElementById("valorUFP")
            valorUF.innerHTML = indicadoresObtenidos
        }

    }
}
function handler(evtXHR) {
    if (conexion.readyState == 4) {
        if (conexion.status == 200) {
            indicadoresObtenidos = JSON.parse(conexion.responseText);
            valorUF = parseInt(indicadoresObtenidos.uf.valor);
            document.getElementById("valorUFP").innerHTML = "El valor de la UF actualizado al dia de hoy es: $" + valorUF.toLocaleString();

        }
        else {
            alert("Lo siento, hubo un problema al cargar el valor de la UF actualizado. Error: " + conexion.readyState);
            valorUF = 27440;
            document.getElementById("valorUFP").innerHTML = "No se pudo obtener el valor actualizado de la UF, se utiliza valor referencial de $27440.";
        }

    }
    else {
        dump("Error al obtener valor UF" + conexion.readyState);
    }
}


function calcularValorPropiedad() {
    obtenerUFdeAPI();
    do {
        var cantidadUF = window.prompt("Ingrese cantidad de UF de la propiedad a calcular. Solo números y sin puntos ni comas", "1500");
        if (cantidadUF == null) {
            cantidadUF = 0
        }
        cantidadUF = parseInt(cantidadUF, 10);
    } while (isNaN(cantidadUF));
    valorPropiedad = parseInt(valorUF * cantidadUF);
    document.getElementById("valorPropiedad").innerHTML = "El valor de la propiedad de " + cantidadUF.toLocaleString() + " UF es: $" + valorPropiedad.toLocaleString();
}





  



