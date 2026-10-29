# 📧 Email Signup Popup Modal

## 📌 Project Overview

The Email Signup Popup Modal is a responsive web project built using HTML, CSS, and JavaScript. It displays a newsletter signup popup after a delay and allows users to subscribe using their email address.

## ✨ Features

- ⏱️ Popup appears after a 2-second delay.
- 📩 Email input with format validation.
- ❌ Close button to dismiss the modal.
- 🖱️ Click on the overlay to close the popup.
- ⌨️ Press the Escape key to close the modal.
- 🚫 Prevents the popup from reappearing after dismissal during the current page session.
- 📱 Responsive design for mobile and desktop.
- 🎨 Smooth popup animations.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## 📂 Project Structure

```text
20NewsLetter-signup-modal/
├── index.html
├── style.css
└── script.js
```

## ⚙️ How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Wait 2 seconds to see the popup.
5. Enter a valid email address to test the form.

## 🧠 Key Concepts

- `setTimeout()` for delayed popup display.
- DOM manipulation using JavaScript.
- Regular expressions for email validation.
- Event listeners for form submission and dismissal.
- JavaScript variables to prevent repeated display during the current page session.

## ⚠️ Note

This project performs front-end email validation only. It does not save email addresses or send subscriptions to a server. The dismissal state is not stored in local storage and resets when the page is refreshed.

## 👨‍💻 Author

\*\*Prashant Vishwakarma\*\*

Created as a front-end web development practice project.

## 📄 License

This project is open-source and available for learning and personal use.
