import { bd } from "../conferenceForms/conferenceForms.js";

function exibirDetalhesEvento() {
    const params = new URLSearchParams(window.location.search);
    const eventoId = parseInt(params.get("id"), 10);
    const evento = bd.find(e => e.id === eventoId);
    console.log(evento);

    
    if (evento) {
        document.getElementById("titulo-evento").textContent = evento.name;
        document.getElementById("descricao-evento").textContent = evento.content;
        document.getElementById("rua-evento").textContent = evento.location[1];
        document.getElementById("bairro-evento").textContent = evento.location[2];
        document.getElementById("cidade-evento").textContent = evento.location[3];
        document.getElementById("estado-evento").textContent = evento.location[4];
        document.getElementById("complemento-evento").textContent = evento.location[5];
        document.getElementById("data-evento-inicial").textContent = evento.initialDate;
        document.getElementById("data-evento-final").textContent = evento.finalDate;
        document.getElementById("duracao-evento").textContent = evento.getEventDuration();
    } else {
        document.getElementById("detalhes-evento").innerHTML = `
            <p>Evento não encontrado. Por favor, volte para a página inicial.</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", exibirDetalhesEvento);
