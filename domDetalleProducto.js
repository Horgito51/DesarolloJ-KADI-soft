// =========================================
// LISTA DE PRODUCTOS (sin cambios)
// =========================================
const products = [
    {
        id: 1,
        tittle: "Camiseta FC Barcelona 2014/2015",
        descripcion: "Camiseta local Nike Qatar Airways, poliéster Dri-FIT",
        precio: 40,
        stock: 7,
        enStock: true,
        enlace: '/camisetaBarca.html',
        imagen: "img/P1.png",
        marca: "Nike",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["S", "M", "L", "XL"]
            },
            equipacion: {
                label: "Equipacion",
                valores: ["Local", "Visitante", "tercera"]
            }
        },
        detalles: [
            { label: "Tipo de Tejido", valor: "Poliéster Dri-FIT" },
            { label: "Origen", valor: "España/FC Barcelona" }
        ]
    },
    {
        id: 2,
        tittle: "Balón de Fútbol Trionda Pro",
        descripcion: "Réplica Mundial, cuero sintético PU de alta calidad con cámara de látex butílico",
        precio: 34.99,
        stock: 7,
        enStock: true,
        enlace: '/balon.html',
        imagen: "img/balon.png",
        marca: "Adidas style",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["3: 58-60cm", "4: 63-66cm", "5: 68-70cm"]
            }
        },
        detalles: [
            { label: "Tipo", valor: "Balón de fútbol térmico cosido" },
            { label: "Material", valor: "Exterior: Cuero sintético PU | Capa intermedia: 4 capas de espuma EVA | Cámara: Látex butílico" }
        ]
    },
    {
        id: 3,
        tittle: "Cuerda de Saltar",
        descripcion: "Mejora tu agilidad y resistencia con esta cuerda de alta velocidad",
        precio: 16.99,
        stock: 7,
        enStock: true,
        enlace: '/cuerdassaltar.html'
        ,
        imagen: "img/cuerdasaltar.png",
        marca: "FitGear",
        opciones: {
            largo: {
                label: "Largo",
                valores: ["2,8m", "1,5m", "1,95m"]
            }
        },
        detalles: [
            { label: "Material", valor: "Cable de acero recubierto con PVC" },
            { label: "Longitud", valor: "Ajustable hasta 3 metros" }
        ]
    },
    {
        id: 4,
        tittle: "Gorra Deportiva Performance Plus",
        descripcion: "Gorra tipo béisbol con visera curva, 90% poliéster técnico, 10% elastano, protección UV",
        precio: 14.99,
        stock: 7,
        enStock: true,
        imagen: "img/gorrita.png",
        marca: "ActiveWear Pro",
        enlace: '/gorra.html'
        ,
        opciones: {
            talla: {
                label: "Talla",
                valores: ["Única Ajustable (56-62 cm)"]
            }
        },
        detalles: [
            { label: "Género", valor: "Unisex" },
            { label: "Material", valor: "90% Poliéster técnico, 10% Elastano" },
            { label: "Tipo", valor: "Gorra tipo béisbol con visera curva" }
        ]
    },
    {
        id: 5,
        tittle: "Leggins Deportivos High Waist",
        descripcion: "Compresión y control, 75% Nylon de alta resistencia, 25% Spandex, gramaje 240 GSM",
        precio: 32.99,
        stock: 7,
        enStock: true,
        enlace: '/legginsdeportivos.html',
        imagen: "img/legginsdeportivos.png",
        marca: "FitFlow Activewear",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["XS", "S", "M", "L"]
            },
            color: {
                label: "Color",
                valores: ["Negro", "Azul", "Rosa", "Gris"]
            }
        },
        detalles: [
            { label: "Material", valor: "75% Nylon de alta resistencia, 25% Spandex (Elastano)" },
            { label: "Gramaje", valor: "240 GSM (grosor medio-alto)" },
            { label: "Altura", valor: "Tobilleras, cuarto (quarter), media caña, altas" }
        ]
    },
    {
        id: 6,
        tittle: "Liga Elástica de Resistencia",
        descripcion: "100% TPE termoplástico elastómero, libre de látex, antideslizante no tóxico",
        precio: 9.99,
        stock: 7,
        enStock: true,
        enlace: '/ligaselastivas.html',

        imagen: "img/ligaselasticas.png",
        marca: "FlexBand Pro",
        opciones: {
            resistencia: {
                label: "Nivel de Resistencia",
                valores: ["Ligera", "Media", "Fuerte", "Extra Fuerte"]
            }
        },
        detalles: [
            { label: "Material", valor: "100% TPE (Termoplástico Elastómero)" },
            { label: "Características", valor: "Libre de látex (hipoalergénico), Antideslizante, No tóxico" }
        ]
    },
    {
        id: 7,
        tittle: "Mancuernas Hexagonales con Neopreno",
        descripcion: "Núcleo de hierro fundido sólido con recubrimiento de neopreno, mango de acero cromado",
        precio: 45,
        stock: 7,
        enStock: true,
        enlace: '/mancuernas.html',

        imagen: "img/mancuernas.png",
        marca: "IronGrip Pro",
        opciones: {
            peso: {
                label: "Precio",
                valores: ["5 kg - $45", "10 kg - $75", "15 kg - $95", "20 kg - $120"]
            }
        },
        detalles: [
            { label: "Material", valor: "Núcleo: Hierro fundido sólido | Recubrimiento: Neopreno de alta calidad | Mango: Acero cromado texturizado" },
            { label: "Tipo", valor: "Mancuernas hexagonales fijas" },
            { label: "Género", valor: "Unisex" }
        ]
    },
    {
        id: 8,
        tittle: "Medias Deportivas Antideslizantes Pro",
        descripcion: "85% algodón, 12% poliéster, 3% elastano, para running, fútbol, basketball, gym",
        precio: 9.99,
        stock: 7,
        enStock: true,
        enlace: '/mediasdeportivas.html',

        imagen: "img/mediasDepor.png",
        marca: "ProSport",
        opciones: {
            talla: {
                label: "Talla",
                valores: ["Tobilleras", "Cuarto (quarter)", "Media caña", "Altas"]
            },
            color: {
                label: "Color",
                valores: ["Blanco", "Negro", "Gris", "Azul"]
            }
        },
        detalles: [
            { label: "Material", valor: "85% algodón, 12% poliéster, 3% elastano" },
            { label: "Deporte", valor: "Running, fútbol, basketball, gym, trekking, etc." },
            { label: "Peso", valor: "Ligero" }
        ]
    },
    {
        id: 9,
        tittle: "Mochila Adventure Time",
        descripcion: "Diseño collage de personajes, poliéster/tel resistente, bolsillo frontal con cierre",
        precio: 27,
        stock: 7,
        enStock: true,
        enlace: '/Mochila.html',

        imagen: "img/mochi.png",
        marca: "Adventure Gear",
        detalles: [
            { label: "Material", valor: "Poliéster/tel resistente" },
            { label: "Características", valor: "Bolsillo frontal con cierre, Compartimento principal amplio" },
            { label: "Peso", valor: "Ligero" }
        ]
    },
    {
        id: 10,
        tittle: "Botella Térmica de Acero Inoxidable 500ml",
        descripcion: "Mantiene frío/calor 24hrs, acero inoxidable de alta calidad, origen Ecuador/Quito",
        precio: 15,
        stock: 7,
        enStock: true,
        enlace: '/termo.html',

        imagen: "img/termo.png",
        marca: "ThermoFlask",
        detalles: [
            { label: "Material", valor: "Acero inoxidable de alta calidad" },
            { label: "Capacidad", valor: "500ml" },
            { label: "Origen", valor: "Ecuador/Quito" }
        ]
    }
];



