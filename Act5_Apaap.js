// JavaScript code //
function showAlert() {
  alert("Button clicked!");
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

/* CONTACT */
const contactForm = document.querySelector('.contact-form');{
const sendBtn = document.querySelector('#send-btn');
}

fetch('/contact', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

  })
  .catch((error) => {
    console.error(error);

  });

/* footer */
footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});
footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");

}