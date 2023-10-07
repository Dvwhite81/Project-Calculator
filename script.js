import { htmlSetup } from "./scripts/HTML.js";
import { calculatorSetup } from "./scripts/Calculator.js";
import { setUpModal } from "./scripts/Modal.js";

const GO = () => {
  htmlSetup();
  setUpModal();
  calculatorSetup();
};

GO();
