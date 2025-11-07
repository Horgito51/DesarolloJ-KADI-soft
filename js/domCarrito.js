// js/domCarrito.js
document.addEventListener("DOMContentLoaded", () => {
  // Datos del carrito
  const products = [
    { name: "Camiseta FC Barcelona", price: 40.00, qty: 1 },
    { name: "Gorra Deportiva", price: 14.99, qty: 1 }
  ];

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // Actualizar precios y subtotal
  function updateUI() {
    let subtotal = 0;

    products.forEach((p, i) => {
      const qty = Math.max(0, p.qty || 0);
      const itemTotal = p.price * qty;
      subtotal += itemTotal;

      const priceEl = $(`#price-${i}`);
      const qtyEl = $(`#qty-${i}`);

      if (priceEl) priceEl.textContent = `$${itemTotal.toFixed(2)}`;
      if (qtyEl) qtyEl.value = qty;
    });

    $("#subtotal").textContent = `$${subtotal.toFixed(2)}`;
  }

  // Cambiar cantidad con botones
  function changeQty(index, delta) {
    const next = (products[index].qty || 0) + delta;
    products[index].qty = Math.max(1, next);
    updateUI();
  }

  // Eliminar producto
  function removeItem(index) {
    const itemEl = $$(".cart-item")[index];
    if (itemEl) itemEl.remove();
    products[index].qty = 0;
    updateUI();
  }

  // Cuando el usuario escribe directamente
  function manualQtyChange(index, newValue) {
    const value = parseInt(newValue, 10);
    if (!isNaN(value) && value >= 1) {
      products[index].qty = value;
      updateUI();
    }
  }

  // Compra exitosa
  function checkout() {
    alert("Compra finalizada. Gracias por comprar en J-KADI SPORTS");
  }

  // Eventos
  $$(".btn-inc").forEach(btn =>
    btn.addEventListener("click", e => {
      changeQty(Number(e.currentTarget.dataset.index), +1);
    })
  );

  $$(".btn-dec").forEach(btn =>
    btn.addEventListener("click", e => {
      changeQty(Number(e.currentTarget.dataset.index), -1);
    })
  );

  $$(".btn-del").forEach(btn =>
    btn.addEventListener("click", e => {
      removeItem(Number(e.currentTarget.dataset.index));
    })
  );

  //Para escribir numeritos :D
  $$(".quantity-control input").forEach(input => {
    input.addEventListener("input", e => {
      const i = Number(e.target.id.split("-")[1]);
      manualQtyChange(i, e.target.value);
    });
  });

  $("#checkoutBtn")?.addEventListener("click", checkout);

  updateUI();
});
