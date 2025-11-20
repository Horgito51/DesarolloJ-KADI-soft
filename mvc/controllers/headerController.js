import headerModel from "../models/headerModel.js";
import headerView from "../views/headerView.js";

export default class headerController{
  constructor(){
    this.Modelheader=new headerModel();
    this.Viewheader=new headerView();
  }
  init(){
    console.log("llega");
     this.Viewheader.renderHeader();
  }
  }


