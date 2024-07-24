//Solution 2
// There is no need to wait for style sheets, graphics, or sub frames to finish loading before the DOMContentLoaded event occurs after the main HTML content has been fully loaded and processed. The event is non-cancelable and generic in JavaScript.

// When referencing elements in the body while placing JavaScript in the head of the page, we must handle the DOMContentLoaded event. When a page has loaded completely, a different event called load should be invoked. When DOMContentLoaded is more appropriate, it is a common mistake to use load instead.
document.addEventListener("DOMContentLoaded", () => {
  const countElement = document.getElementById("count");
  let count = 0;

  document.getElementById("increment").addEventListener("click", () => {
    count++;
    countElement.textContent = count;
  });
  document.getElementById("decrement").addEventListener("click", () => {
    count--;
    countElement.textContent = count;
  });
  document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    countElement.textContent = count;
  });
});
