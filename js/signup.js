function submitData() {
  var number = document.querySelector("#phone").value;
  console.log(number);
  var city = document.querySelector("#browser").value;
  console.log(city);

  localStorage.setItem("phone", number);
  localStorage.setItem("city", city);

  // document.querySelector("#phone").value = "";
  // document.querySelector("#browser").value = "";
}
