let id = 1;

const marcas = [
    "BioSystems", 
    "Wiener", 
    "Radiometer", 
    "Mindray",
    "HAI Wiener", 
    "Abbott",
    "ARCHITECH",
    "Polychaco",
    "Biopack",
    "Sin Marca"
];

const listaProductos = document.getElementById("producto");

reactivos.forEach(function(reactivo){

    const opcion = document.createElement("option");

    opcion.value = reactivo;

    opcion.textContent = reactivo;

    listaProductos.appendChild(opcion);

});

const listaMarcas = document.getElementById("marca");

marcas.forEach(function(marca){

    const opcion = document.createElement("option");

    opcion.value = marca;

    opcion.textContent = marca;

    listaMarcas.appendChild(opcion);

});

const boton = document.getElementById("btnAgregar");

boton.addEventListener("click", agregarMovimiento);

function agregarMovimiento(){

    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
    const producto = document.getElementById("producto").value;
    const marca = document.getElementById("marca").value;
    const cantidad = document.getElementById("cantidad").value;

    const tabla = document.querySelector("#tablaMovimientos tbody");

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${id++}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${tipo}</td>
        <td>${categoria}</td>
        <td>${producto}</td>
        <td>${marca}</td>
        <td>${cantidad}</td>
    `;

    tabla.appendChild(fila);

}