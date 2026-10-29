
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const openModal = document.getElementById("openModal");
const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

// Track whether the modal has been dismissed
let modalDismissed = false;

// Show the modal
function showModal() {
  if (modalDismissed) return;

  modalOverlay.classList.add("show");
}

// Close the modal
function hideModal() {
  modalOverlay.classList.remove("show");
  modalDismissed = true;
}

// Show popup after 2 seconds
setTimeout(showModal, 2000);

// Close button
closeModal.addEventListener("click", hideModal);

// Close when clicking the overlay
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    hideModal();
  }
});

// Close using Escape key
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modalOverlay.classList.contains("show")
  ) {
    hideModal();
  }
});

// Manual subscribe button
openModal.addEventListener("click", showModal);

// Email validation
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  errorMessage.textContent = "";
  successMessage.textContent = "";

  if (!email) {
    errorMessage.textContent = "Please enter your email address.";
    emailInput.focus();
    return;
  }

  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  successMessage.textContent = "Thank you for subscribing!";

  modalDismissed = true;
  signupForm.reset();

  setTimeout(() => {
    modalOverlay.classList.remove("show");
  }, 1200);
});
