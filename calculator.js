function changeBackground(operand) {
  document.getElementById("plus").style.background = "orange";
  document.getElementById("minus").style.background = "orange";
  document.getElementById("multiple").style.background = "orange";
  document.getElementById("divide").style.background = "orange";
  document.getElementById(operand).style.background = "red";
  document.getElementById("number2").focus();
  var Number2 = parseFloat(document.getElementById("number2").value);
  if (Number2 || Number2 === 0) {
    calc(operand);
  };
}

function calc(operand) {
  var Number1 = parseFloat(document.getElementById("number1").value);
  var Number2 = parseFloat(document.getElementById("number2").value);

  var result_plus = Number1 + Number2;
  var result_minus = Number1 - Number2;
  var result_multiple = Number1 * Number2;
  var result_divide = Number1 / Number2;

  if (operand == "plus") {
    document.getElementById("result").innerHTML = Number1 + "+" + Number2 + "=" + "<b>" + result_plus +"</b>";
  } else if (operand == "minus") {
    document.getElementById("result").innerHTML = Number1 + "&#8211;" + Number2 + "=" + "<b>" + result_minus +"</b>";
  } else if (operand == "multiple") {
    document.getElementById("result").innerHTML = Number1 + "&#215;" + Number2 + "=" + "<b>" + result_multiple +"</b>";
  } else if (operand == "divide") {
    document.getElementById("result").innerHTML = Number1 + "&#247;" + Number2 + "=" + "<b>" + result_divide +"</b>";
  } 
};





