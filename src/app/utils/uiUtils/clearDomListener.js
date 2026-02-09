export default (target, func) => {
  target.addEventListener("click", () => {
    const content = document.querySelector(".content");
    while (content.lastChild) {
      content.removeChild(content.firstChild);
    }
    func();
  });
};
