const htmlSetup = () => {
  const body = document.querySelector("body");
  const container = createContainer();
  const calculator = createCalculator();
  const [displaySection, buttonSection] = createSections();
  const display = createDisplay();
  displaySection.append(display);
  const buttons = createButtons();
  buttons.forEach((button) => buttonSection.append(button));
  calculator.append(displaySection, buttonSection);
  container.append(calculator);
  body.append(container);
};

const buildElement = (type, args) => {
  const element = document.createElement(type);
  for (let key in args) element[key] = args[key];
  return element;
};

const createContainer = () => {
  const container = buildElement("div", {
    id: "main-container",
    className: "container",
  });
  return container;
};

const createCalculator = () => {
  const calculator = buildElement("div", { id: "calculator" });
  return calculator;
};

const createSections = () => {
  const displaySection = buildElement("div", {
    id: "display-container",
    className: "container",
  });
  const buttonSection = buildElement("div", {
    id: "button-container",
    className: "container",
  });
  return [displaySection, buttonSection];
};

const createDisplay = () => {
  const display = buildElement("div", {
    id: "display",
  });
  return display;
};

const createButtons = () => {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const ops = ["+", "−", "×", "÷"];
  const funcs = ["CLEAR", "DEL"];
  const [posNeg, equals, decimal] = ["±", "=", "."];
  const buttons = [];
  nums.forEach((num) => buttons.push(createButton("num", num)));
  ops.forEach((op) => buttons.push(createButton("op", op)));
  funcs.forEach((func) => buttons.push(createButton("func", func)));
  buttons.push(createButton("posneg", posNeg));
  buttons.push(createButton("equals", equals));
  buttons.push(createButton("decimal", decimal));
  return buttons;
};

const createButton = (type, char) => {
  const button = buildElement("button", {
    id: `btn-${char}`,
    className: `btn ${type}-btn`,
    textContent: char,
  });
  return button;
};

export { htmlSetup };
