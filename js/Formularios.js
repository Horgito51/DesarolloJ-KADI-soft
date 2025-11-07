$(function () {
  // -------
  // LOGIN
  // -------
  $("#formularioPrueba").on("submit", function (e) {
    e.preventDefault();

    const email = $("#Em").val().trim();
    const password = $("#Pw").val().trim();

    // Validación simple con alert
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos antes de continuar.");
      return;
    }

    const $form = $(this);
    const $loading = $(".loading");

    // Oculta el formulario y muestra “Enviando…”
    $form.hide('slow', function () {
      $loading
        .stop(true, true)
        .hide()
        .html('<div class="row">Enviando...</div>')
        .fadeIn(400);

      setTimeout(function () {
        $loading.fadeOut(300, function () {
          const successHTML = `
            <div class="check-box check-box--success">
              <label>
                <input type="checkbox" id="successCheck" checked />
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                <span>Sesión iniciada</span>
              </label>
            </div>
          `;
          $loading.html(successHTML).fadeIn(400);
        });
      }, 1200);
    });
  });

  // -------
  // REGISTRO
  // -------
  $("#formularioRegistro").on("submit", function (e) {
    e.preventDefault();

    const usuario = $("#usuario").val().trim();
    const correo = $("#correo").val().trim();
    const pass1 = $("#password1").val().trim();
    const pass2 = $("#password2").val().trim();

    // Validaciones
    if (usuario === "" || correo === "" || pass1 === "" || pass2 === "") {
      alert("Por favor, complete todos los campos antes de continuar.");
      return;
    }

    if (pass1 !== pass2) {
      alert("Las contraseñas no coinciden. Verifíquelas por favor.");
      return;
    }

    const $form = $(this);
    const $loading = $(".loading");

    // Oculta el formulario y muestra “Enviando…”
    $form.hide('slow', function () {
      $loading
        .stop(true, true)
        .hide()
        .html('<div class="row">Enviando...</div>')
        .fadeIn(400);

      setTimeout(function () {
        $loading.fadeOut(300, function () {
          const successHTML = `
            <div class="check-box check-box--success">
              <label>
                <input type="checkbox" id="successCheck" checked />
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                <span>Cuenta creada con éxito</span>
              </label>
            </div>
          `;
          $loading.html(successHTML).fadeIn(400);
        });
      }, 1200);
    });
  });
});
