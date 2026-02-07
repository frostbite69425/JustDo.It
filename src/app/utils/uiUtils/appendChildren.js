export default function setParentAndChild(parentSelector, children) {
  for (let child of children) {
    parentSelector.appendChild(child);
  }
}
