const addClassToELements = (className, ...elements) => {
  for (const element of elements) {
    element.classList.add(className);
  }
};

export default addClassToELements;
