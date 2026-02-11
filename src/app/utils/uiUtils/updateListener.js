import projectUpdater from "../../controllers/appControllers/localStorageUpdater.controller.js";

export default (target, func, arg = null) => {
  target.addEventListener("click", (e) => {
    e.preventDefault();
    if (arg !== "noupdate") {
      func(arg);
      projectUpdater();
    } else {
      func(arg);
    }
  });
};
