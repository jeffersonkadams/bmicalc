console.log("loaded!");

console.log(feet, inches, weight);

function calculateBMI(){
  var feet = document.getElementById("feet").value;
  var inches = document.getElementById("inches").value;
  var weight = document.getElementById("pounds").value;
  var heightInInches = (feet * 12) + inches;
  console.log(heightInInches, weight);
}
