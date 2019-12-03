//Evento permite que voce solte o elemento Html
function allowDrop(ev) {
    ev.preventDefault();
}

//Evento disparado ao arrastar o Elemento Html
function drag(ev) {
    ev
        .dataTransfer
        .setData("text", ev.target.id);

    ev
        .currentTarget
        .style
        .backgroundColor = 'yellow';
}

//Evento Responsavel por recepcionar o Elemento Html
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}