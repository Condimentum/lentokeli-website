$(document).ready(() => {
  fetchStory();
  getForecast();
});

const fetchStory = async () => {
  const url = "https://4g9tvinv02.execute-api.eu-north-1.amazonaws.com/dev/story";
  fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => document.getElementById("story").innerHTML = data.text)
    .catch(err => console.log(err));
}

const getForecast = async () => {
  const url = "https://5vw6faev23.execute-api.eu-north-1.amazonaws.com/dev/forecast";
  fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => renderForecast(data.Items))
    .catch(err => console.log(err));
}

const renderForecast = (items) => {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const tomorrow = (new Date(now.getTime() + 86400000)).toISOString().split('T')[0];
  const dayAfterTomorrow = (new Date(now.getTime() + 172800000)).toISOString().split('T')[0];
  const permillesToday = items.find(item => item.date == today).forecast;
  const permillesTomorrow = items.find(item => item.date == tomorrow).forecast;
  const permillesDayAfterTomorrow = items.find(item => item.date == dayAfterTomorrow).forecast;
  document.getElementById("today").innerHTML = `${permillesToday} ‰`;
  document.getElementById("tomorrow").innerHTML = `${permillesTomorrow} ‰`;
  document.getElementById("day-after-tomorrow").innerHTML = `${permillesDayAfterTomorrow} ‰`;
  document.getElementById("icon-today").className = iconMap[permillesToday];
  document.getElementById("icon-tomorrow").className = iconMap[permillesTomorrow];
  document.getElementById("icon-day-after-tomorrow").className = iconMap[permillesDayAfterTomorrow];
}

const iconMap = {
  '0.00': 'fas fa-cloud fa-3x',
  '0.37': 'fas fa-cloud-sun fa-3x',
  '0.74': 'fas fa-sun fa-3x',
  '1.11': 'fas fa-cloud-sun-rain fa-3x',
  '1.48': 'fas fa-cloud-showers-heavy fa-3x',
  '1.85': 'fas fa-poo-storm fa-3x'
}
