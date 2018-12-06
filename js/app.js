function calculadora() {
  "use strict";
    // Shortcut to get elements
    var el = function(element) {
      if (element.charAt(0) === "id") { // If passed an ID...
        return document.querySelector(element); // ... returns single element
      }

      return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };
  var display = el("#display"), // Calculator screen where result is displayed
    igual = el("#igual"), // Equal button
    on = el("#on"),//borrar pantalla
    nums = el(".num"), // List of numbers
    sum = el(".suma"), //operar suma
    resta = el(".resta"),//operador resta
    mult = el(".multiplica"),//operador multiplicador
    divide = el(".divide"),//operador división
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator,
    tecla;


  var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("id");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("id");
    }
    display.innerHTML = theNum; // Display current number

  };

  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("id");

    igual.setAttribute("id", igual.value);



  };

  var displayNum = function() {

    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Operaciones
    switch (operator) {
      case "suma":
        resultNum = oldNum + theNum;
        break;

      case "resta":
        resultNum = oldNum - theNum;
        break;

      case "mult":
        resultNum = oldNum * theNum;
        break;

      case "divide":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "Rompiste la Calculadora!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Eso no se hace!";
      }
    }

    // Display result, finally!
    display.innerHTML = resultNum;
    igual.setAttribute("id", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;

  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    display.innerHTML = "0";
  };

  /* The click events */

  function mouseClick() {
    var teclaP = "";
    teclaP.style.height = "4px";
  }

  // Add click event to numbers

 var tecla = document.getElementsByClassName("tecla");

 var clicked = function() {
     var id = this.getAttribute("id");
 };

 for (var i = 0; i < tecla.length; i++) {
     tecla[i].onclick = moveNum;
 }

  // Add click event to equal sign
  igual.onclick = displayNum;

  // Add click event to clear button
  el("#on").onclick = clearAll;

  tecla.onclick = mouseClick;

  };
