// denver.log — lightweight contact-link helper.
document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.querySelector("#contact-link");
  // In index.html, replace href="#" with a mailto: address or profile URL.
  if (contactLink && contactLink.getAttribute("href") === "#") {
    contactLink.addEventListener("click", (event) => {
      event.preventDefault();
      contactLink.innerHTML = 'ADD YOUR CONTACT URL IN <code>index.html</code> <span>↗</span>';
    });
  }
});
