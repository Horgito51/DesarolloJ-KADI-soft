class ProductController{
  constructor(){
    this.view=new ProductView();
    this.model=new Products();

  }
  init(){
    const p=this.model.getProducts();
    this.view.renderProducts(p);
  }
  }
