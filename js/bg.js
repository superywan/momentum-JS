const body = document.querySelector("body"),
  IMG_NUM = 5;

function paintBackground(i) {
  const img = new Image();
  console.log(i);
  img.src = `img/background${i}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintBackground(randomNumber);
}
init();
