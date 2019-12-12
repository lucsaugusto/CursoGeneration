import { icambio } from './icambio';
import { Veiculo } from './Veiculo'

export class Moto extends Veiculo implements icambio{
    ligar(){
        console.log("Ligando minha moto.")
    }
    desligar(){
        console.log("Desligando minha moto.")
    }
    acelerar(){
        console.log("Acelerando minha moto.")
    }
    freiar(){
        console.log("Freiando minha moto.")
    }
    trocarMarcha(){
        console.log("Trocando a marcha da minha moto.")
    }
}