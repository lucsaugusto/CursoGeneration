import { Carro } from "./Carro"

var carro = new Carro();

carro.Cor = "Branco";
carro.Modelo = "Renegade";
carro.Marca = "Jeep";
carro.Ano = 2019;

carro.ligar();
carro.acelerar();
carro.freiar();
carro.desligar();

console.log("Id: " + carro.getId())
carro.setId(321);
