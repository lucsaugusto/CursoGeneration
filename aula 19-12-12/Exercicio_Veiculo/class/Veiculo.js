"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.ligado = false;
    }
    Veiculo.prototype.ligar = function () {
        throw new Error("Method not implemented.");
    };
    Veiculo.prototype.desligar = function () {
        throw new Error("Method not implemented.");
    };
    Veiculo.prototype.acelerar = function () {
        throw new Error("Method not implemented.");
    };
    Veiculo.prototype.freiar = function () {
        throw new Error("Method not implemented.");
    };
    Veiculo.prototype.trocarMarcha = function () {
        throw new Error("Method not implemented.");
    };
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Veiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Veiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Veiculo.prototype.getRodas = function () {
        return this.rodas;
    };
    Veiculo.prototype.setRodas = function (rodas) {
        this.rodas = rodas;
    };
    Veiculo.prototype.getPlaca = function () {
        return this.placa;
    };
    Veiculo.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Veiculo.prototype.getCor = function () {
        return this.cor;
    };
    Veiculo.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Veiculo.prototype.getAno = function () {
        return this.ano;
    };
    Veiculo.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Veiculo.prototype.isLigado = function () {
        return this.ligado;
    };
    Veiculo.prototype.setLigado = function (ligado) {
        this.ligado = ligado;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
