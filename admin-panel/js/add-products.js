let selectedStatus = "Active"; // Default status
let uploadedImages = []; // Store images as base64

// Status Selection
const statusButtons = document.querySelectorAll(".status-select");
statusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    statusButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedStatus = btn.textContent.trim();
  });
});

// Image Upload
const imgUpload = document.getElementById("imgUpload");
const mainPreview = document.getElementById("mainPreview");
const thumbnailList = document.getElementById("thumbnailList");

imgUpload.addEventListener("change", () => {
  const files = Array.from(imgUpload.files);
  const remainingSlots = 4 - uploadedImages.length;

  if (remainingSlots <= 0) {
    alert("You can only upload up to 4 images.");
    imgUpload.value = "";
    return;
  }

  const filesToUpload = files.slice(0, remainingSlots);

  filesToUpload.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgData = e.target.result;
      uploadedImages.push(imgData);
      renderThumbnails();
      mainPreview.src = uploadedImages[0];
    };
    reader.readAsDataURL(file);
  });

  imgUpload.value = "";
});

function renderThumbnails() {
  thumbnailList.innerHTML = "";

  uploadedImages.forEach((imgSrc, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "thumbnail-wrapper";

    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.className = "thumbnail-img";
    thumb.addEventListener("click", () => {
      mainPreview.src = imgSrc;
    });

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "close-btn";
    closeBtn.addEventListener("click", () => {
      uploadedImages.splice(index, 1);
      renderThumbnails();
      mainPreview.src = uploadedImages[0] || getDefaultImage();
    });

    wrapper.appendChild(thumb);
    wrapper.appendChild(closeBtn);
    thumbnailList.appendChild(wrapper);
  });
}

function getDefaultImage() {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23ccc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'/><circle cx='8.5' cy='8.5' r='1.5'/><path d='M21 15l-5-5L5 21'/></svg>";
}

// Save Draft
const saveDraftBtn = document.querySelector(".btn-outline");
saveDraftBtn.addEventListener("click", () => {
  alert(
    "Draft saved locally (this is a demo). You can integrate with backend."
  );
});

// Add Product
const addProductBtn = document.querySelector(".btn-success");
addProductBtn.addEventListener("click", () => {
  const name = document.querySelector('input[placeholder="Product Name"]')
    .value;
  const description = document.querySelector("textarea").value;
  const price = document.querySelector("input[placeholder='Enter base price']")
    .value;
  const stock = document.querySelector(
    "input[placeholder='Enter stock quantity']"
  ).value;
  const discount = document.querySelector(
    "input[placeholder='Enter discount percentage']"
  ).value;
  const discountType = document.querySelectorAll(".form-select")[0].value;
  const category = document.querySelector("#category-select").value;
  const stockQty = document.querySelector("#stock-quantity").value;
  const stockUnit = document.querySelector("#stock-unit").value;

  const productData = {
    name,
    description,
    price,
    stock: {
      quantity: stockQty,
      unit: stockUnit,
    },
    discount,
    discountType,
    category,
    status: selectedStatus,
    images: uploadedImages,
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(productData);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added!");
  window.location.href = "products.html";
});

// Category Popup Logic
const openFormBtn = document.getElementById("open-category-form");
const popup = document.getElementById("category-popup");
const input = document.getElementById("category-input");
const addBtn = document.getElementById("popup-add");
const cancelBtn = document.getElementById("popup-cancel");
const errorMsg = document.getElementById("popup-error");
const categorySelect = document.getElementById("category-select");

function togglePopup(show = true) {
  popup.classList.toggle("hidden", !show);
  if (show) {
    input.value = "";
    errorMsg.style.display = "none";
    input.focus();
  }
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}

function addCategory() {
  const newCategory = input.value.trim();
  if (!newCategory) {
    showError("Please enter a category.");
    return;
  }

  const exists = Array.from(categorySelect.options).some(
    (opt) => opt.text.toLowerCase() === newCategory.toLowerCase()
  );

  if (exists) {
    showError("This category already exists.");
    return;
  }

  const option = document.createElement("option");
  option.value = newCategory.toLowerCase().replace(/\s+/g, "-");
  option.textContent = newCategory;
  categorySelect.appendChild(option);
  categorySelect.value = option.value;
  togglePopup(false);
}

openFormBtn.addEventListener("click", () => togglePopup(true));
cancelBtn.addEventListener("click", () => togglePopup(false));
addBtn.addEventListener("click", addCategory);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addCategory();
});

document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".category-wrapper") &&
    !popup.classList.contains("hidden")
  ) {
    togglePopup(false);
  }
});
