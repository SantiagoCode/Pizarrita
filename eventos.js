var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");
var color = "blue";

d.addEventListener("mousedown", activarPluma);
d.addEventListener("mouseup", desactivarPluma);

function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.lineWidth = 10;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.lineCap = "round";
  lienzo.closePath();
}


// A PARTIR DE ACA ES PINTAR CON LAS TECLAS
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var pixels = 5;
var colorFlechas = "red";
var xinicial = 150;
var yinicial = 150;
var xfinal = 150;
var yfinal = 150;

document.addEventListener("keydown", calcular);

function calcular(evento)
{
  switch (evento.keyCode)
  {
    case teclas.LEFT:
      // Left resta en el eje X
      xfinal = xfinal - pixels;
    break;
    case teclas.UP:
      // Up resta en el eje Y
      yfinal = yfinal - pixels;
    break;
    case teclas.RIGHT:
      // Right suma en el eje X
      xfinal = xfinal + pixels;
    break;
    case teclas.DOWN:
      // Down suma en el eje Y
      yfinal = yfinal + pixels;
    break;
  }

  dibujante(colorFlechas, xinicial, yinicial, xfinal, yfinal);
  xinicial = xfinal;
  yinicial = yfinal;
}


// A PARTIR DE ACA ES PINTAR CON EL MOUSE
function activarPluma(event)
{
  d.addEventListener("mousemove", trazar);
  // verificando donde se hizo el click respecto al documento
  var mousePresionadoX = event.clientX;
  var mousePresionadoY = event.clientY;
  // verificando donde esta el elemento clickado en referencia al documento
  var marginLeft = d.offsetLeft;
  var marginTop = d.offsetTop;
  // Establecer las coordenadas que se usaran en la funcion que dibujara la linea
  xPuntoA = mousePresionadoX - marginLeft;
  yPuntoA = mousePresionadoY - marginTop;
}

function trazar(event)
{
  // verificando donde se hizo el click respecto al documento
  var mousePresionadoX = event.clientX;
  var mousePresionadoY = event.clientY;
  // verificando donde esta el elemento clickado en referencia al documento
  var marginLeft = d.offsetLeft;
  var marginTop = d.offsetTop;
  // Establecer las coordenadas que se usaran en la funcion que dibujara la linea
  xPuntoB = mousePresionadoX - marginLeft;
  yPuntoB = mousePresionadoY - marginTop;

  // xPuntoB = xPuntoA;
  // yPuntoB = yPuntoA;

  dibujante(color, --xPuntoA, --yPuntoA, ++xPuntoB, ++yPuntoB);
  dibujante(color, --xPuntoA, ++yPuntoA, ++xPuntoB, --yPuntoB);

  xPuntoA = xPuntoB
  yPuntoA = yPuntoB
}

function desactivarPluma(event)
{
  d.removeEventListener("mousemove", trazar);
}
