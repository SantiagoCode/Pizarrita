// TODAS MIS VARIABLES
var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");
var pixels = 5;
var grosor = 10;
var color = "black";
var xinicial;
var yinicial;
var xfinal;
var yfinal;

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

// BOTONES Y PREFERENCIAS (FORM)
var btn_arranque = document.getElementById("puntoDeArranque");
var btn_trazo = document.getElementById("pluma");
var btn_punto = document.getElementById("marcarPunto");
var btn_recta = document.getElementById("hacerLineaRecta");
var inputGrosor = document.getElementById("grosor");
var inputColor = document.getElementById("color");

// LISTENER DE LOS BOTONES Y DE LAS PREFERENCIAS (FORM)
btn_arranque.addEventListener("click", activadorFlechas);
btn_trazo.addEventListener("click", activadorPluma);
btn_punto.addEventListener("click", activadorPunto);
btn_recta.addEventListener("click", activadorRecta);
inputGrosor.addEventListener("change", cambiarGrosor);
inputColor.addEventListener("change", cambiarColor);


// FUNCION PRINCIPAL PARA DIBUJAR
function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.lineWidth = grosor;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.lineCap = "round";
  lienzo.closePath();
}
