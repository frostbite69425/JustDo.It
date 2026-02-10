import projectUpdater from "../../controllers/appControllers/localStorageUpdater.controller.js";

import Project from "../appUtils/ProjectClass.js";

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
