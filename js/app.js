var Calculadora = {
   displayValor: "0",
   newNum: 0, // Numero actual
   cadena: 'XXX', // Cadena de numeros anteriores
   resultNum: 0,
   simbolo:'',
   simboloAnterior: 'XXX',
   // Metodo de Inicializar
   	init: function(){
   		this.buscarTecla('teclado')
   	},
//metodo presiono teclas
   buscarTecla: function(selector){
     var teclas = document.querySelectorAll('.tecla')
     for(i=0;i<teclas.length;i++){
       teclas[i].onclick = this.pressTecla
       teclas[i].onmouseleave = this.leaveTecla
     }
   },
   //Achica la tecla
   leaveTecla: function(event){
     aumentarTamanoTecla(event.target)
   },

//metodo llamado funcion de teclas
   pressTecla: function(event){
     let pantalla = document.getElementById('display');
     if(Number(pantalla.innerHTML) === Calculadora.cadena){
       pantalla.innerHTML = 0;
     }
     if (event.target.id == "1" || event.target.id == "2" || event.target.id == "3"
 			|| event.target.id == "4" || event.target.id == "5" || event.target.id == "6"
 			|| event.target.id == "7" || event.target.id == "8" || event.target.id == "9"
 			|| event.target.id == "0") {
       mostrarNumero(event.target.id)
     }
     if (event.target.id == 'on'){
       clearPantalla()
     }
     if (event.target.id == 'punto'){
       incluirPunto()
     }
     if (event.target.id == 'igual'){
       resultado()
     }

     if(event.target.id == "sign"){
       agregarSigno()
     }
     if(event.target.classList.contains('sign')) {
       let simbolo = '';
       if (event.target.id == "mas"){
        simbolo = '+'
       Calculadora.simbolo = simbolo;
     }else if (event.target.id == "menos"){
        simbolo = '-'
       Calculadora.simbolo = simbolo;
     }else if (event.target.id == "por") {
        simbolo = '*'
       Calculadora.simbolo = simbolo;
     }else if (event.target.id == "dividido") {
        simbolo = '/'
       Calculadora.simbolo = simbolo;
      }
      console.log(Calculadora.simbolo);
      console.log(Calculadora.simboloAnterior);
      simbolos(simbolo);
      console.log(Calculadora.simbolo);
      console.log(Calculadora.simboloAnterior);
     }
    disminuirTamanoTecla(event.target)
   }
 }
 //Muestra los números en display
   function mostrarNumero(newNum){
     Calculadora.newNum = 0;
     let newNumNew = newNum;
     let pantalla = document.getElementById('display');
       if (pantalla.innerHTML.length < 8) {
           if (pantalla.innerHTML == 0 && newNumNew != 0){
             pantalla.innerHTML = newNumNew
           } else if(pantalla.innerHTML != 0){
             pantalla.innerHTML = pantalla.innerHTML + newNumNew
           }
         }
       Calculadora.newNum = pantalla.innerHTML;
   }
//Funcion llamada al presinar cualquier botón tipo sign (+,-,*,/). Además define si mostrar un resultado final o seguir una operación en cadena
    function simbolos(simbolo){
      let nuevoSimbolo = simbolo;
      let simboloAnterior = Calculadora.simboloAnterior;
      if (simboloAnterior === 'XXX') {
        operar(nuevoSimbolo);
      }else if (simboloAnterior != 'XXX'){
        Calculadora.simbolo = 'XXX';
        console.log(Calculadora.simbolo);
        console.log(Calculadora.simboloAnterior);
        operar(simboloAnterior);
      }
    }
    function operar(simbolo) {
      let pantalla = document.getElementById('display');
       if (Calculadora.cadena === 'XXX') {
         Calculadora.cadena =  pantalla.innerHTML;
         pantalla.innerHTML = 0;
         Calculadora.simbolo = 'XXX';
         Calculadora.simboloAnterior = simbolo;
         console.log(Calculadora.simbolo);
         console.log(Calculadora.simboloAnterior);
       } else if (Calculadora.cadena != 'XXX'){
         pantalla.innerHTML = 0;
         console.log(Calculadora.simbolo);
         console.log(Calculadora.simboloAnterior);
         resultado();
        }
   }
   //funcion que realiza un llamado a la operación con las variables necesarias
   function resultado(){
     let pantalla = document.getElementById('display');
     let simbolo = Calculadora.simbolo;
     let simboloAnterior = Calculadora.simboloAnterior;
     let cadena = Number(Calculadora.cadena);
     let newNum = Number(Calculadora.newNum);
     if (cadena ==='XXX'){
       pantalla.innerHTML = Calculadora.newNum;
     }else if (Calculadora.simboloAnterior === 'XXX'){
       operaciones(cadena, newNum, simbolo);
       if (Calculadora.resultNum < 99999999){
         pantalla.innerHTML = Calculadora.resultNum;
         Calculadora.cadena = Calculadora.resultNum;
       } else {
        pantalla.innerHTML = 'Muy largo';
       }
       Calculadora.simbolo = 'XXX';
       Calculadora.simboloAnterior = simbolo;
       Calculadora.resultNum = 0;
       Calculadora.newNum = 0;
     } else if (Calculadora.simbolo === 'XXX'){
       console.log(Calculadora.simbolo);
       console.log(Calculadora.simboloAnterior);
       operaciones(cadena, newNum, simboloAnterior);
       if (Calculadora.resultNum < 99999999){
         pantalla.innerHTML = Calculadora.resultNum;
         Calculadora.cadena = Calculadora.resultNum;
       } else {
        pantalla.innerHTML = 'Muy largo';
       }
       Calculadora.simbolo = 'XXX';
       Calculadora.simboloAnterior = simbolo;
       Calculadora.resultNum = 0;
       Calculadora.newNum = 0;
     }
   }
   //funcion que realiza las operaciones requeridas
   function operaciones(cadena,newNum, simbolo){
     if (simbolo === '+'){
       Calculadora.resultNum = cadena + newNum;
     } else if (simbolo === '-') {
       Calculadora.resultNum = cadena - newNum;
     } else if (simbolo === '*') {
       Calculadora.resultNum = cadena * newNum;
     } else if (simbolo === '/') {
       Calculadora.resultNum = cadena / newNum;
     }
     return Calculadora.resultNum;
     Calculadora.cadena = Number(Calculadora.resultNum);
   }
   //función que incluye el punto en la calculadora
   function incluirPunto(){
     var existe = "1"
   	var pantalla = document.getElementById('display')
   	for(i=0;i<pantalla.innerHTML.length;i++){
   		if (pantalla.innerHTML[i] == "."){
   			existe = "0"
   		}
   	}
    if(existe == "1" && pantalla.innerHTML.length < 6){
      pantalla.innerHTML = pantalla.innerHTML + "."
    }
  }
  //función que deja todos los valores en valor original
    function clearPantalla(){
      let pantalla = document.getElementById('display');
      pantalla.innerHTML = 0;
      Calculadora.cadena = 'XXX';
      Calculadora.newNum = 0;
    }
    //Cambia el simbolo al numero en pantalla
    function agregarSigno(){
    	var pantalla = document.getElementById('display')
    		pantalla.innerHTML *= -1;
    }

    function aumentarTamanoTecla(elementoDOM){
    	elementoDOM.style.padding = "0px"
    }
    function disminuirTamanoTecla(elementoDOM){
    	elementoDOM.style.padding = "1px"
    }
Calculadora.init()
