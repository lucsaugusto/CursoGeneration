import { Carro } from './class/Carro';
import { Moto } from './class/Moto';
import { Veiculo } from './class/Veiculo'

var carro: Veiculo = new Carro();
var moto: Moto = new Moto();

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