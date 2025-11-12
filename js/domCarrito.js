// js/domCarrito.js
document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);

  const CART_KEY = "cart";

  // Utilidades para el carrito
  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function fmt(num) {
    return `$${(Number(num) || 0).toFixed(2)}`;
  }

  let cart = loadCart();

  // Render del carrito
  function renderCart() {
    const cartList = $("#cart-list");
    const subtotalEl = $("#subtotal");
    const checkoutBtn = $("#checkoutBtn");

    if (!cartList) return;

    cartList.innerHTML = "";

    if (!cart.length) {
      cartList.innerHTML = `
        <div class="alert alert-info text-center">
          <p>Tu carrito está vacío 🛒</p>
          <small>Explora nuestros productos y añádelos al carrito desde las páginas de detalle.</small>
        </div>
      `;
      subtotalEl.textContent = fmt(0);
      checkoutBtn.disabled = true;
      return;
    }

    let subtotal = 0;

    cart.forEach((p) => {
      const totalItem = p.price * p.qty;
      subtotal += totalItem;

      // Mostrar opciones seleccionadas
      let optsHTML = "";
      if (p.selectedOptions) {
        const opts = Object.entries(p.selectedOptions)
          .map(([k, v]) => `<small><b>${k}:</b> ${v}</small>`)
          .join("<br>");
        optsHTML = `<div class="mt-1">${opts}</div>`;
      }

      const itemHTML = `
        <div class="cart-item border rounded p-3 mb-3" data-id="${p.variantId}">
          <div class="d-flex align-items-center gap-3">
            <img src="${p.img || "img/placeholder.png"}" alt="${p.name}" style="width:120px;height:auto;border-radius:8px;">
            <div class="flex-grow-1">
              <h5>${p.name}</h5>
              ${optsHTML}
              <p class="mb-1"><b>Precio unitario:</b> ${fmt(p.price)}</p>
              <div class="quantity-control d-flex align-items-center gap-2">
                <span><b>Cantidad:</b></span>
                <button class="btn btn-sm btn-outline-secondary" data-action="dec">-</button>
                <input type="text" class="qty-input form-control form-control-sm text-center" style="width:60px;" value="${p.qty}">
                <button class="btn btn-sm btn-outline-secondary" data-action="inc">+</button>
                <button class="btn btn-sm btn-danger ms-2" data-action="del">🗑️</button>
              </div>
            </div>
            <div class="text-end ms-auto">
              <p class="fw-bold">${fmt(totalItem)}</p>
            </div>
          </div>
        </div>
      `;
      cartList.insertAdjacentHTML("beforeend", itemHTML);
    });

    subtotalEl.textContent = fmt(subtotal);
    checkoutBtn.disabled = subtotal <= 0;
  }

  // Modificar cantidades
  function changeQty(variantId, delta) {
    const item = cart.find((it) => it.variantId === variantId);
    if (!item) return;
    item.qty = Math.max(1, (item.qty || 1) + delta);
    saveCart(cart);
    renderCart();
  }

  function setQty(variantId, value) {
    const item = cart.find((it) => it.variantId === variantId);
    if (!item) return;

    const val = parseInt(String(value).replace(/\D+/g, ""), 10);
    if (!isNaN(val) && val >= 1 && val <= 9999) {
      item.qty = val;
      saveCart(cart);
      renderCart();
    }
  }

  function removeItem(variantId) {
    cart = cart.filter((it) => it.variantId !== variantId);
    saveCart(cart);
    renderCart();
  }

  // Delegación de eventos
  const cartList = $("#cart-list");

  if (cartList) {
    cartList.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const itemEl = btn.closest(".cart-item");
      const id = itemEl?.dataset.id;
      const action = btn.dataset.action;

      if (action === "inc") changeQty(id, +1);
      if (action === "dec") changeQty(id, -1);
      if (action === "del") removeItem(id);
    });

    cartList.addEventListener("input", (e) => {
      if (!e.target.classList.contains("qty-input")) return;
      const id = e.target.closest(".cart-item")?.dataset.id;
      setQty(id, e.target.value);
    });
  }

  // Finalizar compra
  const checkoutBtn = $("#checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (!cart.length) return;
      if (window.Swal?.fire) {
        Swal.fire({
          title: "¡Compra finalizada!",
          text: "Gracias por comprar en J-KADI SPORTS",
          icon: "success"
        });
      } else {
        alert("Compra finalizada. ¡Gracias por comprar en J-KADI SPORTS!");
      }
      // cart = [];
      // saveCart(cart);
      // renderCart();
    });
  }

  // Render inicial
  renderCart();
});
