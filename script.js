console.log("loaded!");

function calculateBMI(){
  // the + in front of document forces the returned .value to be a numbwe instead of a string (heightInInches was concatenating feet*12 and inches.)
  var feet = +document.getElementById("feet").value;
  var inches = +document.getElementById("inches").value;
  var weight = +document.getElementById("pounds").value;
  var heightInInches = (feet * 12) + inches;
  console.log(weight, feet, inches, heightInInches);

  //Formula: weight (lb) / [height (in)]^2 x 703
  var bmi = (weight / heightInInches / heightInInches) * 703;
  document.getElementById("output").innerHTML = bmi;
  console.log(bmi);
}
