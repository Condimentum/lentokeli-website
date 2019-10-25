$(document).ready(() => {
  const url = "https://fgrhn2wld3.execute-api.eu-north-1.amazonaws.com/dev/story";
  httpGet(url, 'json', false, (res) => {
    document.getElementById("story").innerHTML = "Tähän tarina."
  }, (err) => {
    console.log(err);
  });
});

const httpGet = (theUrl) =>
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
