$(document).ready(function () {
  const productos = $("#products");
  const paginacion = $("#paginacion");
  productos.addClass("flex_container");
  const proxpagina = 10;
  let paginaActual = 1;


  const listaProductos = [
    {
      imagen: 'img/P1.png',
      titulo: 'Camiseta Barcelona',
      descripcion: 'Siente la pasión del fútbol con la camiseta oficial del FC Barcelona',
      enlace: 'camisetaBarca.html'
    },
    {
      imagen: 'img/balon.png',
      titulo: 'Balón de Fútbol Trionda',
      descripcion: 'Diseñado para rendimiento y durabilidad, perfecta para los verdaderos amantes del fútbol. ¡Llévalo hoy!',
      enlace: 'balon.html'
    },
    {
      imagen: 'img/cuerdasaltar.png',
      titulo: 'Cuerda de saltar',
      descripcion: 'Mejora tu agilidad y resistencia con la cuerda de saltar de alta velocidad.',
      enlace: 'cuerdassaltar.html'
    },
    {
      imagen: 'img/gorrita.png',
      titulo: 'Gorra deportiva',
      descripcion: 'Protege tu cabeza con estilo mientras entrenas con nuestra gorra deportiva.',
      enlace: 'gorra.html'
    },
    {
      imagen: 'img/legginsdeportivos.png',
      titulo: 'Leggings Deportivos',
      descripcion: 'Confort y estilo en cada movimiento con nuestros leggins deportivos.',
      enlace: 'legginsdeportivos.html'
    },
    {
      imagen: 'img/ligaselasticas.png',
      titulo: 'Ligas Elásticas',
      descripcion: 'Maximiza tu entrenamiento con nuestras resistentes ligas elásticas.',
      enlace: 'ligaselastivas.html'
    },
    {
      imagen: 'img/mancuernas.png',
      titulo: 'Mancuernas',
      descripcion: 'Fortalece tu cuerpo con nuestras mancuernas de alta calidad.',
      enlace: 'mancuernas.html'
    },
    {
      imagen: 'img/mediasDepor.png',
      titulo: 'Medias deportivas',
      descripcion: 'Comodidad y soporte en cada paso con nuestras medias deportivas.',
      enlace: 'mediasdeportivas.html'
    },
    {
      imagen: 'img/mochi.png',
      titulo: 'Mochila',
      descripcion: 'Lleva todo lo que necesitas con nuestra mochila deportiva de alto rendimiento.',
      enlace: 'Mochila.html'
    },
    {
      imagen: 'img/termo.png',
      titulo: 'Termo',
      descripcion: 'Mantén tu bebida fresca y lista para el entrenamiento con nuestro termo deportivo.',
      enlace: 'termo.html'
    },
    {
      imagen: 'img/P1.png',
      titulo: 'Camiseta Barcelona',
      descripcion: 'Siente la pasión del fútbol con la camiseta oficial del FC Barcelona',
      enlace: 'camisetaBarca.html'
    },
    {
      imagen: 'img/balon.png',
      titulo: 'Balón de Fútbol Trionda',
      descripcion: 'Diseñado para rendimiento y durabilidad, perfecta para los verdaderos amantes del fútbol. ¡Llévalo hoy!',
      enlace: 'balon.html'
    },
    {
      imagen: 'img/cuerdasaltar.png',
      titulo: 'Cuerda de saltar',
      descripcion: 'Mejora tu agilidad y resistencia con la cuerda de saltar de alta velocidad.',
      enlace: 'cuerdassaltar.html'
    },
    {
      imagen: 'img/gorrita.png',
      titulo: 'Gorra deportiva',
      descripcion: 'Protege tu cabeza con estilo mientras entrenas con nuestra gorra deportiva.',
      enlace: 'gorra.html'
    },
    {
      imagen: 'img/legginsdeportivos.png',
      titulo: 'Leggings Deportivos',
      descripcion: 'Confort y estilo en cada movimiento con nuestros leggins deportivos.',
      enlace: 'legginsdeportivos.html'
    }

  ];

  const totalPaginas = Math.ceil(listaProductos.length / proxpagina);

  function mostrarProductosPagina(pagina) {
    productos.empty();
    let inicio = (pagina - 1) * proxpagina;
    let fin = inicio + proxpagina;

    //Caso de que el fin se pase del total de productos
    if (fin > listaProductos.length) {
      fin = listaProductos.length;
    }

    for (let i = inicio; i < fin; i++) {
      const producto = $("<div>").addClass('card ');
      //Añado el atributo data-url para cada producto y poder irme al detalle
      producto.attr('data-url', listaProductos[i].enlace);
      producto.html(`
        <img src="${listaProductos[i].imagen}" class="card-img-top imgproduct" alt="${listaProductos[i].titulo}">
          <div class="card-body">
            <h5 class="card-title">${listaProductos[i].titulo}</h5>
            <p class="card-text">${listaProductos[i].descripcion}</p>
            <a href="#" class="btn btn-custom" onclick="window.open('${listaProductos[i].enlace}')">Comprar ahora</a>
          </div>
          `);
      producto.click(function () {
        //obtener la url del atributo data-url
        let url = $(this).data('url');
        //redirigir a la página de detalle
        window.location.href = url;
      });
      productos.append(producto);
    }
  }



  function actualizarPaginacion() {
    paginacion.empty();
    let paginacionHtml = '<nav><ul class="pagination justify-content-center">';
    paginacionHtml += `
      <li class="page-item ${paginaActual === 1 ? 'disabled' : ''}">
        <a class="page-link" href="#" data-pagina="${paginaActual - 1}">
          <span>&laquo;</span>
        </a>
      </li>
    `;
    for (let i = 1; i <= totalPaginas; i++) {
      paginacionHtml += `
        <li class="page-item ${i === paginaActual ? 'active' : ''}">
          <a class="page-link" href="#" data-pagina="${i}">${i}</a>
        </li>
      `;
    }

    // Botón "Siguiente"
    paginacionHtml += `
      <li class="page-item ${paginaActual === totalPaginas ? 'disabled' : ''}">
        <a class="page-link" href="#" data-pagina="${paginaActual + 1}">
          <span>&raquo;</span>
        </a>
      </li>
    `;

    paginacionHtml += '</ul></nav>';
    paginacion.html(paginacionHtml);

  }

  paginacion.on('click', 'a.page-link', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $li = $this.parent();
    if ($li.hasClass('disabled')) return;

    const nuevaPagina = parseInt($this.data('pagina'));
    paginaActual = nuevaPagina;

    mostrarProductosPagina(paginaActual);
    actualizarPaginacion();
  });

  mostrarProductosPagina(paginaActual);
  actualizarPaginacion();



});