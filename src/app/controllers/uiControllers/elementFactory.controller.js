import setParentAndChild from "../../utils/uiUtils/appendChildren.js";
import insertTextIntoElement from "../../utils/uiUtils/insertTextIntoElement.js";
import makeElementWithClass from "../../utils/uiUtils/makeElementWithClass.js";
import setStyleOfElement from "../../utils/uiUtils/setStyleOfElement.js";

function elementFactory(elementType, className) {
  const domElement = makeElementWithClass(elementType, className);

  function insertText(text) {
    insertTextIntoElement(domElement, text);
  }

  function setStyle(styleList) {
    setStyleOfElement(styleList, domElement);
  }

  function setChildren(...children) {
    setParentAndChild(domElement, children);
  }

  return { domElement, insertText, setStyle, setChildren };
}

export default elementFactory;
