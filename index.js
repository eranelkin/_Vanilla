function onInit() {
  const btn = document.createElement('button');
  btn.textContent = 'eran';
  btn.onclick = btnOnClick;
  document.body.appendChild(btn);
}

function btnOnClick() {
  console.log('click');
}
