"use strict";
exports.__esModule = true;
var Carro_1 = require("./class/Carro");
var Moto_1 = require("./class/Moto");
var carro = new Carro_1.Carro();
var moto = new Moto_1.Moto();
carro.setModelo("Renegade");
carro.setMarca("Jeep");
carro.setRodas(Number("5"));
carro.setPlaca("BRA1234");
carro.setCor("Branco");
carro.setAno(Number("2019"));
console.log(carro.getModelo());
console.log(carro.getMarca());
console.log(carro.getRodas());
console.log(carro.getPlaca());
console.log(carro.getCor());
console.log(carro.getAno());
carro.ligar();
carro.acelerar();
carro.trocarMarcha();
carro.freiar();
carro.desligar();
// var valor = prompt("Digite o modelo do carro.")
// carro.setModelo(valor);
// valor = prompt("Digite a marca do carro.")
// carro.setMarca(valor);
// valor = prompt("Digite a quantidade de rodas do carro.")
// carro.setRodas(Number(valor));
// valor = prompt("Digite a placa do carro.")
// carro.setPlaca(valor);
// valor = prompt("Digite a cor do carro.")
// carro.setCor(valor);
// valor = prompt("Digite o ano do carro.")
// carro.setAno(Number(valor));
