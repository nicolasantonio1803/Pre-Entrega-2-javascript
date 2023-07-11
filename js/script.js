let productos = [
   { id: 2, nombre: "Nike Cortez running", categoria: "championes", unidades: 6, precio: 6000 },
   { id: 3, nombre: "Nike Air Fore", categoria: "championes", unidades: 6, precio: 5800 },
   { id: 4, nombre: "Air Jordan 1 Mid", categoria: "championes", unidades: 6, precio: 5000 },
   { id: 5, nombre: "Nike Air Max Alpha", categoria: "championes", unidades: 6, precio: 5000 }
 ];
 
 let carritoJSON = JSON.parse(localStorage.getItem("carrito"));
 let carrito = carritoJSON ? carritoJSON : [];
 
 let contenedor = document.getElementById("productos");
 creartarjetas(productos, contenedor);
 renderizarCarrito(carrito);
 
 function creartarjetas(array, contenedor) {
   contenedor.innerHTML = "";
   array.forEach((producto) => {
     let tarjeta = document.createElement("div");
     tarjeta.className = "contenedorProducto";
 
     tarjeta.innerHTML = `
       <h3>${producto.nombre}</h3>
       <img class="img" src="img/${producto.rutaImagen}">
       <div id=${producto.id} class="button">
         <div class="button-wrapper">
           <div class="text">$${producto.precio}</div>
         </div>
       </div>`;
 
     contenedor.appendChild(tarjeta);
     let botonCarrito = document.getElementById(producto.id);
     botonCarrito.addEventListener("click", agregarCarrito);
   });
 }
 
 let buscador = document.getElementById("buscador");
 buscador.addEventListener("input", filtrar);
 
 function filtrar() {
   let arrayFiltrado = productos.filter(
     (producto) =>
       producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) ||
       producto.categoria.toLowerCase().includes(buscador.value.toLowerCase())
   );
   creartarjetas(arrayFiltrado, contenedor);
 }
 
 