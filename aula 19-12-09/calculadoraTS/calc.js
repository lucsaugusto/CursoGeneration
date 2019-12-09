function calcularValorDesconto(valor, taxa) {
    if (taxa === void 0) { taxa = 0.50; }
    var resultado = valor * taxa;
    //console.log("O Valor de Desconto da taxa aplicada é.....: ", resultado);
    return resultado;
}
console.log("O Valor de Desconto da taxa aplicada é.....: " + calcularValorDesconto(1000));
console.log("O Valor de Desconto da taxa aplicada é.....: " + calcularValorDesconto(1000, 0.30));
//calcularValorDesconto(1000); //0.50 (segundo parâmetro)
//calcularValorDesconto(1000, 0.30);
