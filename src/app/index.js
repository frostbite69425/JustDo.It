import "../styles.css";
import initialisePage from "./services/uiServices/initPageLoad.service.js";
import themeSwitcher from "./controllers/uiControllers/theme.controller.js";

(function () {
  initialisePage();
  themeSwitcher();
})();
