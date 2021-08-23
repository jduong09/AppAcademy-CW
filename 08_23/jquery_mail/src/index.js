const Router = require("./router.js");
const Inbox = require("./inbox.js");
const Sent = require("./sent.js");
const Compose = require("./compose.js");

document.addEventListener("DOMContentLoaded", () => {
  const li = document.querySelectorAll("li");
  li.forEach(htmlElement => {
    htmlElement.addEventListener("click", () => {
      const innerText = htmlElement.innerText.toLowerCase();
      window.location.hash = innerText;
    });
  });

  const content = document.querySelector(".content");
  const router = new Router(content, routes);
  router.start();
  window.location.hash = "#inbox";
});

const routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
};