export const productos = [
{
    id: 1,
    nombre: "Resident Evil 2 Remake" ,
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
    nombre: "Placa de video Nvidia GeForce GT 1030" ,
    precio: 51700,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_823560-MLU72820801963_112023-O.webp" ,
    categoria: "componentes"
},
{
    id: 5,
    nombre: "Call of duty modern warfare 3" ,
    precio: 33000,
    imagen: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-REVEAL-FULL-TOUT.jpg" ,
    categoria: "juegos"
},
{
    id: 6,
    nombre: "Consola Xbox one 1tb" ,
    precio: 77000,
    imagen: "https://http2.mlstatic.com/D_Q_NP_834546-MLA50832788403_072022-O.webp" ,
    categoria: "consolas"
},
{
    id: 7,
    nombre: "Cubierta de joystick para mando de PS4" ,
    precio: 4500,
    imagen: "https://ae01.alicdn.com/kf/H6e092c9688874596bf74e8fd4f3a30c9j/Cubierta-de-Joystick-para-mando-de-PS4-extensores-de-empu-aduras-de-pulgar-accesorios-para-Playstation.jpg" ,
    categoria: "accesorios"
},
{
    id: 8,
    nombre: "Procesador gamer AMD ryzen 7" ,
    precio: 44000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_894487-MLA53145808015_012023-O.webp" ,
    categoria: "componentes"
},
{
    id: 9,
    nombre: "The elder scrolls V: Skyrim special edition" ,
    precio: 39000,
    imagen: "https://store-images.s-microsoft.com/image/apps.64810.68326442227858632.03782b23-7f26-4a8e-ba87-177bdf2c3c90.fdefe49f-270c-44e5-b660-6d7764b37f0f" ,
    categoria: "juegos"
},
{
    id: 10,
    nombre: "Nintendo switch 32gb" ,
    precio: 65000,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_883371-MLA32731749246_112019-O.webp" ,
    categoria: "consolas"
},
{
    id: 11,
    nombre: "Cargador para joystick PS4" ,
    precio: 8700,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_799819-MLA44367659204_122020-O.webp" ,
    categoria: "accesorios"
},
{
    id: 12,
    nombre: "Enfriamiento para pc gamer" ,
    precio: 21700,
    imagen: "https://mcegamer.com/wp-content/uploads/2021/03/LIQTECH-II-TR4-280-1-450x450.jpg" ,
    categoria: "componentes"
}
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));