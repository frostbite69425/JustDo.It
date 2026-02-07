export default (styleList, ...targets) => {
  for (const target of targets) {
    for (const property in styleList) {
      target.style[property] = `${styleList[property]}`;
    }
  }
};
