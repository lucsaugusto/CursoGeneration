abstract class Animal{
    private _name: string;
    private _idade: number;

    constructor(nome: string, idade?:number){
        this._name = name;
        this._idade = idade;
    }

    public abstract fazBarulho();
}
class Cachorro extends Animal{
    public fazBarulho(){
        console.log("AU AU!");
    }
}

const cachorro: Animal = new Cachorro("Scooby");
