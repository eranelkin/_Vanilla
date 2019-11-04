document.addEventListener('DOMContentLoaded', () => {
  var chatTimeList = document.querySelectorAll('.message .time');

  for (let i = 0; i < chatTimeList.length; i++) {
    chatTimeList[i].innerHTML = moment().format('kk:mm A');
  }

  var chatContainer = document.querySelector('.chat-container');
  var form = document.querySelector('.bottom-bar');

  form.addEventListener('submit', newMessage);

  function newMessage(e) {
    var input = document.querySelector('.txt-msg');
    if (input.value) {
      var newMsg = document.createElement('div');

      newMsg.classList.add('message', 'sent');
      newMsg.innerHTML = buildMsg(input.value);

      chatContainer.appendChild(newMsg);
      input.value = '';
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    e.preventDefault();
  }

  function buildMsg(msgText) {
    return (
      `<span class="msg-text">${msgText}</span>` +
      `<div class="time">${moment().format('kk:mm A')}</div>`
    );
  }
});
