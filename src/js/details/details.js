import { bd } from "../conferenceForms/conferenceForms.js";
// import { formatDate } from "./eventos.js";

export function exibirDetalhesEvento(eventos) {
    if (eventos) {
        document.getElementById("titulo-evento").textContent = eventos.name;
        document.getElementById("descricao-evento").textContent = eventos.content;
        document.getElementById("rua-evento").textContent = eventos.location[1];
        document.getElementById("bairro-evento").textContent = eventos.location[2];
        document.getElementById("cidade-evento").textContent = eventos.location[3];
        document.getElementById("estado-evento").textContent = eventos.location[4];
        document.getElementById("complemento-evento").textContent = eventos.location[5];
        document.getElementById("data-evento-inicial").textContent = eventos.formatDate(eventos.initialDate);
        document.getElementById("data-evento-final").textContent = eventos.formatDate(eventos.finalDate);
        document.getElementById("duracao-evento").textContent = eventos.getEventDuration();
        document.getElementById("abertura-evento").textContent = eventos.timeOpen;
        document.getElementById("fechamento-evento").textContent = eventos.timeClose;

    } else {
        document.getElementById("detalhes-evento").innerHTML = `
            <p>Evento não encontrado. Por favor, volte para a página inicial.</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", exibirDetalhesEvento);
