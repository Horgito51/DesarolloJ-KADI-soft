import footerModel from "../models/footerModel.js";
import footerView from "../views/footerView.js";
export default class footerController{
  constructor(){
    this.Modelfooter=new footerModel();
    this.Viewfooter=new footerView();
  }
  init(){
    console.log("llega");
     this.Viewfooter.renderfooter();
  }
  }


