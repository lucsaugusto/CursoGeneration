function searchComment() {
    var idComment = document.getElementById("inputBox").value;

    if (idComment <= 0) {
        document.getElementById("textError").innerHTML = "Você precisa selecionar um numero mair que 0";
    } else {
        getComment(idComment);
        document.getElementById("textError").innerHTML = "";
    }
}

function getComment(id) {

    //fetch metodo para consumo de serviços de api
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {method: 'GET'})
        .then(response => response.json()) //converte valor recebido em objeto json
        .then(json => passJson(json)) //chamando a função passJson e passando o objeto
}

function passJson(json) {

    //Manipulando o DOM para renderizar os objetos 'acessando valores do objeto'
    document.getElementById("postId").innerText = json.postId;
    document.getElementById("id").innerText = json.id;
    document.getElementById("name").innerText = json.name;
    document.getElementById("email").innerText = json.email;
    document.getElementById("body").innerText = json.body;

}