// Clase base
//export { Pokemon, PokemonNormal, PokemonLegendario };

export class Pokemon {
    constructor(nombre, tipo, nivel, salud, ataque) {
      this._nombre = nombre;
      this._tipo = tipo;
      this._nivel = nivel;
      this._salud = salud;
      this._ataque = ataque;
    }
    // Métodos get
    get nombre() {
      return this._nombre;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    get nivel() {
      return this._nivel;
    }
  
    get salud() {
      return this._salud;
    }
  
    get ataque() {
      return this._ataque;
    }
  
    // Métodos set
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    set tipo(nuevoTipo) {
      this._tipo = nuevoTipo;
    }
  
    set nivel(nuevoNivel) {
      this._nivel = nuevoNivel;
    }
  
    set salud(nuevaSalud) {
      this._salud = nuevaSalud;
    }
  
    set ataque(nuevoAtaque) {
      this._ataque = nuevoAtaque;
    }
  }
  
//   Pokemon.prototype.renderRow = function (arrCamps) {
//     var mostrar = '<tr>';
//     for (let Campo of arrCamps) {
//         if (this.hasOwnProperty('_'+Campo)) {
//             mostrar += '<td>' + this['_'+Campo] + '</td>';
//         } else {
//             mostrar += '<td></td>';
//         }
//     }
//     mostrar += '</tr>';
//     return mostrar; 
//   };
  
  
  
  // Subclase 1: Pokemon Legendario
  export class PokemonLegendario extends Pokemon {
    constructor(nombre, tipo, nivel, salud, ataque, poder) {
      super(nombre, tipo, nivel, salud, ataque);
      this.poder = poder;
    }
    // Métodos get para el atributo de la clase hija
    get poder() {
      return this._poder;
    }
  
    // Método set para el atributo de la clase hija
    set poder(nuevoPoder) {
      this._poder = nuevoPoder;
    }
  }
  
  // Subclase 2: Pokemon Normal
  export class PokemonNormal extends Pokemon {
    constructor(nombre, tipo, nivel, salud, ataque, habilidad) {
      super(nombre, tipo, nivel, salud, ataque);
      this.habilidad = habilidad;
    }
    // Métodos get para el atributo de la clase hija
  
    get habilidad() {
      return this._habilidad;
    }
  
    // Método set para el atributo de la clase hija
  
    set habilidad(nuevaHabilidad) {
      this._habilidad = nuevaHabilidad;
    }
  }
  export {}