const cabecera=document.getElementById('head');
const pie=document.getElementById('foot');
let header=document.createElement('div');
header.innerHTML=`
 <div class="row cabecera align-items-center">
    <div class="col-md-3 " style="margin-left: auto;">
    <a href="Dashboard.html">
      <img src="img/Logo.png" alt="J-KADI SOFT" class="logo">
    </a>
    </div>

    <div class="col-md-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </div>
    <div class="col-md-6">
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search">
        <button class="btn btn-outline-secondary nacho" type="submit">
          <img src="img/lupa.png" alt="Lupa" width="30px" height="30px">
        </button>
      </div>
    </div>
    <div class="col-md-1 text-center">
      <a href="carrito.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"
            viewBox="0 0 24 24" stroke="white" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <p style="color:white; margin-top: 5px; font-size: 14px; font-weight: bold;"><b>Carrito</b></p>
      </a>
    </div>
   <div class="col-md-1 text-center">
  <a href="login.html" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white"
         class="bi bi-person-circle" viewBox="0 0 16 16" style="cursor: pointer;">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
        11.37C3.242 11.226 4.805 10 8 10s4.757 1.225
        5.468 2.37A7 7 0 0 0 8 1" />
    </svg>
    <p style="text-align: center; color:white; margin-top: 5px;"><b>Iniciar sesión</b></p>
  </a>
</div>

  </div>`;
cabecera.appendChild(header);
let footer=document.createElement('div');
footer.innerHTML=`<div class="foot">
      <div class="row">
        <h2>Recursos útiles</h2>
        <p>Acerca de nosotros</p>
        <p>Políticas de privacidad</p>
        <p>Términos y condiciones</p>
        <p>Contáctanos</p>

      </div>
      <div>
        <div class="row">
        <h1>J-KADI SOFT</h1>
        </div>
        <div class="row">
        </div>
          <p style="Color:white"> Redes sociales</p>
          <img  class="footer_img" src="img/Facebook.png" onclick="window.open('https://www.facebook.com/')" style="align-items: center;" alt="Facebook" width="50px" height="50px">
          <img class="footer_img " src="img/Insta.png" onclick="window.open('https://www.instagram.com/aeipuceuio')" style="display: inline-block; margin: 0 10px;" alt="Instagram" width="50px" height="50px">
          <img src="img/Twitter.png" onclick="window.open('https://x.com/')" style="align-items: center;" alt="Twitter" width="50px" height="50px">
          <div class="row">
            <p class="copyright">&copy; 2024 J-KADI SOFT</p>
          </div>
      </div>
      <div class="row">
        <h2>Contáctanos</h2>
        <p>📍Av 12 de octubre y Ignacio de Ventimilla</p>
        <p>📱 +593 98 472 3243</p>
          <p>📧 Grupo3@jkadisoft.com</p>


      </div>

    </div>`;

pie.appendChild(footer);
