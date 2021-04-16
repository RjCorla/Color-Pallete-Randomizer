const colorWrapper = document.querySelector('.color-wrapper');
const btn = document.querySelector('.btn');
const alertBox = document.querySelector('.alertBox');

// functions
const copyColor = (colorHex) => {
  el = document.createElement('input');
  el.type = 'text';
  el.value = colorHex;

  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(el);
  alertBox.classList.toggle('active');

  setTimeout(() => {
    alertBox.classList.toggle('active');
  }, 1000);

  alertBox.innerHTML = `${el.value} copied`;
};

const randomColor = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  colorWrapper.innerHTML = '';

  //   color one
  const colorOne = document.createElement('div');
  colorOne.style.background = colors[randomIndex][0];
  colorOne.classList.add('color-one');

  const colorone = document.createElement('h3');
  colorone.innerText = colors[randomIndex][0];

  const colorhexone = document.createElement('h4');
  colorhexone.innerText = 'copy hex value';

  colorOne.append(colorone, colorhexone);

  colorOne.addEventListener('click', () => copyColor(colors[randomIndex][0]));

  //   color two
  const colorTwo = document.createElement('div');
  colorTwo.style.background = colors[randomIndex][1];
  colorTwo.classList.add('color-two');

  const colortwo = document.createElement('h3');
  colortwo.innerText = colors[randomIndex][1];

  const colorhextwo = document.createElement('h4');
  colorhextwo.innerText = 'copy hex value';
  colorTwo.append(colortwo, colorhextwo);

  colorTwo.addEventListener('click', () => copyColor(colors[randomIndex][1]));

  //   append
  colorWrapper.append(colorOne, colorTwo);
};

// event listeners
window.addEventListener('load', () => randomColor(colors));
btn.addEventListener('click', () => randomColor(colors));
