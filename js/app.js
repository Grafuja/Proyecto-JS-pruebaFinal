function calculadora(){
  Memoria  = "0";      // initialise Memoria variable
  Actual = "0";      //   and value of Display ("Actual" value)
  Operacion = 0;      // Records code for eg * / etc.
  MAXLENGTH = 30;     // maximum number of digits before decimal!

  function AddDigito(dig)   {
    if (Actual.length > MAXLENGTH)
         { Actual = "Aargh! Muy Largo"; //limit length
         } else {
           if (    (eval(Actual) == 0)
                && (Actual.indexOf(".") == -1)
              )
             { Actual = dig;
             } else {
               Actual = Actual + dig;
             };
      };
    };
     document.calculadora.display.value = Actual;

   function Dot()                  //PUT IN "." if appropriate.
    {
     if ( Actual.length == 0)     //no leading ".", use "0."
       { Actual = "0.";
       } else
       {  if ( Actual.indexOf(".") == -1)
            { Actual = Actual + ".";
       };   };
     document.calculadora.display.value = Actual;
    }

    function Clear()                //CLEAR ENTRY
 { Actual = "0";
   document.calculadora.display.value = Actual;
 }

function AllClear()             //Clear ALL entries!
 { Actual = "0";
   Operacion = 0;                //clear Operacion
   Memoria = "0";                  //clear Memoria
   document.calculadora.display.value = Actual;
 }

 function Operate(op)            //STORE Operacion e.g. + * / etc.
 {
  if (op.indexOf("*") > -1) { Operacion = 1; };       //codes for *
  if (op.indexOf("/") > -1) { Operacion = 2; };       // slash (divide)
  if (op.indexOf("+") > -1) { Operacion = 3; };       // sum
  if (op.indexOf("-") > -1) { Operacion = 4; };       // difference

  Memory = Actual;                 //store value
  Actual = "";                     //or we could use "0"
  document.Calculator.display.value = Actual;
 }

function Calcular()            //PERFORM CALCULATION (= button)
 {
  if (Operacion == 1) { Actual = eval(Memoria) * eval(Actual); };
  if (Operacion == 2) { Actual = eval(Memoria) / eval(Actual); };
  if (Operacion == 3) { Actual = eval(Memoria) + eval(Actual); };
  if (Operacion == 4) { Actual = eval(Memoria) - eval(Actual); };
  Operacion = 0;                //clear Operacion
  Memoria    = "0";              //clear Memoria
  document.Calculator.display.value = Actual;
 }

function FixActual()
 {
  Actual = document.calculadora.display.value;
  Actual = "" + parseFloat(Actual);
  if (Actual.indexOf("NaN") != -1)
    { Actual = "mmmm no te entiendo";
    };
  document.calculadora.display.value = Actual;
 }
};
