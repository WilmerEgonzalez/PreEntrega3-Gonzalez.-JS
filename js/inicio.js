import {productos} from "../db/productos"



const userlogin = document.getElementById("userlogin")
const divProductos = document.getElementById("productos")

let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";

    productos.forEach((producto) => {
        
   

    let card = document.createElement("div")
    card.className = "producto";
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${producto.imagen} alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.categoria}</p>
    <p class="card-text">$${producto.precio}</p>
    <button id="comprar${producto.id}" class="btn btn-primary">Comprar</buttom>
  </div>
</div>
`;
    divProductos.appendChild(card);

    const btnComprar = document.getElementById(`comprar${producto.id}`)
    btnComprar.addEventListener("click", () => console.log("funciona"))
});

};