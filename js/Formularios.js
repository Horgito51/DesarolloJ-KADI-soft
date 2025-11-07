$(function () {
  $("#formularioPrueba").on("submit", function (e) {
    e.preventDefault();

    const email = $("#Em").val().trim();
    const password = $("#Pw").val().trim();

    //Validación con alert
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos antes de continuar.");
      return; // Detiene el proceso si hay campos vacíos
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

      // Simulación de envío (1.2 segundos)
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
});
