function validateForm() {
  var x = document.forms["Form"]["name"].value;
  var y = document.forms["Form"]["emailadress"].value;
  var z = document.forms["Form"]["subject"].value;
  if (x == "" || y== "" || z == "") {
    alert("Form must be filled out");
  }
  else{
  	alert("Thank you");
  }
}