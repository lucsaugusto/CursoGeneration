import { iveiculo } from "./iveiculo";
import { icambio } from './icambio';


export abstract class Veiculo implements iveiculo, icambio{

    private modelo: string;    
    private marca: string;
    private rodas?: number;
    private placa?: string;
    private cor: string;
    private ano: number;
    private ligado:  = false;

    ligar() {
        throw new Error("Method not implemented.");
    }
    desligar() {
        throw new Error("Method not implemented.");
    }
    acelerar() {
        throw new Error("Method not implemented.");
    }
    freiar() {
        throw new Error("Method not implemented.");
    }
    trocarMarcha() {
        throw new Error("Method not implemented.");
    }
    


    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getRodas?(): number {
        return this.rodas;
    }

    public setRodas(rodas: number): void {
        this.rodas = rodas;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getAno(): number {
        return this.ano;
    }

    public setAno(ano: number): void {
        this.ano = ano;
    }
    
    public isLigado(): boolean {
        return this.ligado;
    }

    public setLigado(ligado: boolean): void {
        this.ligado = ligado;
    }

}