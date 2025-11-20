import { HeaderController } from "../mvc/controllers/headerController.js";
import { HeaderModel } from "../mvc/models/headerModel.js";
import { HeaderView } from "../mvc/views/headerView.js";

$(document).ready(function() {
  const header=new headerController();
  header.init();
});
