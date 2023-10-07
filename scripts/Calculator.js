import { openModal } from "./Modal.js";

class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") this.compute();
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (this.operation) {
      case "+":
        result = prev + curr;
        break;
      case "−":
        result = prev - curr;
        break;
      case "×":
        result = prev * curr;
        break;
      case "÷":
        result = prev / curr;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currOpText.textContent = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.prevOpText.textContent = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.prevOpText.textContent = "";
    }
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
}

const calculatorSetup = () => {
  const numberBtns = document.querySelectorAll('[data="number"]');
  const operatorBtns = document.querySelectorAll('[data="operation"]');
  const equalsBtn = document.querySelector('[data="equals"]');
  const deleteBtn = document.querySelector('[data="delete"]');
  const clearBtn = document.querySelector('[data="clear"]');
  const prevOpText = document.querySelector('[data="previous-operand"]');
  const currOpText = document.querySelector('[data="current-operand"]');
  const smileyBtn = document.querySelector('[data="smiley"]');

  const calculator = new Calculator(prevOpText, currOpText);
  numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator.appendNumber(btn.textContent);
      calculator.updateDisplay();
    });
  });
  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator.chooseOperation(btn.textContent);
      calculator.updateDisplay();
    });
  });
  equalsBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
  });
  clearBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });
  deleteBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
  });
  smileyBtn.addEventListener("click", () => {
    openModal();
  });
};

export { Calculator, calculatorSetup };
