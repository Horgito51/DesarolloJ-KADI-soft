export default class ProductDetalleView {

    constructor() {
        this.detalleProducto = $("#detalleProducto");
        this.recomendados = $("#productosRecomendados");
    }

    renderProducto(producto) {

        document.title = producto.titulo + " - G3 Sports";

        let opciones = "";
        if (producto.opciones) {
            Object.keys(producto.opciones).forEach(key => {
                let opcion = producto.opciones[key];
                let inicio = "<option value=''>Seleccione</option>";

                opcion.valores.forEach(valor => {
                    inicio += `<option value='${valor}'>${valor}</option>`;
                });

                opciones += `
                    <label for='${key}'><b>${opcion.label}</b></label>
                    <select class='form-select g3select' name='${key}' id='${key}'>
                        ${inicio}
                    </select>
                    <br>
                `;
            });
        }

        let detallesHTML = "";
        if (producto.detalles) {
            producto.detalles.forEach(detalle => {
                detallesHTML += `<p><b>${detalle.label}:</b> ${detalle.valor}</p>`;
            });
        }

        const html = `
            <div id='alerta' style='display:none;'></div>
            <div class='row'>

                <div class='col-sm-12 col-md-6 d-flex justify-content-center'>
                    <img src='${producto.imagen}' width='420px' height='420px' alt='${producto.tittle}'>
                </div>

                <div class='col-sm-12 col-md-3'>
                    <h1>${producto.tittle}</h1>
                    <p><b>Precio:</b> <big>$${producto.precio}</big></p>
                    <p><b>Marca:</b> ${producto.marca}</p>

                    <label for='cantidad'><b>Cantidad:</b></label>
                    <input type='number' id='cantidad' name='cantidad' min='1' max='${producto.stock}' value='1'>
                    <br><br>

                    ${opciones}
                    ${detallesHTML}

                    <button id='botonCarrito' data-product-id='${producto.id}'
                        class='btn btn-primary'>Añadir Carrito</button>
                </div>

                <div class='col-sm-12 col-md-3' style='border:1px solid #1a1a2e;'>
                    <iframe src='/carrito.html' width='100%' height='100%' style='border:none;'></iframe>
                </div>

            </div>

            <h1 class='otrosProductos'>Otros productos</h1>
        `;

        this.detalleProducto.html(html);
    }

    renderRecomendados(lista) {

        if (!this.recomendados.length) return;

        this.recomendados.html("");

        lista.forEach(i => {
            this.recomendados.append(`
                <div>
                    <div class="card shadow-sm productosFila"
                         onclick="window.location.href='detalleProducto.html?id=${i.id}'">

                        <img src="${i.imagen}" 
                             class="card-img-top imgrecomendaciones" 
                             alt="${i.descripcion}">

                        <div class="card-body">
                            <h5 class="card-title">${i.tittle}</h5>
                            <p class="card-text">${i.descripcion}</p>
                            <p class="card-title">$${i.precio}</p>
                        </div>

                    </div>
                </div>
            `);
        });
    }
}
