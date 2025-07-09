// toast-notification.js
// Utility function for displaying toast notifications.

/**
 * Displays a toast notification.
 * @param {string} message - The message to display.
 * @param {'success' | 'error' | 'info'} type - The type of toast (for styling).
 * @param {number} duration - How long the toast should be visible in milliseconds. Default is 3000.
 */
function showToast(message, type = "info", duration = 3000) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    console.error(
      'Toast container not found. Please add <div id="toast-container"></div> to your HTML.'
    );
    return;
  }

  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerHTML = `
        <i class="fas ${
          type === "success"
            ? "fa-check-circle"
            : type === "error"
            ? "fa-times-circle"
            : "fa-info-circle"
        }"></i>
        <span>${message}</span>
    `;

  toastContainer.appendChild(toast);

  // Trigger reflow to ensure transition plays
  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener(
      "transitionend",
      () => {
        toast.remove();
      },
      { once: true }
    );
  }, duration);
}

export { showToast };
