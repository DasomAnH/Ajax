/*const request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status === 200) {
    console.log(this);
  }
};
request.open('GET', '');
request.send();*/

let button = document.getElementById('button');
button.addEventListener('click', function () {
  console.log('click');
  button.innerText = 'Generating Doggo';

  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let image = document.createElement('img');
      image.setAttribute('src', data.message);
      image.style.width = '300px';
      document.body.appendChild(image);
      button.innerText = 'Generate Doggo';
    });
});

let select = document.getElementById('dogList');
select.addEventListener('change', function () {
  console.log('click');

  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let image = document.createElement('img');
      image.setAttribute('src', data.message);
      image.style.width = '300px';
      document.body.appendChild(image);
      button.innerText = 'Generate Doggo';
    });
});
fetch('https://dog.ceo/api/breeds/list')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.message);

    for (let i = 0; i < data.message.length; i++) {
      let option = document.createElement('option');
      option.innerText = data.message[i];
      select.appendChild(option);
    }
  });
