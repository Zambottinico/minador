const minar = document.getElementById("button");
mostrar = () => {
  document.getElementById("btn").innerHTML = btn;
  document.getElementById("info-minero").innerHTML =
    minaAuto + " btn cada " + intervalo / 1000 + " segundos";
  document.getElementById("precio1").innerHTML = precio1;
  document.getElementById("precio2").innerHTML = precio2;
  document.getElementById("precio3").innerHTML = precio3;
};

var precio1 = 50;
var precio2 = 50;
var precio3 = 50;
var btn = 0;
var mina = 1;
var minaAuto = 10;
var intervalo = 10000;
var intervaloMostrar = intervalo / 1000;

minar.addEventListener("click", (e) => {
  btn = btn + mina;
  mostrar();
});

setInterval(() => {
  {
    btn = btn + minaAuto;
    mostrar();
  }
}, intervalo);

//mejoras

//-----------------------compras----------------------------------------------------------

const minero1 = document.getElementById("minero1");
minero1.addEventListener("click", (e) => {
  if (btn >= precio1) {
    minaAuto = minaAuto + minaAuto;
    alert("comprado");
    btn = btn - precio1;
    precio1 = precio1 + (precio1 * 50) / 100;
    mostrar();
  } else {
    alert("no tienes suficientes bitcoins para comprar esto");
  }
});

const minero2 = document.getElementById("minero2");
minero2.addEventListener("click", (e) => {
  if (btn >= precio2) {
    if (intervalo >= 1000) {
      intervalo = intervalo - 500;
      console.log(intervalo);
      alert("comprado");
      btn = btn - precio2;
      precio2 = precio2 + (precio2 * 50) / 100;
    }

    mostrar();
  } else {
    alert("no tienes suficientes bitcoins para comprar esto");
  }
});

const minaManual = document.getElementById("minero3");
minaManual.addEventListener("click", (e) => {
  if (btn >= precio3) {
    mina++;
    alert("comprado");
    btn = btn - precio3;
    precio3 = precio3 + (precio3 * 50) / 100;
    mostrar();
  } else {
    alert("no tienes suficientes bitcoins para comprar esto");
  }
});
