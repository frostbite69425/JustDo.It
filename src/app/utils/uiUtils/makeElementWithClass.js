const makeElementWithClass = (element, className) => {
  const domElement = document.createElement(element);
  if (className == " ") {
    return domElement;
  }
  domElement.classList.add(className);

  return domElement;
};

export default makeElementWithClass;
