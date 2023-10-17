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
import {shortcuts,bolita} from "./js/4_eventos_del_teclado.js";
import { cuentaRegresiva } from "./js/6_cuenta_regresiva.js";
import traductor from "./js/7_traductor.js";
import scrollButton from "./js/8_scroll_btn_top.js";

const d = document;
d.addEventListener("DOMContentLoaded", () => {
  // 1) menu hamburguesa
  hamburgerMenu(".panel-btn",".panel",".menu a");

  // 2) reloj digital
  relojDigital("#activar-reloj","#reloj","#desactivar-reloj");

  // 3) alarma digital
  alarmaDigital("#activar-alarma","#alarma","#desactivar-alarma","#siuuu","#detenerSiuuu","#siuuuSonido","#explicaSiuuu","#detenerExplicaSiuuu","#explicaSiuuuSonido");

  // 4) shorcuts personalizados
  // 5) Eventos del Teclado
  d.addEventListener("keydown", (e) => {
    // ((d)=>{})(d) // funcion auto ejecutable
    // este es el mas utilizado
    // shortcuts(e);
    bolita(e);
  });
  // d.addEventListener("keypress", (e) => {
  //   shortcuts(e);
  // });
  // d.addEventListener("keyup", (e) => {
  //   shortcuts(e);
  // });
  

  // 6) cuenta regresiva date
  cuentaRegresiva("#countdown","#activarRegresiba")

  // 7) traductor 

  traductor();

  // 8) ScrollTopButton 
  scrollButton();
});
