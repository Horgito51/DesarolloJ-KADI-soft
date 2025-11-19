export default class HeaderView{
  constructor(){
    this.headerComponent=$("#head");
    this.html=`
    <div class="row cabecera align-items-center col-md-12 ">
      <div class="col-md-2 col-sm-12 col-12" style="margin-left: auto;">
        <a href="Dashboard.html">
          <img src="img/Logo.png" alt="J-KADI Sports" class="logo">
        </a>
      </div>

      <div class="col-md-1 col-sm-12 col-12 d-flex   justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>

      <div class="col-md-6 col-sm-12 col-12" style="margin:12px">
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search">
          <button class="btn btn-outline-secondary nacho" type="submit width="30%" height="30px">
            <img src="img/lupa.png" alt="Lupa" width="30px" height="30px">
          </button>
        </div>
      </div>

      <div class="col-md-1  col-sm-6 col-6 text-center" style="padding:7  px">
        <a href="carrito.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24" stroke="white" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <p style="color:white; margin-top: 5px; font-size: 14px; font-weight: bold;"><b>Carrito</b></p>
        </a>
      </div>

      <div class="col-md-1 col-sm-6 col-6 text-center" style="padding:7px">
        <a href="login.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16" style="cursor: pointer;">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
          <p style="text-align: center; color:white; margin-top: 5px; font-size:14px"><b>Iniciar sesión</b></p>
        </a>
      </div>
    </div>
  `
  }
  renderHeader(html){
    this.headerComponent.html(this.html);
  }

}
