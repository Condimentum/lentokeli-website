$(document).ready(() => {
  const url = "https://fgrhn2wld3.execute-api.eu-north-1.amazonaws.com/dev/story";
  $.ajax({
    url: url,
    type: "GET",
    success: (res) => {
      document.getElementById("story").innerHTML = "Tähän tarina."
    },
    error: (err) => {
      console.log(`Error: ${err}`)
    }
  })
});
