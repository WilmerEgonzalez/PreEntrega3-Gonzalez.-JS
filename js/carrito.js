import { productosDisponibles } from "./inicio.js"

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    dibujarCarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listaCarrito = document.getElementById("items")
const footCarrito = document.getElementById("totales")

export const comprarProducto = (idProducto) => {
    
    const producto = productosDisponibles.find((producto) => producto.id === idProducto)

    const { nombre, precio, imagen, id } = producto

    const productoCarrito = carrito.find((producto) => producto.id === idProducto)

    if(productoCarrito === undefined){
        const nuevoProductoCarrito = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        }

        carrito.push(nuevoProductoCarrito)

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }else{
        const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto)

        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))


}

const dibujarCarrito = () => {

    carrito.forEach(producto => {

        const { imagen, nombre, cantidad, precio, id } = producto

        let body = document.createElement("tr")

        body.className = "producto__carrito"

        body.innerHTML = `
        <th><img id="fotoProductoCarrito" src="${imagen}" class="card-img-top"</th>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio/cantidad}</td>
        <td>${precio}</td>
        <td>
        <button id="+${id}" class="btn btn-success">+</button>
        <button id="-${id}" class="btn btn-danger">-</button>
        </td>
        `

        listaCarrito.append(body)

        const btnAgregar = document.getElementById(`+${id}`)
        const btnRestar = document.getElementById(`-${id}`)

        btnAgregar.addEventListener("click", () => console.log(id))
        btnRestar.addEventListener("click", () => console.log(id))
    });
}

