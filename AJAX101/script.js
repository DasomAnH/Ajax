const request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status === 200) {
    console.log(this);
  }
};
request.open('GET', './sample.txt');
request.send();

fetch('./sample.txt')
  .then(response => {
    return response.text();
  })
  .then(function (text) {
    const title = document.createElement('h1');
    title.textContent = text;
    document.body.appendChild(title);
  });

/*fetch('/sample.txt')
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    const title = document.createElement('h1');
    title.textContent = text;
    document.body.appendChild(title);
  });
  */
