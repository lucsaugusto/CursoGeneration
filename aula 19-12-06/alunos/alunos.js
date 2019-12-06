var express = require('express')
var cors = require('cors')
var app = express()


app.use(cors())

var dataJson = [{
    "id": 12,
    "Nome": "Lucas",
    "Sobrenome": "Capelotto",
    "Idade": 26,
    "Nota": 5,
    "Situacao": "Aprovado"

}, {
    "id": 25,
    "Nome": "Marcelo",
    "Sobrenome": "Barboza",
    "Idade": 29,
    "Nota": 3,
    "Situacao": "Reprovado"
}, {
    "id": 39,
    "Nome": "EU",
    "Sobrenome": "Hassan",
    "Idade": 34,
    "Nota": 7,
    "Situacao": "Aprovado"
}]

app.get('/alunos/notas/matematica', function(req, res) {
    res.json(dataJson)
});

app.get('/alunos/notas/matematica/:id', function (req, res) {
    for(let i = 0; i < dataJson.length; i++){
      element = dataJson[i]
      if(element.id == req.params.id)
        res.json(dataJson[i]);
    }
});

app.listen(3000, function() {
    console.log('Aplicação utilizando a porta 3000');
})