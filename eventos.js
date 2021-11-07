var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");

function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var pixels = 5;
var color = "blue";
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

  dibujante(color, xinicial, yinicial, xfinal, yfinal);
  xinicial = xfinal;
  yinicial = yfinal;
}

// PRUEBA CON EL MOUSE
d.addEventListener("mousedown", ahoraSi);
d.addEventListener("mouseup", ahoraNo);

function ahoraSi(evento)
{
  var mousePresionadoX = evento.clientX;
  var mousePresionadoY = evento.clientY;

  var marginLeft = d.offsetLeft;
  var marginTop = d.offsetTop;

  realLeft = mousePresionadoX - marginLeft;
  realTop = mousePresionadoY - marginTop;
}

function ahoraNo(evento)
{
  var mouseNoPresionadoX = evento.clientX;
  var mouseNoPresionadoY = evento.clientY;

  var marginLeftB = d.offsetLeft;
  var marginTopB = d.offsetTop;

  realLeftB = mouseNoPresionadoX - marginLeftB;
  realTopB = mouseNoPresionadoY - marginTopB;

  dibujante(color, realLeft, realTop, realLeftB, realTopB);

  // Hacemos que el ultimo ´punto de dibujo sea el primero
  xinicial = realLeftB;
  yinicial = realTopB;

  // Reiniciamos el trazo
  xfinal = xinicial;
  yfinal = yinicial;
}
