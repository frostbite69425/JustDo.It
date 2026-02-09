import projectUpdater from "../../controllers/appControllers/localStorageUpdater.controller.js";

export default (target, func, arg = null) => {
  target.addEventListener("click", () => {
    func(arg);
    projectUpdater();
  });
};
