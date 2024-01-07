import { getDataArrays } from '../services/arrays';
import { TablaComp } from './Rllista';
import { useState } from 'react';



export function Container() {
  // Desestructuració d'arrays
const {arrayClase, arraySubclase,arraySubclase2,configList} = getDataArrays();

  let [titol, setTitol] = useState("*POKEDEX*");
  let [datos, setDatos] = useState([]);
  let [datosOriginales, setDatosOriginal] = useState([]);
  let [cap, setCap] = useState([]);
  let [totalizar, setTotalizar] = useState([]);
  let [mostrarTotalizar, setmostrarTotalizar] = useState([]);


  function removeElem() {
    datos.splice(0, 1);
    setDatos([...datos]);
  }
function renderTaula(){
  setCap(configList)
}
function renderClase(){
  let newData=[...datos];
  newData.push(...arrayClase);
 setDatos(newData)

  let newDataOriginal=[...datos];
  newDataOriginal.push(...arrayClase);
  setDatosOriginal(newData)
}
function renderSlegendario(){
  let newData=[...datos];
  newData.push(...arraySubclase);
 setDatos(newData)

 let newDataOriginal=[...datos];
 newDataOriginal.push(...arraySubclase);
 setDatosOriginal(newData)
}
function renderSnormal(){
  let newData=[...datos];
  newData.push(...arraySubclase2);
 setDatos(newData)

 let newDataOriginal=[...datos];
 newDataOriginal.push(...arraySubclase2);
 setDatosOriginal(newData)
}
function mostrarTotal() {
  if (mostrarTotalizar) {
    setmostrarTotalizar(false);
    const total = datos.reduce(totalizar, 0);
    setTotalizar("La suma total del camp és: " + total);

    function totalizar(total, num) {
      let element = "ataque";
      if (isNaN(total + num[element]) || num[element] === null) {
        return total;
      } else {
        return total + num[element];
      }
    }
  } else {
    setmostrarTotalizar(true);
    setTotalizar(null);
  }
}

function OrdenarNull() {
      setDatos([...datosOriginales]); // Restaura los datos originales
   
  }


function newOrdenar() {
const campoOrden = "nivel";

  if (campoOrden == null || campoOrden === undefined) {
    setDatos([...datosOriginales]); // Restaura los datos originales
  } else {
    const nuevosDatos = [...datos];
    nuevosDatos.sort((a, b) => a[campoOrden] - b[campoOrden]);
    setDatos(nuevosDatos);
  }
}
//filtrarPokemon("nivel","80");
function filtrarPokemon() {
  const elemento = "nivel"
  const valor = "80"
  newFiltrar((obj) => obj[elemento] == valor);
}

function newFiltrar(func) {
  const nuevosDatos = [...datos];

  if (func == null || func === undefined) {
  } else {
    const datosFiltrados = nuevosDatos.filter(func);
    setDatos(datosFiltrados);
  }
}


  function canviTitol() {
    let tt = prompt("Nou titol:")
    if (tt) {
      setTitol(tt);
    //document.getElementById("titol").innerHTML = tt;
  }
  }

  return (
    <>
      <h1 >{titol}</h1>
      <div>
        
        <button  onClick={canviTitol}>Modificar Titol</button>
        <button  onClick={renderTaula}>Capçaleres</button>
        <button  onClick={(renderClase)}>Pokemons</button>
        <button  onClick={(renderSlegendario)}>Pokemon Legendario</button>
        <button  onClick={(renderSnormal)}>Pokemon Normal</button>
        <button  onClick={(mostrarTotal)}>Totalizar</button>
        <button  onClick={(newOrdenar)}>Ordenar</button>
        <button  onClick={(filtrarPokemon)}>Filtrar</button>
        <button  onClick={(OrdenarNull)}>Volver Original</button>
        <TablaComp  datos={datos} cap={cap}  />
        <div class="totalizar">{totalizar} </div>
      </div>
    </>
  );
}
