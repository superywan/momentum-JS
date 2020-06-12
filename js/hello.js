const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const NAME_LS = "name";
const SHOWING_CN = "showing";

function saveName(txt) {
  localStorage.setItem("name", txt);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  paintName(currentValue);
  saveName(currentValue);
}

function showForm() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintName(txt) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${txt}`;
}

function loadName() {
  const currentName = localStorage.getItem(NAME_LS);
  if (currentName === null) {
    showForm();
  } else {
    paintName(currentName);
  }
}

function init() {
  loadName();
}

init();