const CART_KEY = "cart";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Construye un ID único por variante (id + opciones seleccionadas)
function buildVariantId(producto, selected) {
  const parts = [String(producto.id)];
  Object.keys(selected).sort().forEach(k => parts.push(`${k}:${selected[k]}`));
  return parts.join("|"); // ej: "1|equipacion:Local|talla:M"
}
 
// Lee opciones seleccionadas (según tus ids de select: talla, equipacion, etc.)
function getSelectedOptions(producto) {
  const out = {};
  const opts = producto.opciones || {};
  Object.keys(opts).forEach(k => {
    const el = document.getElementById(k); // tus selects usan id='talla', 'equipacion', ...
    out[k] = el ? el.value : "";
  });
  return out;
}

function allOptionsSelected(producto, selected) {
  if (!producto.opciones) return true;
  return Object.keys(producto.opciones).every(k => selected[k] && selected[k] !== "");
}

// Añade al carrito respetando stock y sumando si ya existe misma variante
function addToCart(producto, qty, selected) {
  let cart = loadCart();
  const variantId = buildVariantId(producto, selected);

  const found = cart.find(it => it.variantId === variantId);
  if (found) {
    const maxStock = Number(producto.stock ?? 999999);
    found.qty = Math.min(maxStock, (found.qty || 1) + qty);
  } else {
    cart.push({
      id: producto.id,
      variantId,
      name: producto.tittle,
      price: Number(producto.precio) || 0,
      img: producto.imagen || "",
      enlace: producto.enlace || "",
      selectedOptions: selected,
      qty: qty
    });
  }
  saveCart(cart);
}


