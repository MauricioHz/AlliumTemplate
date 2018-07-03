var formulario = document.getElementById('datos');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(formulario);

    var dato = new FormData(formulario);

    var direccion


    console.log(dato);
    console.log("direccion: " + dato.get('direccion'));
});