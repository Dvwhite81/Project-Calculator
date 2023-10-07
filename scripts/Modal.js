const openModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
};

const closeModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

const setUpModal = () => {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  modal.id = "myModal";

  const closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.textContent = "×";
  closeSpan.addEventListener("click", closeModal);

  const gif = document.createElement("div");
  gif.innerHTML = `<iframe src="https://giphy.com/embed/S2S0ZDytY6yDm" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;

  modal.append(closeSpan);
  modal.append(gif);
  body.append(modal);
};

export { setUpModal, openModal, closeModal };
