window.addEventListener("DOMContentLoaded", () => {
  const dashboardContent = document.querySelector(".dashboard-content");

  dashboardContent.innerHTML = `
  
  <div class="product-list-header">
            <nav class="breadcrumb">Dashboard / Products / <span id="productNameBreadcrumb"></span></nav>
            <div class="action-container">
                <button
                  class="action-btn mark-action-btn"
                  style="display: inline-flex; align-items: center; gap: 6px;"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2l4-4" />
                  </svg>
                  Action
                </button>

                <div class="dropdown-menu mark-dropdown hidden">
                  <div class="dropdown-item status-toggle">
                    <!-- Status button -->
                    <div class="status-button">
                      <svg
                        class="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span>Status</span>
                      <svg
                        class="arrow-icon"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                        />
                      </svg>
                    </div>

                    <!-- Submenu -->
                    <div class="status-submenu">
                      <div class="dropdown-subitem">Active</div>
                      <div class="dropdown-subitem">Published</div>
                      <div class="dropdown-subitem">Pending</div>
                      <div class="dropdown-subitem">Draft</div>
                    </div>
                  </div>

                  <div class="dropdown-item">
                    <!-- New Invoice -->
                    <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M3 3h18v18H3V3z" />
                      <path d="M8 9h8M8 13h6M8 17h4" />
                    </svg>
                    New Invoice
                  </div>
                  <div class="dropdown-item">
                    <!-- New Purchase Order -->
                    <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                    New Purchase Order
                  </div>
                  <div class="dropdown-item">
                    <!-- Clone -->
                    <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M4 16V6a2 2 0 012-2h10" />
                    </svg>
                    Clone
                  </div>
                  <div class="dropdown-item">
                    <!-- Archive -->
                    <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <rect x="3" y="4" width="18" height="4" rx="1" />
                      <path d="M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                      <path d="M9 12h6" />
                    </svg>
                    Archive
                  </div>
                  <div class="dropdown-item">
                    <!-- Delete -->
                    <svg
                      class="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                    </svg>
                    Delete
                  </div>
                </div>
              </div>
          </div>
    <div class="product-details">
      <div class="product-image-section">
        <img id="productImage" src="" alt="Product Image" class="main-image"/>
        <div class="thumbnail-row">
          <img src="assets/thumb1.jpg" class="thumb one" />
          <img src="assets/thumb2.jpg" class="thumb two" />
          <img src="assets/thumb3.jpg" class="thumb three" />
        </div>
      </div>

      <div class="product-info-section">
        

        <h1 id="productName" class="product-title">Product Name</h1>
        <p class="product-category" id="productCategory">Category</p>

        <div class="product-price-stock">
          <p class="price" id="productPrice">Price</p>
          <p class="stock" id="productStock">Stock: </p>
        </div>

        <p class="status" id="productStatus">Status</p>

        <div class="description-section">
          <h3>Description</h3>
          <p id="productDescription">No description available.</p>
        </div>

        
        <div class="info-cards">
          <div class="info-card">
            <h4>Discount </h4>
            <p id="discout-amount"></p>
          </div>
          <div class="info-card">
            <h4>Discount Type</h4>
            <p id="discountType"></p>
          </div>
        </div>
      </div>
    </div>
  `;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) return;

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[productId];

  if (!product) return;

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productNameBreadcrumb").textContent = product.name;
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById(
    "productStock"
  ).textContent = `Stock: ${product.stock.quantity} ${product.stock.unit}`;
  document.getElementById("productPrice").textContent = `Tk ${product.price}`;
  document.getElementById("productStatus").textContent = product.status;
  document.getElementById("productDescription").textContent =
    product.description || "No description provided.";
  document.getElementById("discout-amount").textContent = product.discount
    ? `${product.discount}%`
    : "N/A";

  document.getElementById("discountType").textContent =
    product.discountType || "N/A";

  document.getElementById("productImage").src =
    product.images?.[0] || "assets/custoper-avater.jpg";
  document.querySelector(".thumb.one").src =
    product.images?.[1] || "assets/thumb1.jpg";
  document.querySelector(".thumb.two").src =
    product.images?.[2] || "assets/thumb2.jpg";
  document.querySelector(".thumb.three").src =
    product.images?.[3] || "assets/thumb3.jpg";
});
