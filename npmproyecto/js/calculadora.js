window.onload = function(){
	var colorAmarillo = function(){
			this.style.background = "yellow"
}
var colorBlanco = function(){
			this.style.background = "white"
}


var operador =""
var numeros = function(){
	var valor=this.value;

	if (operador=="") {
		var valorInput=document.getElementById("operando1").value;
		if (valorInput == "0") {
			document.getElementById("operando1").value="";
		}
		document.getElementById("operando1").value+=valor;
	}
	else{
		var valorInput=document.getElementById("operando2").value;
		if (valorInput == "0") {
			document.getElementById("operando2").value="";
		}
		document.getElementById("operando2").value+=valor;
	}
}

var operadores= function(){
	operador = this.value
}
var resultadoIgual= function(){
	oper1=document.getElementById('operando1').value
	oper2=document.getElementById('operando2').value
	document.getElementById('resultado').value=eval(oper1 + operador + oper2)
}
var reinicio = function(){
	document.getElementById('operando1'.value="0")
	document.getElementById('operando2'.value="0")
	document.getElementById('resultado'.value="0")
	operador=""
}


var operando1 = document.getElementById("operando1")
operando1.addEventListener("focus", colorAmarillo)
operando1.addEventListener("focusout", colorBlanco)

var operando2 = document.getElementById("operando2")
operando2.addEventListener("focus", colorAmarillo)
operando2.addEventListener("focusout", colorBlanco)


var operando1 = document.getElementById("operando1")
var operando2 = document.getElementById("operando2")
var resultado = document.getElementById("resultado")
var uno=document.getElementById("uno")
var dos=document.getElementById("dos")
var tres=document.getElementById("tres")
var cuatro=document.getElementById("cuatro")
var cinco=document.getElementById("cinco")
var seis=document.getElementById("seis")
var siete=document.getElementById("siete")
var ocho=document.getElementById("ocho")
var nueve=document.getElementById("nueve")

uno.addEventListener("click", numeros)
dos.addEventListener("click", numeros)
tres.addEventListener("click", numeros)
cuatro.addEventListener("click", numeros)
cinco.addEventListener("click", numeros)
seis.addEventListener("click", numeros)
siete.addEventListener("click", numeros)
ocho.addEventListener("click", numeros)
nueve.addEventListener("click", numeros)

suma.addEventListener("click", operadores)
resta.addEventListener("click", operadores)
multiplicacion.addEventListener("click", operadores)
division.addEventListener("click", operadores)
reiniciar.addEventListener("click", reinicio)

igual.addEventListener("click", resultadoIgual)
reiniciar.addEventListener("click", reiniciar)
}