const sendBtn = document.querySelector("#sendBtn");
const errorMsg = document.querySelector(".errorMsg");

const input = document.querySelector("#email");

const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

sendBtn.addEventListener("click", function () {
  if (input.value.length === 0 || !input.value.match(validation)) {
    errorMsg.style.display = "inline-block";
    errorMsg.style.color = "#ff4242";
    errorMsg.textContent = "Please enter a valid email address";
  } else {
    errorMsg.style.display = "inline-block";
    errorMsg.style.color = "#4CCD99";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
  }
});
