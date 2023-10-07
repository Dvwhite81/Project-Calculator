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
  const previous = buildElement("div", {
    id: "previous-operand",
  });
  previous.setAttribute("data", "previous-operand");
  const current = buildElement("div", {
    id: "current-operand",
  });
  current.setAttribute("data", "current-operand");
  display.append(previous, current);
  return display;
};

const createButtons = () => {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const ops = ["+", "−", "×", "÷"];
  const [clear, del, equals] = ["CLEAR", "DEL", "="];
  const smiley = "🤪";
  const buttons = [];
  nums.forEach((num) => buttons.push(createButton("number", num)));
  ops.forEach((op) => buttons.push(createButton("operation", op)));
  buttons.push(
    createButton("clear", clear),
    createButton("delete", del),
    createButton("equals", equals),
    createButton("smiley", smiley)
  );
  return buttons;
};

const createButton = (type, char) => {
  const button = buildElement("button", {
    id: `btn-${char}`,
    className: `btn ${type}-btn`,
    textContent: char,
  });
  button.setAttribute("data", type);
  return button;
};

export { htmlSetup };
