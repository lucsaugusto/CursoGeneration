"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Veiculo_1 = require("./Veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.ligar = function () {
        if (this.isLigado() == true)
            console.log("Ligando meu carro.");
        else
            console.log("Carro já está ligado.");
    };
    Carro.prototype.desligar = function () {
        console.log("Desligando meu carro.");
    };
    Carro.prototype.acelerar = function () {
        console.log("Acelerando meu carro.");
    };
    Carro.prototype.freiar = function () {
        console.log("Freiando meu carro.");
    };
    Carro.prototype.trocarMarcha = function () {
        console.log("Trocando a marcha do meu carro.");
    };
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
