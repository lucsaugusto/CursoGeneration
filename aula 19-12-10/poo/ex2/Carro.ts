export class Carro{
    private _Id: number;
    
    public getId(): number {
        return this._Id;
    }
    public setId(value: number) {
        this._Id = value;
    }
    
    Cor : string;
    Modelo: string;
    Marca: string;
    Ano: number;

    ligar(){
        console.log("Ligar o carro.");
    }
    desligar(){
        console.log("Desligar o carro.");
    }
    acelerar(){
        console.log("Acelerar o carro.");
    }
    freiar(){
        console.log("Freiar o carro.");
    }
}