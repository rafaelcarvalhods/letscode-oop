console.log("=== Televisão ===");

class Televisao {
    constructor(fabricante=null, polegadas=0, canal=0, volume=0, ligada=false) {
        this.#canal = canal;
        this.#volume = volume;
        this.#ligada = ligada;
        this.#fabricante = fabricante;
        this.#polegadas = polegadas
    }

    #canal
    #volume
    #ligada
    #fabricante
    #polegadas

    ligar() {
        return this.#ligada = true;
    }

    desligar() {
        return this.#ligada = false;
    }

    mudarCanal(numero = this.#canal) {
        return (this.#ligada) ? this.#canal = numero : "TV desligada";
        
    }

    aumentarVolume() {
        return this.#volume += 1;
    }

    diminuirVolume() {
        return this.#volume -= 1;
    }
}