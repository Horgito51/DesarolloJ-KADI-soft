// =========================================
// LISTA DE PRODUCTOS
// =========================================
const products = [
    {
        id: 1,
        titulo: "Camiseta FC Barcelona 2014/2015",
        descripcion: "Camiseta local Nike Qatar Airways, poliéster Dri-FIT",
        precio: 40,
        stock: 7,
        enStock: true,
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
        titulo: "Balón de Fútbol Trionda Pro",
        descripcion: "Réplica Mundial, cuero sintético PU de alta calidad con cámara de látex butílico",
        precio: 34.99,
        stock: 7,
        enStock: true,
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
        titulo: "Cuerda de Saltar",
        descripcion: "Mejora tu agilidad y resistencia con esta cuerda de alta velocidad",
        precio: 16.99,
        stock: 7,
        enStock: true,
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
        titulo: "Gorra Deportiva Performance Plus",
        descripcion: "Gorra tipo béisbol con visera curva, 90% poliéster técnico, 10% elastano, protección UV",
        precio: 14.99,
        stock: 7,
        enStock: true,
        imagen: "img/gorrita.png",
        marca: "ActiveWear Pro",
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
        titulo: "Leggins Deportivos High Waist",
        descripcion: "Compresión y control, 75% Nylon de alta resistencia, 25% Spandex, gramaje 240 GSM",
        precio: 32.99,
        stock: 7,
        enStock: true,
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
        titulo: "Liga Elástica de Resistencia",
        descripcion: "100% TPE termoplástico elastómero, libre de látex, antideslizante no tóxico",
        precio: 9.99,
        stock: 7,
        enStock: true,
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
        titulo: "Mancuernas Hexagonales con Neopreno",
        descripcion: "Núcleo de hierro fundido sólido con recubrimiento de neopreno, mango de acero cromado",
        precio: 45,
        stock: 7,
        enStock: true,
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
        titulo: "Medias Deportivas Antideslizantes Pro",
        descripcion: "85% algodón, 12% poliéster, 3% elastano, para running, fútbol, basketball, gym",
        precio: 9.99,
        stock: 7,
        enStock: true,
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
        titulo: "Mochila Adventure Time",
        descripcion: "Diseño collage de personajes, poliéster/tel resistente, bolsillo frontal con cierre",
        precio: 27,
        stock: 7,
        enStock: true,
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
        titulo: "Botella Térmica de Acero Inoxidable 500ml",
        descripcion: "Mantiene frío/calor 24hrs, acero inoxidable de alta calidad, origen Ecuador/Quito",
        precio: 15,
        stock: 7,
        enStock: true,
        imagen: "img/termo.png",
        marca: "ThermoFlask",
        detalles: [
            { label: "Material", valor: "Acero inoxidable de alta calidad" },
            { label: "Capacidad", valor: "500ml" },
            { label: "Origen", valor: "Ecuador/Quito" }
        ]
    }
];

// =========================================
// HELPERS DE CARRITO
// =========================================
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

function buildVariantId(producto, selected) {
    const parts = [String(producto.id)];
    Object.keys(selected).sort().forEach(k => parts.push(`${k}:${selected[k]}`));
    return parts.join("|");
}

function getSelectedOptions(producto) {
    const out = {};
    const opts = producto.opciones || {};
    Object.keys(opts).forEach(k => {
        const el = document.getElementById(k);
        out[k] = el ? el.value : "";
    });
    return out;
}

function allOptionsSelected(producto, selected) {
    if (!producto.opciones) return true;
    return Object.keys(producto.opciones).every(k => selected[k] && selected[k] !== "");
}

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
            name: producto.titulo,
            price: Number(producto.precio) || 0,
            img: producto.imagen || "",
            selectedOptions: selected,
            qty: qty
        });
    }
    saveCart(cart);
}

