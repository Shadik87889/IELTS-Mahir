window.addEventListener("DOMContentLoaded", () => {
  //   localStorage.clear(); // Clear localStorage for testing purposes
  const customerList = document.getElementById("customer-list");
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const customersPerPage = 10; // Number of customers per page
  let currentPage = 1;

  if (!customerList) return;

  if (customers.length === 0) {
    customerList.innerHTML = "<p>No customers found.</p>";
    return;
  }

  // Create pagination container
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination-container");
  customerList.parentNode.insertBefore(
    paginationContainer,
    customerList.nextSibling
  );

  function renderPage(page) {
    const selectAllCheckbox = document.getElementById("select-all-checkbox");
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = false;
    }

    // Calculate start and end indexes
    const startIndex = (page - 1) * customersPerPage;
    const endIndex = Math.min(startIndex + customersPerPage, customers.length);

    // Slice customers for current page
    const customersToShow = customers.slice(startIndex, endIndex);

    customerList.innerHTML = customersToShow
      .map(
        (customer, index) => `
      <tr class="customer-row" data-id="${startIndex + index}">
        <td class="customer-name-checkbox">
          <input class="checkbox-input" type="checkbox" />
          ${customer.name}
        </td>
        <td>${customer.company}</td>
        <td><span class="low-stock">${customer.phone}}</span></td>
        <td>${customer.email}</td>
        <td><span class="total-purchase">${customer.totalPurshase}</span></td>
        <td><span class="status">${customer.status}</span></td>
        <td class="action-container">
          <button class="action-btn action-disable-toggle">•••</button>
          <div class="dropdown-menu hidden">
            <div class="dropdown-item">
              <!-- Edit -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Edit
            </div>
            <div class="dropdown-item">
              <!-- New Invoice -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3h18v18H3V3z" />
                <path d="M8 9h8M8 13h6M8 17h4" />
              </svg>
              New Invoice
            </div>
            <div class="dropdown-item">
              <!-- New Purchase Order -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
              New Purchase Order
            </div>
            <div class="dropdown-item">
              <!-- Clone -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M4 16V6a2 2 0 012-2h10" />
              </svg>
              Clone
            </div>
            <div class="dropdown-item">
              <!-- Archive -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="4" rx="1" />
                <path d="M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                <path d="M9 12h6" />
              </svg>
              Archive
            </div>
            <div class="dropdown-item">
              <!-- Delete -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
              </svg>
              Delete
            </div>
          </div>
        </td>
      </tr>
    `
      )
      .join("");

    bindActionButtons();
    bindCheckboxHandlers();
    actionStatusSubFun();
    detailsPageHandler();
    updatePagination();
  }

  function createPaginationButton(pageNumber, text = null, disabled = false) {
    const btn = document.createElement("button");
    btn.textContent = text || pageNumber;
    btn.classList.add("pagination-btn");
    if (pageNumber === currentPage) btn.classList.add("active");
    if (disabled) btn.disabled = true;
    btn.addEventListener("click", () => {
      if (!disabled && pageNumber !== currentPage) {
        currentPage = pageNumber;
        renderPage(currentPage);
      }
    });
    return btn;
  }

  function createEllipsis() {
    const span = document.createElement("span");
    span.textContent = "...";
    span.classList.add("pagination-ellipsis");
    return span;
  }

  function updatePagination() {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(customers.length / customersPerPage);

    if (totalPages <= 1) return; // No need to paginate if only one page

    // Prev button
    const prevBtn = createPaginationButton(
      currentPage - 1,
      "Prev",
      currentPage === 1
    );
    paginationContainer.appendChild(prevBtn);

    // Smart pagination logic: show max 7 page buttons + first and last always
    // Examples:
    // [1] ... 5 6 [7] 8 9 ... 149
    // or if near start:
    // 1 2 3 4 5 ... 149
    // or near end:
    // 1 ... 145 146 147 148 149

    const maxPageButtons = 7;
    let startPage, endPage;

    if (totalPages <= maxPageButtons + 2) {
      // Show all pages if total is small enough (including first and last)
      startPage = 1;
      endPage = totalPages;
    } else {
      // More pages, use smart slicing
      if (currentPage <= maxPageButtons - 2) {
        // Near start
        startPage = 1;
        endPage = maxPageButtons;
      } else if (currentPage >= totalPages - (maxPageButtons - 3)) {
        // Near end
        startPage = totalPages - (maxPageButtons - 1);
        endPage = totalPages;
      } else {
        // In middle
        startPage = currentPage - Math.floor((maxPageButtons - 3) / 2);
        endPage = currentPage + Math.floor((maxPageButtons - 3) / 2);
      }
    }

    // Always show first page
    paginationContainer.appendChild(createPaginationButton(1));

    if (startPage > 2) {
      paginationContainer.appendChild(createEllipsis());
    }

    for (let i = startPage; i <= endPage; i++) {
      // skip if first or last page because already added
      if (i !== 1 && i !== totalPages) {
        paginationContainer.appendChild(createPaginationButton(i));
      }
    }

    if (endPage < totalPages - 1) {
      paginationContainer.appendChild(createEllipsis());
    }

    // Always show last page (if not 1)
    if (totalPages > 1) {
      paginationContainer.appendChild(createPaginationButton(totalPages));
    }

    // Next button
    const nextBtn = createPaginationButton(
      currentPage + 1,
      "Next",
      currentPage === totalPages
    );
    paginationContainer.appendChild(nextBtn);
  }

  // Initial render
  renderPage(currentPage);
});