function generarHTMLDetalleProducto(productos) {
    let opciones = ""; // guardara el html del selector
    if (productos.opciones) { // verifico si el producgto tiene opciones
        Object.keys(productos.opciones).forEach(keys => {// saco las llaves de cada opcion
            let opcion = productos.opciones[keys]; // guardo el valor de cada llave
            let inicio = "<option value=''>Seleccione</option>";  // creo el rimer option
            opcion.valores.forEach(valor => {
                inicio += `<option value='${valor}'>${valor}</option>`;
            });
            opciones += `<label for='${keys}'><b>${opcion.label}</b></label>` +
                `<select class='form-select g3select' name='${keys}' id='${keys}'>` +
                inicio +
                "</select>" +
                "<br>";
        });
    }
    let detallesHTML = "";
    if (productos.detalles) {
        productos.detalles.forEach(detalle => {
            detallesHTML += `<p><b>${detalle.label}:</b> ${detalle.valor}</p>`;
        });
    }

    return "<div id='alerta' style='display:none;' ></div>" + "<div class='row'>" +
        "<div class='col-sm-12 col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center'>" +
        `<img src='${productos.imagen}' width='420px' height='420px' alt='${productos.tittle}'>` +
        "</div>" +
        "<div class=' col-sm-12 col-md-4 col-lg-4'>" +
        `<h1>${productos.tittle}</h1>` +
        `<p><b>Precio:</b> <big>$${productos.precio}</big></p>` +
        `<p><b>Marca:</b> ${productos.marca}</p>` +
        "<label for='cantidad'><b>Cantidad:</b></label>" +
        `<input type='number' id='cantidad' name='cantidad' min='1' max='${productos.stock}' value='1'>` +
        "<br><br>" +
        opciones +
        detallesHTML +
        `<button id='botonCarrito' data-product-id='${productos.id}' class='btn btn-primary' type='button'>Añadir Carrito</button>` +
        "</div>" +
        "<div class='col-sm-12 col-md-2 col-lg-2'>" +
        "</div>" +
        "</div>" +
        "<h1 class='otrosProductos'>Otros productos</h1>";
}


const recomendados = document.getElementById("productosRecomendados");

if (recomendados) {
    recomendados.innerHTML = "";
    for (const i of products) {
        const recomendados = document.getElementById("productosRecomendados");
        recomendados.innerHTML += `
        <div>
            <div class="card  shadow-sm productosFila " onclick="window.open('${i.enlace}')">
            <img src=${i.imagen}  class="card-img-top imgrecomendaciones" alt=${i.descripcion}>
            <div class="card-body">
                <h5 class="card-title">${i.tittle}</h5>
                <p class="card-text">${i.descripcion}</p>
                <p class="card-title">${i.precio}$</p>
            </div>
            </div>
        </div>
        `;
    }
}


