(function (w) {
  // setInterval(() => {
  //   newMessage("time");
  // }, 1000);

  const chatTimeList = document.querySelectorAll('.message .time');

  for (let i = 0; i < chatTimeList.length; i++) {
    chatTimeList[i].innerHTML = moment().format('kk:mm A');
  }

  var chatContainer = document.querySelector('.chat-container');
  var form = document.querySelector('.bottom-bar');

  form.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    var input = document.querySelector('.txt-msg');

    newMessage(input.value);
    input.value = '';
    e.preventDefault();
  }

  function newMessage(txtMsg) {
    if (txtMsg) {
      var newMsg = document.createElement('div');

      newMsg.classList.add('message', 'sent');
      newMsg.innerHTML = buildMsg(txtMsg);

      chatContainer.appendChild(newMsg);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  function buildMsg(txtMsg) {
    return (
      `<span class="msg-text">${txtMsg}</span>` +
      `<div class="time">${moment().format('kk:mm A')}</div>`
    );
  }
})(window);