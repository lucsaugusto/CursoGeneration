function buscar(){
    var inicio, meio, fim
    inicio = document.getElementById("link").value.slice(0, 24)
    meio = "embed/"
    fim = document.getElementById("link").value.slice(32,)
    alert(inicio + meio + fim)
    document.getElementById("yt").src = inicio + meio + fim
}