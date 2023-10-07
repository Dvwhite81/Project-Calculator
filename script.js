import { htmlSetup } from "./scripts/HTML.js";
import { listenerSetup } from "./scripts/Listeners.js";

const GO = () => {
  htmlSetup();
  listenerSetup();
};

GO();
