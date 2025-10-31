const productos=document.getElementById('products');

productos.classList.add("flex_container");

const listaProductos=[
  {
    imagen:'img/P1.png',
    titulo:'Camiseta Barcelona',
    descripcion:'Siente la pasión del fútbol con la camiseta oficial del FC Barcelona',
    enlace:'/camisetaBarca.html'
  },
  {
    imagen: 'img/cuerdasaltar.png',
    titulo: 'Cuerda de saltar',
    descripcion: 'Mejora tu agilidad y resistencia con la cuerda de saltar de alta velocidad.',
    enlace: '/cuerdassaltar.html'
  },
  {
    imagen: 'img/gorrita.png',
    titulo: 'Gorra deportiva',
    descripcion: 'Protege tu cabeza con estilo mientras entrenas con nuestra gorra deportiva.',
    enlace: '/gorra.html'
  },
  {
    imagen: 'img/legginsdeportivos.png',
    titulo: 'Leggings Deportivos',
    descripcion: 'Confort y estilo en cada movimiento con nuestros leggins deportivos.',
    enlace: '/legginsdeportivos.html'
  },
  {
    imagen: 'img/ligaselasticas.png',
    titulo: 'Ligas Elásticas',
    descripcion: 'Maximiza tu entrenamiento con nuestras resistentes ligas elásticas.',
    enlace: '/ligaselastivas.html'
  },
  {
    imagen: 'img/mancuernas.png',
    titulo: 'Mancuernas',
    descripcion: 'Fortalece tu cuerpo con nuestras mancuernas de alta calidad.',
    enlace: '/mancuernas.html'
  },
  {
    imagen: 'img/mediasDepor.png',
    titulo: 'Medias deportivas',
    descripcion: 'Comodidad y soporte en cada paso con nuestras medias deportivas.',
    enlace: '/mediasdeportivas.html'
  },
  {
    imagen: 'img/mochi.png',
    titulo: 'Mochila',
    descripcion: 'Lleva todo lo que necesitas con nuestra mochila deportiva de alto rendimiento.',
    enlace: '/Mochila.html'
  },
  {
    imagen: 'img/termo.png',
    titulo: 'Termo',
    descripcion: 'Mantén tu bebida fresca y lista para el entrenamiento con nuestro termo deportivo.',
    enlace: '/termo.html'
  }
];
for(const i of listaProductos) {
  const producto = document.createElement('div');
  producto.classList.add('card');
  producto.innerHTML = `
    <img src="${i.imagen}" class="card-img-top imgproduct" alt="${i.titulo}">
      <div class="card-body">
        <h5 class="card-title">${i.titulo}</h5>
        <p class="card-text">${i.descripcion}</p>
        <a href="#" class="btn btn-custom" onclick="window.open('${i.enlace}')">Más información</a>
      </div>
  `;
  productos.appendChild(producto);

}


