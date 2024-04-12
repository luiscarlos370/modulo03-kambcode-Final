const agregarProductoBtn = document.getElementById('agregarproductobtn');
const borrarTodobtn =document.getElementById('borrartodobtn');

const listaProductosUl = document.getElementById('listaproductosul');

const nombrePropuctotxt= document.getElementById('nombrepropuctotxt');
const cantidadPropuctotxt= document.getElementById('cantidadpropuctotxt');
const marcaproPuctotxt= document.getElementById('marcapropuctotxt');
const cantidadListaTxt= document.getElementById('cantidadlistatxt');

let listaProductos = [];

function limpiarCampos (){
    nombrePropuctotxt.value = "";
    cantidadPropuctotxt.value = "";
    marcaproPuctotxt.value = "";
}

function AgregarProductos (){
    listaProductos.push({
        nombre: nombrePropuctotxt.value,
        cantidad: cantidadPropuctotxt.value,
        marca: marcaproPuctotxt.value,
    });
    limpiarCampos();
    console.log(listaProductos);
}

function eliminarTodos() {
    const allProductosLi = listaProductosUl.querySelectorAll('li');
    allProductosLi.forEach(element => {
        element.remove();
    });
}

function construirProductoLista (){
    eliminarTodos();//esta función elimina 
    cantidadListaTxt.textContent = listaProductos.length;
    for (let i = 0; i < listaProductos.length; i++) {
        const producto = listaProductos[i];
        const productoLi = document.createElement('li'); //Prepara O pinta el documento HTML etiqueta vacia "LI"

        const nombreProductSpan = document.createElement('span'); //Prepara O pinta el documento HTML etiqueta vacia "SPAN"
        nombreProductSpan.textContent= `${producto.nombre}, ${producto.cantidad}, ${producto.marca}`; //Llenando el documento HTML etiqueta en el "SPAN"

        const eliminarProductoBtn = document.createElement('button'); //Prepara O pinta el documento HTML etiqueta vacia "BUTTON"
        eliminarProductoBtn.innerText='Eliminar';
        eliminarProductoBtn.style.marginLeft='5px';
        eliminarProductoBtn.addEventListener('click',()=>{
            const index = listaProductos.indexOf(producto);
            listaProductos.splice(index,1);
            cantidadListaTxt.textContent=listaProductos.length; //le resta uno al contador de produtos
            productoLi.remove();
            console.log(listaProductos);
        });
    
        productoLi.appendChild(nombreProductSpan); // incluyendo la etiqueta "Span" a la etiqueta "LI"
        productoLi.appendChild(eliminarProductoBtn); // incluyendo el boton "Button" a la etiqueta "LI"
    
        listaProductosUl.appendChild(productoLi); // incluyendo los "LI" a la etiqueta "UL"
    }
 
}

agregarProductoBtn.addEventListener('click', () => {
    AgregarProductos();
    construirProductoLista();
});

borrarTodobtn.addEventListener('click', () => {
    listaProductos=[];
    cantidadListaTxt.textContent=listaProductos.length;
    eliminarTodos();
});