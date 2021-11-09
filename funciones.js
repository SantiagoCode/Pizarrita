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

// A PARTIR DE ACA ES PINTAR CON LAS TECLAS
// Esta funcion define el punto de inicio del trazo con el OnMouseUp
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


// A PARTIR DE ACA ES PINTAR PUNTOS
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

  dibujante(color, --xPuntoA, --yPuntoA, ++xPuntoA, ++yPuntoA);
  dibujante(color, --xPuntoA, ++yPuntoA, ++xPuntoA, --yPuntoA);
  dibujante(color, --xPuntoA, yPuntoA, ++xPuntoA, yPuntoA);
}


// A PARTIR DE ACA ES PINTAR LINEAS RECTAS
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

  dibujante(color, --xPunto_A, --yPunto_A, ++xPunto_B, ++yPunto_B);
  dibujante(color, --xPunto_A, ++yPunto_A, ++xPunto_B, --yPunto_B);
}
