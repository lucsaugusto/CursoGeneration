function hello(nome) {
    var par = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        par[_i - 1] = arguments[_i];
    }
    return "Hello, " + par + nome;
}
var varNome = "World";
console.log(hello(varNome, " bola", " lapis", " casa", "odsandoian", "mldskdnsflndf"));
