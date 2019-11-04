const setCookie = (name, seconds) => {
  let date = new Date();
  date.setTime(date.getTime() + seconds * 1000);
  return `name=${name};expires=${date.toGMTString()}`;
}

const getCookie = (name) => {
  const cookies = document.cookie.split(';');

  return cookies.filter(item => {
    return item.match(`name=${name}`)
  }).join();
}

const isCookie = (name) => {
  const cookies = document.cookie.split(';');

  return cookies.filter(item => item.match(`name=${name}`)).length !== 0;
}

document.cookie = setCookie('test', 60);
console.log(isCookie('test'));
console.log(getCookie('test'));