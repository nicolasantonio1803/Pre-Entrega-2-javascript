let productos = [
   { id:2, nombre: "Nike Cortez running", categoria: "championes", unidades: 6, precio:800},
   { id:3, nombre: "Nike Air Fore", categoria: "championes", unidades: 6, precio:700},
   { id:4, nombre: "Air Jordan 1 Mid ", categoria: "championes", unidades: 6, precio:1200},
   { id:5, nombre: "Nike Air Max Alpha ", categoria: "championes", unidades: 6, precio:900},
   { id:6, nombre: "Nike Blezer Mid", categoria: "championes", unidades: 6, precio:1000},

 ]

 let carrito = []

let mensaje = "Bienvenido a la Tienda\n1 - Lista de Productos  \n2 - Agregar Productos al Carrito  \n3 - Lista de Carrito \n4 - Total a Pagar  \n5 - Para Finalizar Compra\n0 - Salir "


let opcion

do {
   opcion = Number(prompt(mensaje))

   if (opcion === 1) {
     alert(listar(productos))
   } else if (opcion === 2) {
      let id = Number(prompt("Seleccione un id del Producto que quiere Comprar\n" + listar(productos)))
      let productobuscado = productos.find(prod => prod.id === id)
      let posicionproductoencarrito = carrito.findIndex(prod => prod.id === productobuscado.id)
      if (posicionproductoencarrito === -1) {
         carrito.push({
            id: productobuscado.id ,
            nombre: productobuscado.nombre,
            preciounitario: productobuscado.precio,
            unidades:1,
            subtotal: productobuscado.precio
         })
      } else{
         carrito[posicionproductoencarrito].unidades++
         carrito[posicionproductoencarrito].subtotal = carrito[posicionproductoencarrito].preciounitario * carrito[posicionproductoencarrito].unidades
      } 
     console.log(carrito)
   } if (opcion === 3) {
      alert(listar(carrito))

   } else if (opcion === 4) {
      let total = 0
      carrito.forEach((producto) => {
        total += producto.subtotal
      })
      alert("El total a pagar es: $" + total)
 
   } else if (opcion === 5) {
      let confirmacion = confirm("¿Desea finalizar la compra?")
      if (confirmacion) {
        carrito = [];
        alert("¡Gracias por su compra! Su pedido ha sido procesado.")
      }
    }
   
}   while (opcion !== 0)
 alert("Muchas gracias por su visita")

function listar(arraylistar) {
  let listado = "Id - Nombre\n"
  arraylistar.forEach(element => {
   listado = listado + element.id + "-" + element.nombre + "\n"
  })
  return listado
}






























