// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Friends = [];
let ResultFriends = document.getElementById("listaAmigos");
let inputFriend = document.getElementById("amigo");
let ResultName = document.getElementById("resultado");

function agregarAmigo() {
    if (inputFriend.value == '') {
        alert("Necesitas escribrir un nombre");
        return;
    } else {
        Friends.push(inputFriend.value);
        ResultFriends.innerHTML += `<li>${inputFriend.value}</li>`;
        document.getElementById("amigo").value = '';
        return;
    }
}

function sortearAmigo() {
    let NumberG = Math.floor(Math.random()*Friends.length);
    if (Friends.length == 0) {
        alert("Necesitas escribir al menos un nombre");
    } else {
        let secretFriend = Friends[NumberG];
        ResultName.innerHTML = `<li>El amigo secreto es: ${secretFriend}</li>`;
    }
}
