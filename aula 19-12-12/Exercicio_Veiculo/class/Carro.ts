import { icambio } from './icambio';
import { Veiculo } from './Veiculo'

export class Carro extends Veiculo implements icambio{
    ligar(){
        if(this.isLigado() == false )
            console.log("Ligando meu carro.")
        else
            console.log("Carro já está ligado.")
    }
    desligar(){
        console.log("Desligando meu carro.")
    }
    acelerar(){
        console.log("Acelerando meu carro.")
    }
    freiar(){
        console.log("Freiando meu carro.")
    }
    trocarMarcha(){
        console.log("Trocando a marcha do meu carro.")
    }
}