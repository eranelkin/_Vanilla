document.addEventListener('DOMContentLoaded', () => {
  const oldFetch = api => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        displayProjects(JSON.parse(this.responseText));
      }
    };
    xhttp.open('GET', api);
    xhttp.send();

    function displayProjects(data) {
      console.log(data);
    }
  };

  const fetchData = async api => {
    let response = await fetch(api);
    return await response.json();
  };

  const dataReady = data => {
    console.log(data);
  };

  fetchData('https://jsonplaceholder.typicode.com/posts').then(data => {
    dataReady(data);
  });

  oldFetch('https://jsonplaceholder.typicode.com/users');
});
