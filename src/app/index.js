import "../styles.css";
import initialisePage from "./services/uiServices/initPageLoad.service.js";
import themeSwitcher from "./controllers/uiControllers/theme.controller.js";
import gitRedirectController from "./controllers/uiControllers/gitRedirect.controller.js";

(function () {
  initialisePage();
  themeSwitcher();
  gitRedirectController();
})();
