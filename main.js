const pads = document.querySelectorAll(".reloj .contador");
const boton = document.querySelector(".boton button");
const divFormato = document.querySelector(".reloj .formato");
let formato = 0;

boton.addEventListener("click", (e) => {
  formato = formato == 0 ? 1 : 0;
  if (formato == 1) {
    e.target.innerHTML = "12 H";
  } else {
    e.target.innerHTML = "24 H";
    divFormato.hidden = true;
  }
});

const timer = setInterval(() => {
  let hora = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (formato == 1) {
    if (hora > 12) {
      hora = hora - 12;
      divFormato.innerHTML = "PM";
    } else {
      divFormato.innerHTML = "AM";
    }
    divFormato.hidden = false;
  }

  if (hora < 10) {
    hora = "0" + hora;
  }

  pads[0].innerHTML = hora;

  if (min < 10) {
    min = "0" + min;
  }
  pads[1].innerHTML = min;

  if (sec < 10) {
    sec = "0" + sec;
  }
  pads[2].innerHTML = sec;
}, 1000);