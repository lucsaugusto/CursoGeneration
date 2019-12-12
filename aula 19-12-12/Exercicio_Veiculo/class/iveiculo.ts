export interface iveiculo{
    private modelo: string;
    private marca: string;
    private rodas?: number;
    private placa?: string;
    private cor: string;
    private ano: number;
    private ligado: boolean;

    ligar();
    desligar();
    acelerar();
    freiar();

    public getModelo();
    public setModelo(modelo: string):void;
    public getMarca(): string;
    public setMarca(marca: string): void;
    public getRodas(): number;
    public setRodas(rodas: number): void;
    public getPlaca(): string;
    public setPlaca(placa: string): void;
    public getCor(): string;
    public setCor(cor: string): void;
    public getAno(): number;
    public setAno(ano: number): void;
    public isLigado(): boolean;
    public setLigado(ligado: boolean): void;
}