// The rest of your functions as before:

function bindActionButtons() {
  document.querySelectorAll(".action-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      const dropdown = this.nextElementSibling;
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdown) menu.classList.add("hidden");
      });
      dropdown.classList.toggle("hidden");
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".action-container")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.add("hidden");
      });
    }
  });
}

document.addEventListener("click", function (event) {
  const wrapper = document.querySelector(".date-range-wrapper");
  const dateInputs = document.querySelector(".date-range-inputs");
  if (wrapper && dateInputs && !wrapper.contains(event.target)) {
    dateInputs.style.display = "none";
  }
});

function actionStatusSubFun() {
  const toggle = document.querySelector(".status-toggle");
  if (!toggle) return;

  const submenu = toggle.querySelector(".status-submenu");
  const arrow = toggle.querySelector(".arrow-icon");
  const statusText = toggle.querySelector(".status-button span");
  const submenuItems = submenu.querySelectorAll(".dropdown-subitem");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    submenu.classList.toggle("show");
    arrow.classList.toggle("rotated");
  });

  submenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      statusText.textContent = item.textContent;
      submenu.classList.remove("show");
      arrow.classList.remove("rotated");
    });
  });

  document.addEventListener("click", () => {
    submenu.classList.remove("show");
    arrow.classList.remove("rotated");
  });
}

function bindCheckboxHandlers() {
  const checkboxes = document.querySelectorAll(".checkbox-input");
  const actionBtn = document.querySelector(".mark-action-btn");
  const toggleButtons = document.querySelectorAll(".action-disable-toggle");

  function updateActionBtnState() {
    const anyChecked = Array.from(checkboxes).some((cb) => cb.checked);
    if (actionBtn) {
      actionBtn.disabled = !anyChecked;
      actionBtn.classList.toggle("disabled", !anyChecked);
    }

    toggleButtons.forEach((btn) => {
      btn.disabled = anyChecked;
      btn.classList.toggle("disabled", anyChecked);
    });
  }

  updateActionBtnState();

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", updateActionBtnState);
  });
}

function detailsPageHandler() {
  document.querySelectorAll(".customer-row").forEach((row) => {
    row.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT" || e.target.closest(".action-container"))
        return;

      const customerId = row.getAttribute("data-id");
      window.location.href = `customer-details.html?id=${customerId}`;
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const selectAllCheckbox = document.getElementById("select-all-checkbox");

  selectAllCheckbox?.addEventListener("change", (e) => {
    const allcustomerCheckboxes = document.querySelectorAll(
      "#customer-list .customer-row .checkbox-input"
    );
    allcustomerCheckboxes.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
      checkbox.dispatchEvent(new Event("change")); // trigger change if needed
    });
  });
});
