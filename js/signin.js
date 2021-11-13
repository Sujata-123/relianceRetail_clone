function submitData() {
  var number = document.querySelector("#phone").value;
  console.log(number);
  var city = document.querySelector("#browser").value;
  console.log(city);

  var number1 = localStorage.getItem("phone");
  var city1 = localStorage.getItem("city");
  if (number == number1 && city == city1) {
    window.location.href = "index.html";
  } else {
    alert("number and city is incorrect need to signup");
  }
}