// =========================================
// GENERAR HTML DEL PRODUCTO
// =========================================
function generarHTMLDetalleProducto(producto) {
    // Título dinámico de la página
    document.title = producto.titulo + " - G3 Sports";

    let opciones = "";
    if (producto.opciones) {
        Object.keys(producto.opciones).forEach(key => {
            let opcion = producto.opciones[key];
            let inicio = "<option value=''>Seleccione</option>";
            opcion.valores.forEach(valor => {
                inicio += `<option value='${valor}'>${valor}</option>`;
            });
            opciones += `<label for='${key}'><b>${opcion.label}</b></label>` +
                `<select class='form-select g3select' name='${key}' id='${key}'>` +
                inicio +
                "</select>" +
                "<br>";
        });
    }

    let detallesHTML = "";
    if (producto.detalles) {
        producto.detalles.forEach(detalle => {
            detallesHTML += `<p><b>${detalle.label}:</b> ${detalle.valor}</p>`;
        });
    }

    return "<div id='alerta' style='display:none;'></div>" + 
           "<div class='row'>" +
        "<div class='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'>" +
        `<img src='${producto.imagen}' width='420px' height='420px' alt='${producto.titulo}'>` +
        "</div>" +
        "<div class='col-sm-12 col-md-3 col-lg-3'>" +
        `<h1>${producto.titulo}</h1>` +
        `<p><b>Precio:</b> <big>$${producto.precio}</big></p>` +
        `<p><b>Marca:</b> ${producto.marca}</p>` +
        "<label for='cantidad'><b>Cantidad:</b></label>" +
        `<input type='number' id='cantidad' name='cantidad' min='1' max='${producto.stock}' value='1'>` +
        "<br><br>" +
        opciones +
        detallesHTML +
        `<button id='botonCarrito' data-product-id='${producto.id}' class='btn btn-primary' type='button'>Añadir Carrito</button>` +
        "</div>" +
        "<div class='col-sm-12 col-md-3 col-lg-3' style='border: 1px solid #1a1a2e;'>" +
        "<iframe src='/carrito.html' width='100%' height='100%' style='border:none;'></iframe>" +
        "</div>" +
        "</div>" +
        "<h1 class='otrosProductos'>Otros productos</h1>";
}

// =========================================
// PRODUCTOS RECOMENDADOS
// =========================================
const recomendados = document.getElementById("productosRecomendados");
if (recomendados) {
    recomendados.innerHTML = "";
    for (const i of products) {
        recomendados.innerHTML += `
        <div>
            <div class="card shadow-sm productosFila" onclick="window.location.href='detalleProducto.html?id=${i.id}'">
            <img src="${i.imagen}" class="card-img-top imgrecomendaciones" alt="${i.descripcion}">
            <div class="card-body">
                <h5 class="card-title">${i.titulo}</h5>
                <p class="card-text">${i.descripcion}</p>
                <p class="card-title">$${i.precio}</p>
            </div>
            </div>
        </div>
        `;
    }
}

// =========================================
// CARGAR PRODUCTO DINÁMICAMENTE DESDE URL
// =========================================
function cargarProductoDesdURL() {
    // Obtener parámetro 'id' de la URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));

    if (!productId) {
        document.getElementById("detalleProducto").innerHTML = 
            "<div class='alert alert-danger'>No se especificó ningún producto</div>";
        return;
    }

    // Buscar el producto
    const producto = products.find(p => p.id === productId);

    if (!producto) {
        document.getElementById("detalleProducto").innerHTML = 
            "<div class='alert alert-danger'>Producto no encontrado</div>";
        return;
    }

    // Generar HTML del producto
    document.getElementById("detalleProducto").innerHTML = generarHTMLDetalleProducto(producto);

    // Configurar el botón de añadir al carrito
    configurarBotonCarrito();
}

// =========================================
// CONFIGURAR BOTÓN AÑADIR AL CARRITO
// =========================================
function configurarBotonCarrito() {
    $(document).ready(function () {
        $("#botonCarrito").off("click").on("click", function () {
            const id = Number(this.dataset.productId);
            const producto = products.find(p => Number(p.id) === id);
            if (!producto) return;

            const qtyInput = document.getElementById("cantidad");
            let qty = parseInt(qtyInput ? qtyInput.value : "1", 10);
            if (!Number.isFinite(qty) || qty < 1) qty = 1;

            const max = Number(producto.stock ?? 1);
            if (qty > max) {
                qty = max;
                if (qtyInput) qtyInput.value = String(qty);
            }

            const selected = getSelectedOptions(producto);
            if (!allOptionsSelected(producto, selected)) {
                if (window.Swal?.fire) {
                    Swal.fire({ title: "Selecciona las opciones requeridas", icon: "warning" });
                } else {
                    alert("Selecciona las opciones requeridas.");
                }
                return;
            }

            addToCart(producto, qty, selected);

            if (window.Swal?.fire) {
                Swal.fire({
                    title: "Añadido al carrito",
                    text: producto.titulo,
                    icon: "success",
                    draggable: true,
                    timer: 1300,
                    showConfirmButton: false
                });
            } else {
                alert("Producto añadido al carrito");
            }

            const iframe = document.querySelector('iframe[src="/carrito.html"]');
            if (iframe) {
                iframe.src = iframe.src;
            }
        });
    });
}

// =========================================
// INICIALIZAR AL CARGAR LA PÁGINA
// =========================================
cargarProductoDesdURL();