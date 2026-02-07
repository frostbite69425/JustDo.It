import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";

function test() {
  const newElement = elementFactory("div", "test");
  newElement.insertText("hi");
  newElement.setStyle({ color: "white" });
  const content = document.querySelector(".content");
  content.appendChild(newElement.domElement);
}

export default test;
