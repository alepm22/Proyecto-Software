import Gastos from "./gastos";

const fecha = document.querySelector("#fecha");
const monto = document.querySelector("#monto");
const descripcion = document.querySelector("#descripcion");

const form = document.querySelector("#gastos-form");
const gastosdiv = document.querySelector("#gastos-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fechaValue = fecha.value;
  const montoValue = Number.parseInt(monto.value);
  const descripcionValue = descripcion.value;

  const gastos = new Gastos();
  const gasto = {
    fecha: fechaValue,
    monto: montoValue,
    descripcion: descripcionValue,
  };
  gastos.registrarGasto(gasto);
  
  const gastoregistrado = gastos.obtenerGastos();

  gastosdiv.innerHTML = 
    "<div>" +
    gastoregistrado.fecha +
    "</div>" +
    "<div>" +
    gastoregistrado.monto +
    "</div>" +
    "<div>" +
    gastoregistrado.descripcion +
    "</div>";
});
