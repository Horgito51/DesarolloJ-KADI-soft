import ProductModel from "../models/productsModel.js";
import ProductView from "../views/productsView.js";

class ProductController{
  constructor(){
    this.view=new ProductView();
    this.model=new ProductModel();
    this.proxpagina = 10;
    this.paginaActual = 1;

  }

  init() {
        // Inicializar la página con los productos
        this.refreshPage();  // función para cargar los productos y la paginación

        //manejador para el clic en la paginación
        this.view.clickPagination((nuevaPagina) => {
            this.paginaActual = nuevaPagina;
            this.refreshPage();  // Refresca la vista cuando cambia la página
        });
    }

    refreshPage() {
        // Obtengo la lista de todos los productos
        const p = this.model.getAllProducts();

        // Calculo el número total de páginas
        const totalPaginas = Math.ceil(p.length / this.proxpagina);

        // Muestra los productos de la página actual
        this.renderPage(p, totalPaginas);

        // Renderiza la paginación para la página actual
        this.view.renderPagination(this.paginaActual, totalPaginas);
    }

    renderPage(p) {
        // Calcula el índice de inicio y fin de los productos a mostrar
        let inicio = (this.paginaActual - 1) * this.proxpagina;
        let fin = inicio + this.proxpagina;

        // Obtiene los productos correspondientes a la página actual
        const productosPagina = p.slice(inicio, fin);

        // Renderiza los productos en la vista
        this.view.renderProducts(productosPagina);
    }


  }
