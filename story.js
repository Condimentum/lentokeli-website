$(document).ready(() => {
  const url = "https://4g9tvinv02.execute-api.eu-north-1.amazonaws.com/dev/story";
  fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => document.getElementById("story").innerHTML = data.text)
    .catch(err => console.log(err));
});
