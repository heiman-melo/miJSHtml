// 0) introduccion codepen.io para crear codigo en linea uno guarda y el le da un link y ese se puede compartir video 80
// 1) codigo del boton del menu hamburguesa
// 2) reloj digital
// 3) alarma digital
// 4) shorcuts

// observaciones 
// al importar y exportar archivos javaScript es recomendable abrir el proyecto con con un servidor local entorno de servidor web

// 1) codigo del boton del menu hamburguesa
// (".panel-btn *") espacio * es un selector que me indica que tome todo lo que esta dentro del contenedor boton
// let texto = "son las seis de la mañana sirvame otro trago de caña no me corra cantinero";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);
import hamburgerMenu from "./js/1_menu-hamburguesa.js";
import {relojDigital} from "./js/2_reloj-digital.js";
import alarmaDigital from "./js/3_alarma-digital.js";

const d = document;
d.addEventListener("DOMContentLoaded", () => {
  // 1) menu hamburguesa
  hamburgerMenu(".panel-btn",".panel",".menu a");

  // 2) reloj digital
  relojDigital("#activar-reloj","#reloj","#desactivar-reloj");

  // 3) alarma digital
  alarmaDigital("#activar-alarma","#alarma","#desactivar-alarma","#siuuu","#detenerSiuuu","#siuuuSonido","#explicaSiuuu","#detenerExplicaSiuuu","#explicaSiuuuSonido");

  // 4) shorcuts personalizados
  ((d) => {
    // d.addEventListener("keydown", (e) => {
    //   e.type     // tipo de evento
    //   e.key      // letra tecleada
    //   e.keyCode  // numero que coresponde a la tecla
    //   e.which    // parecido al keyCode
    //   console.log(e);
    //   e.ctrlKey  // true o false si la tecla ctrl fue tecleada o no 
    //   e.altKey   // true o false
    //   e.shiftKey // true o false
    //   if (e.altKey  && e.key=== "a" ){
    //     alert("Haz lanzado una alerta con el teclad");
    //   }
    // });
  })(d);

  // 5) Eventos del Teclado
  ((d) => {
    let x = 0;
    let y = 0;
    d.addEventListener("keydown", (e) => {
      const $ball = d.querySelector(".ball"),
        $stage = d.querySelector(".stage"),
        limitsBall = $ball.getBoundingClientRect(), // aqui estamos obteniendo el valor en que esta posicionado el elemento 
        limitsStage = $stage.getBoundingClientRect();

      switch (e.keyCode) {
        case 37:
          //("left")
          if (limitsBall.left > limitsStage.left) {
            e.preventDefault(); // este es porque hay un scrooll entonces no solo se movera la bola sino el escrooll tambien y con esto solo la bola 
            x--
          };
          break;
        case 38:
          //("up")
          if (limitsBall.top > limitsStage.top) {
            e.preventDefault();
            y--;
          }
          break;
        case 39:
          //("rigth");
          if (limitsBall.right < limitsStage.right) {
            e.preventDefault();
            x++;
          }
          break;
        case 40:
          //("down");
          if (limitsBall.bottom < limitsStage.bottom) {
            e.preventDefault();
            y++;
          }
        default: // si no se ejecuta ninguna de kas sentencias que se ejecute lo que yo coloque en default
          break;
      }
      $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`; // una propiedad css que me traslada de position un elemeto

    });
  })(d);

  // 6) cuenta regresiva date
   ((d) => {
    // let id = "countdown";
    // // let limitDate = "jun 03,2023 03:23:19"
    // let limitDate = "jan 28,2023 24:00:00";
    // let finalMessage = "Feliz cumpleaños heiman castro";
    // const $countdown = d.getElementById(id);
    // coundownDate = new Date(limitDate).getTime();// que pasa al pasarle la fecha
    // let countdownTempo = setInterval(()=>{
    // let now = new Date().getTime();
    // let limitTime = coundownDate-now; // tiempo en milisegundos va disminullendo a medida que la hora actual aumenta
    // let days = ("0" + Math.floor(limitTime/(1000*60*60*24)))// Math.floor(6.999)=6 redondea al numero mas cercano hacia abajo , (milisegundos*minutos*segundos*horas)
    // let hours = ("0" + Math.floor((limitTime % (1000*60*60*24))/(1000*60*60)));
    // let minutes = ("0" + Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2);
    // let seconds = ("0" + Math.floor((limitTime % (1000*60))/1000)).slice(-2); 
    // // let dia;
    // // if(days === 1){
    // //   dia = "dia"
    // // }else{
    // //   dia = "dias"
    // // }

    // let dias = days === "01" ? "dia" : "dias"; // operador ternario
    // let horas = hours === "01" ? "hora" : "horas";
    // let minutos = minutes === "01" ? "minuto" : "minutos";
    // let segundos = seconds === "01" ? "segundo" : "segundos";

    // $countdown.innerHTML = `<h3>Faltan:${days} ${dias} ${hours} ${horas} ${minutes} ${minutos} ${seconds} ${segundos}</h3>`;
    // // console.log(Math.floor((limitTime % (1000*60*60*24))));
    // if(limitTime <0){
    //   clearInterval(countdownTempo);
    //   $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    //   d.querySelector("#alarma").play();
    // }
    // // console.log((limitTime/(1000*60*60*24))); 
    // },1000);
    
    })(d);// paso de parametros

  // 7)  ScrollTopButton 
  let w = window;
  ((d,w)=>{
    const $scrollTop = d.querySelector(".scroll-top-btn");
    w.addEventListener("scroll",()=>{
      let scroll = w.pageYOffset || d.documentElement.scrollTop;
      if(scroll > 800 ){
      $scrollTop.classList.remove("hidden");
      }else{
        $scrollTop.classList.add("hidden");
      }
    });
    w.addEventListener("click", (e)=>{
      if(e.target.matches(".scroll-top-btn")){
        w.scrollTo({
          behavior: "smooth",
          top:0
        })
      }
    });
  })(d,w)
  


  // ((d)=>{})(d)
  // ((d)=>{})(d)
  // ((d)=>{})(d)
  // ((d)=>{})(d)

});//final de la funcion donde carga completo el documento
