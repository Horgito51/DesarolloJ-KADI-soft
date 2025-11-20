export default  class footerModel{
  constructor(){
    this.products="producto";
    this.Search=[];
  }


getProducts(){
  return this.products;
}

getSearch(){
  const resultados = [];
    for(let i = 0; i < this.search.length; i++){
        resultados.push(this.search[i]);
    }
    return resultados;

}
}
