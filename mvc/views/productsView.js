class ProductView{

    constructor(){
        this.proContenedor = $('#products');
        this.paginacion = $('#paginacion');
        this.cartContenedor=$('#cart');
        this.totalContainer=$('#resume');
    }

    renderProducts(products){
        this.proContenedor.addClass("flex_container");
        this.proContenedor.empty();
        products.forEach(p_obj => {
            const cardHTML = `
                <div class="card" data-url="${p_obj.enlace}">
                    <img src="${p_obj.imagen}" class="card-img-top imgproduct" alt="${p_obj.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${p_obj.titulo}</h5>
                        <p class="card-text">${p_obj.descripcion}</p>
                        <a href="#" class="btn btn-custom">Comprar ahora</a>
                    </div>
                </div>
            `;
            cardHTML.click(function () {
                let url = $(this).data('url');
                window.location.href = url;
            });
            this.proContenedor.append(cardHTML);
            
        });   
    }

    renderPagination(paginaActual,totalPaginas){
        this.paginacion.empty();
        let paginacionHtml = '<nav><ul class="pagination justify-content-center">';
        // Botón "Anterior"
        paginacionHtml += `
        <li class="page-item ${paginaActual === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-pagina="${paginaActual - 1}">
            <span>&laquo;</span>
            </a>
        </li>
        `;
        // Números de página
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

    //Detectar el click en la paginación y ejecutar el handler con el controller
    clickPagination(handler){
        this.paginacion.on('click','a.page-link',function(e){
            e.preventDefault();
            const $this = $(this);
            const $li = $this.parent();
            if ($li.hasClass('disabled')) return;

            const nuevaPagina = parseInt($this.data('pagina'));
        });

    }


    


}