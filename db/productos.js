export const productos = [
{
    id: 1,
    nombre: "Resident Evil 2 Remake Standard Edition Capcom PS4 Físico" ,
    precio: 35500,
    imagen: "https://i.pinimg.com/originals/e4/65/99/e46599f46774154fe547ecf334639f4d.jpg" ,
    categoria: "juegos"
},
{
    id: 2,
    nombre: "Consola Playstation Ps4 1tb" ,
    precio: 76260,
    imagen: "https://www.cordobadigital.net/wp-content/uploads/2023/11/PS4-1tb.png" ,
    categoria: "consolas" 
},
{
    id: 3,
    nombre: "Soportes Pared Ps4" ,
    precio: 6600,
    imagen: "https://tauroparts.com/wp-content/uploads/2021/05/Slim-600x600.jpg" ,
    categoria: "accesorios"
},
{
    id: 4,
    nombre: "Placa de video Nvidia Gigabyte GeForce 10 Series GT 1030" ,
    precio: 51700,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_823560-MLU72820801963_112023-O.webp" ,
    categoria: "componentes"
}
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));