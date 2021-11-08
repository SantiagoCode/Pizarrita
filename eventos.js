var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");
var pixels = 5;
var colorMouse = "blue";
var colorFlechas = "red";
var colorPunto = "yellow";
var colorLinea = "green";
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

// BOTONES
var btn_arranque = document.getElementById("puntoDeArranque");
var btn_trazo = document.getElementById("pluma");
var btn_punto = document.getElementById("marcarPunto");
var btn_recta = document.getElementById("hacerLineaRecta");

// addEventListener DE BASE
btn_arranque.addEventListener("click", activadorFlechas);
btn_trazo.addEventListener("click", activadorPluma);
btn_punto.addEventListener("click", activadorPunto);
btn_recta.addEventListener("click", activadorRecta);


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

// ACTIVADORES
function activadorFlechas()
{
  d.addEventListener("mouseup", marcar);
  document.addEventListener("keydown", calcular);
  d.removeEventListener("mousedown", activarPluma);
  d.removeEventListener("mouseup", desactivarPluma);
  d.removeEventListener("mouseup", punto);
  d.removeEventListener("mousedown", punto_A);
  d.removeEventListener("mouseup", punto_B);
}

function activadorPluma()
{
  d.addEventListener("mousedown", activarPluma);
  d.addEventListener("mouseup", desactivarPluma);
  d.removeEventListener("mouseup", marcar);
  document.removeEventListener("keydown", calcular);
  d.removeEventListener("mouseup", punto);
  d.removeEventListener("mousedown", punto_A);
  d.removeEventListener("mouseup", punto_B);
}

function activadorPunto()
{
  d.addEventListener("mouseup", punto);
  d.removeEventListener("mousedown", activarPluma);
  d.removeEventListener("mouseup", desactivarPluma);
  d.removeEventListener("mouseup", marcar);
  document.removeEventListener("keydown", calcular);
  d.removeEventListener("mousedown", punto_A);
  d.removeEventListener("mouseup", punto_B);
}
function activadorRecta()
{
  d.addEventListener("mousedown", punto_A);
  d.addEventListener("mouseup", punto_B);
  d.removeEventListener("mousedown", activarPluma);
  d.removeEventListener("mouseup", desactivarPluma);
  d.removeEventListener("mouseup", marcar);
  document.removeEventListener("keydown", calcular);
  d.removeEventListener("mouseup", punto);
}

// FUNCIONES "ACTIVADAS"
function marcar(event)
{
  // verificando donde se hizo el click respecto al documento
  var a = event.clientX;
  var b = event.clientY;
  // verificando donde esta el elemento clickado en referencia al documento
  var c = d.offsetLeft;
  var e = d.offsetTop;
  // Establecer las coordenadas que se usaran en la funcion que dibujara la linea
  xinicial = a - c;
  yinicial = b - e;
  xfinal = xinicial;
  yfinal = yinicial;
}

// A PARTIR DE ACA ES PINTAR CON LAS TECLAS
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

  dibujante(colorMouse, --xPuntoA, --yPuntoA, ++xPuntoB, ++yPuntoB);
  dibujante(colorMouse, --xPuntoA, ++yPuntoA, ++xPuntoB, --yPuntoB);

  xPuntoA = xPuntoB
  yPuntoA = yPuntoB
}

function desactivarPluma(event)
{
  d.removeEventListener("mousemove", trazar);
}

function punto(event)
{
  // verificando donde se hizo el click respecto al documento
  var mousePresionadoX = event.clientX;
  var mousePresionadoY = event.clientY;
  // verificando donde esta el elemento clickado en referencia al documento
  var marginLeft = d.offsetLeft;
  var marginTop = d.offsetTop;
  // Establecer las coordenadas que se usaran en la funcion que dibujara la linea
  xPuntoA = mousePresionadoX - marginLeft;
  yPuntoA = mousePresionadoY - marginTop;

  dibujante(colorPunto, --xPuntoA, --yPuntoA, ++xPuntoA, ++yPuntoA);
  dibujante(colorPunto, --xPuntoA, ++yPuntoA, ++xPuntoA, --yPuntoA);
  dibujante(colorPunto, --xPuntoA, yPuntoA, ++xPuntoA, yPuntoA);
}

function punto_A(event)
{
  // verificando donde se hizo el click respecto al documento
  var mousePresionadoX = event.clientX;
  var mousePresionadoY = event.clientY;
  // verificando donde esta el elemento clickado en referencia al documento
  var marginLeft = d.offsetLeft;
  var marginTop = d.offsetTop;
  // Establecer las coordenadas que se usaran en la funcion que dibujara la linea
  xPunto_A = mousePresionadoX - marginLeft;
  yPunto_A = mousePresionadoY - marginTop;
}

function punto_B(event)
{
  // verificando donde se hizo el click respecto al documento
  var mousePresionadoX = event.clientX;
  var mousePresionadoY = event.clientY;
  // verificando donde esta el elemento clickado en referencia al documento
  var marginLeft = d.offsetLeft;
  var marginTop = d.offsetTop;
  // Establecer las coordenadas que se usaran en la funcion que dibujara la linea
  xPunto_B = mousePresionadoX - marginLeft;
  yPunto_B = mousePresionadoY - marginTop;

  dibujante(colorLinea, --xPunto_A, --yPunto_A, ++xPunto_B, ++yPunto_B);
  dibujante(colorLinea, --xPunto_A, ++yPunto_A, ++xPunto_B, --yPunto_B);
}
