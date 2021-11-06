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

document.addEventListener("keyup", dibujar);

function dibujar(evento)
{
  switch (evento.keyCode)
  {
    case teclas.LEFT:
      // Left resta en el eje X
      xfinal = xfinal - pixels;
      dibujante(color, xinicial, yinicial, xfinal, yfinal);
      xinicial = xfinal;
    break;
    case teclas.UP:
      // Up resta en el eje Y
      yfinal = yfinal - pixels;
      dibujante(color, xinicial, yinicial, xfinal, yfinal);
      yinicial = yfinal;
    break;
    case teclas.RIGHT:
      // Right suma en el eje X
      xfinal = xfinal + pixels;
      dibujante(color, xinicial, yinicial, xfinal, yfinal);
      xinicial = xfinal;
    break;
    case teclas.DOWN:
      // Down suma en el eje Y
      yfinal = yfinal + pixels;
      dibujante(color, xinicial, yinicial, xfinal, yfinal);
      yinicial = yfinal;
    break;
  }
}
