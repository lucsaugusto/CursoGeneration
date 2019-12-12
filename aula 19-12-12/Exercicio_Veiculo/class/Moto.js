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
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.ligar = function () {
        console.log("Ligando minha moto.");
    };
    Moto.prototype.desligar = function () {
        console.log("Desligando minha moto.");
    };
    Moto.prototype.acelerar = function () {
        console.log("Acelerando minha moto.");
    };
    Moto.prototype.freiar = function () {
        console.log("Freiando minha moto.");
    };
    Moto.prototype.trocarMarcha = function () {
        console.log("Trocando a marcha da minha moto.");
    };
    return Moto;
}(Veiculo_1.Veiculo));
exports.Moto = Moto;
