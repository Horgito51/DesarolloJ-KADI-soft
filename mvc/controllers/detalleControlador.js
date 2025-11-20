import ProductModel from "../models/productsModel.js";
import ProductDetalleView from "../views/detalle.js";

export class ProductDetalleController {

    constructor() {
        this.modeloDetalle = new ProductModel();
        this.vistaDetalle = new ProductDetalleView();
    }

    init() {
        const params = new URLSearchParams(window.location.search);
        const productId = parseInt(params.get("id"));

        if (!productId) {
            this.vistaDetalle.detalleProducto.html(
                "<div class='alert alert-danger'>Producto no especificado</div>"
            );
            return;
        }

        const producto = this.modeloDetalle.getProductById(productId);

        if (!producto) {
            this.vistaDetalle.detalleProducto.html(
                "<div class='alert alert-danger'>Producto no encontrado</div>"
            );
            return;
        }

        this.vistaDetalle.renderProducto(producto);

        this.vistaDetalle.renderRecomendados(
            this.modeloDetalle.getAllProducts()
        );
    }
}
