function myfunction(){
  window.open("https://twitter.com/axiom_themes");
}
function face(){
  window.open("https://www.facebook.com/AxiomThemes/");
}
function cart(){
  alert("No product inside cart")
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function orgbtn() {
  var dots = document.getElementById("dot");
  var moreText = document.getElementById("mores");
  var btnText = document.getElementById("orgBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function checkboxbtn(){
  window.location.href = "mailto:studentwhitehatjr1709@gmail.com";
}
function login_form(){
  window.open("form.html");
}