function crearProducto() {
    let camisetaBarcelona = document.getElementById("idCamisetaBarcelonaFC");
    if (camisetaBarcelona) {
        camisetaBarcelona.innerHTML = generarHTMLDetalleProducto(products[0]);
    }
    let balonFutbolMundial2026 = document.getElementById("idBalonDelMundial2026");
    if (balonFutbolMundial2026) {
        balonFutbolMundial2026.innerHTML = generarHTMLDetalleProducto(products[1]);
    }
    let cuerdasDeSaltar = document.getElementById("idCuerdaDeSaltar");
    if (cuerdasDeSaltar) {
        cuerdasDeSaltar.innerHTML = generarHTMLDetalleProducto(products[2]);
    } let gorraDeportiva = document.getElementById("idGorraDeportiva");
    if (gorraDeportiva) {
        gorraDeportiva.innerHTML = generarHTMLDetalleProducto(products[3]);
    } let legginsDeportivos = document.getElementById("idLeginsDeportivos");
    if (legginsDeportivos) {
        legginsDeportivos.innerHTML = generarHTMLDetalleProducto(products[4]);
    } let ligasElasticas = document.getElementById("idLigasElasticas");
    if (ligasElasticas) {
        ligasElasticas.innerHTML = generarHTMLDetalleProducto(products[5]);
    } let mancuernas = document.getElementById("idMancuernas");
    if (mancuernas) {
        mancuernas.innerHTML = generarHTMLDetalleProducto(products[6]);
    } let mediasDeportivas = document.getElementById("idMediasDeportivas");
    if (mediasDeportivas) {
        mediasDeportivas.innerHTML = generarHTMLDetalleProducto(products[7]);
    } let mochilaHoraDeAventura = document.getElementById("idMochilaHoraDeAventura");
    if (mochilaHoraDeAventura) {
        mochilaHoraDeAventura.innerHTML = generarHTMLDetalleProducto(products[8]);
    } let termo = document.getElementById("idTermo");
    if (termo) {
        termo.innerHTML = generarHTMLDetalleProducto(products[9]);
    }
}

/*
function añadircarrito() {
    let carrito = document.getElementById("alerta");

    carrito.innerHTML = '<div class="alert alert-success" role="alert">' +
        '<h4 class="alert-heading">Producto añadido</h4>' +
        '<p>El producto se ha añadido correctamente a tu carrito.</p>' +
        '</div>';

    carrito.style.display = "block";

    setTimeout(function () {
        carrito.style.display = "none";
    }, 3000)
}*/


$(document).ready(function () {
    $("#botonCarrito").off("click").on("click", function () {
        // 1) Identificar producto
        const id = Number(this.dataset.productId);
        const producto = products.find(p => Number(p.id) === id);
        if (!producto) return;

        // 2) Cantidad
        const qtyInput = document.getElementById("cantidad");
        let qty = parseInt(qtyInput ? qtyInput.value : "1", 10);
        if (!Number.isFinite(qty) || qty < 1) qty = 1;

        // Respetar stock
        const max = Number(producto.stock ?? 1);
        if (qty > max) {
            qty = max;
            if (qtyInput) qtyInput.value = String(qty);
        }

        // 3) Opciones seleccionadas
        const selected = getSelectedOptions(producto);
        if (!allOptionsSelected(producto, selected)) {
            if (window.Swal?.fire) {
                Swal.fire({ title: "Selecciona las opciones requeridas", icon: "warning" });
            } else {
                alert("Selecciona las opciones requeridas.");
            }
            return;
        }

        // 4) Añadir al carrito (localStorage)
        addToCart(producto, qty, selected);

        // 5) Feedback (tu Swal)
        if (window.Swal?.fire) {
            Swal.fire({
                title: "Añadido al carrito",
                text: producto.tittle,
                icon: "success",
                draggable: true,
                timer: 1300,
                showConfirmButton: false
            });
        } else {
            alert("Producto añadido al carrito");
        }
    });
});

crearProducto();


//----------------------------------------------------------------------------------------
/*<div id="alerta" class="alert alert-success" role="alert" style="display: none;">
<h4 class="alert-heading">Producto añadido</h4>
<p>El producto se ha añadido correctamente a tu carrito.</p>
</div>

    <script>
    function añadircarrito() {
        let carrito = document.getElementById("alerta");

        carrito.style.display = "block";
        setTimeout(function () {
        carrito.style.display = "none";
        }, 3000)
    }*/
