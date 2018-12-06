const caculadora = () => {
  let el = function(element) {
    if (element.charAt(0) === "alt") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

    const display = el("#display"), // Calculator screen where result is displayed
    const igual = el("#igual"), // Equal button
    const on = el("#on"),//borrar pantalla
    const nums = el(".num"), // List of numbers
    const sum = el(".suma"), //operar suma
    const resta = el(".resta"),//operador resta
    const mult = el(".multiplica"),//operador multiplicador
    const divide = el(".divide"),//operador división
    const theNum = "", // Current number
    const oldNum = "", // First number
    const resultNum, // Result
    operator,
    tecla;

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

  $(document).ready(function() {
      $('img').click(function () {
          var alt = $(this).attr("alt")
          document.getElementById('display').innerHtml = alt;
          console.log(alt);
      });
  });

  function mouseClick() {
    var teclaP = "";
    teclaP.style.height = "4px";
  }

  for (var i = 0; i < tecla.length; i++) {
      tecla[i].onclick = moveNum;
  }
};
