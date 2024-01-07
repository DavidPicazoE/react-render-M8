import {Pokemon,PokemonLegendario,PokemonNormal} from '../model/classe.js'

export const getDataArrays = () => {
    //DATOS A MOSTRAR
  const arrayClase = [
    new Pokemon("Pikachu", "Eléctrico", 30, 100, 50),
    new Pokemon("Charmander", "Fuego", 30, 100, 50)];

  const arraySubclase = [
    new PokemonLegendario("Mewtwo","Psíquico",80,50, 80,"Telequinesis")];

  const arraySubclase2 = [
    new PokemonNormal("Pikachu","Normal", 10, 100,20,"ElectricPower"),
    new PokemonNormal("Eevee","Normal",12,120,25,"Adaptability"),
    new PokemonNormal( "Snorlax","Normal",15,150,30,"Thick Fat")];

    //CABECERA
    const configList = [
        { cap: "NOM", camp: "nombre" },
        { cap: "TIPUS", camp: "tipo" },
        { cap: "NIVELL", camp: "nivel" },
        { cap: "SALUD", camp: "salud" },
        { cap: "ATAC", camp: "ataque" },
        { cap: "HABILITAT", camp: "habilidad" },
        { cap: "PODER", camp: "poder" },
      ];
  return { arrayClase, arraySubclase,arraySubclase2, configList };
};