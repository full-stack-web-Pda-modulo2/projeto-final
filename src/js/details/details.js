// const eventos = [
//     {
//         id: 1,
//         titulo: "Workshop de Libras",
//         descricao: "Aprenda o básico da Língua Brasileira de Sinais neste workshop interativo.",
//         local: "Centro Cultural de Libras",
//         data: "20/01/2025",
//         horario: "14:00",
//         imagem: "assets/images/workshop.jpg"
//     },
//     {
//         id: 2,
//         titulo: "Palestra sobre Inclusão",
//         descricao: "Uma conversa sobre os desafios e avanços na inclusão de pessoas surdas.",
//         local: "Auditório Municipal",
//         data: "25/01/2025",
//         horario: "10:00",
//         imagem: "assets/images/palestra.jpg"
//     },
//     {
//         id: 3,
//         titulo: "Curso Intensivo de Libras",
//         descricao: "Curso intensivo para desenvolver habilidades práticas em Libras.",
//         local: "Auditório Municipal",
//         data: "10/02/2025",
//         horario: "13:00",
//         imagem: "assets/images/palestra.jpg"
//     }

//];


import { bd } from "../conferenceForms/conferenceForms.js";

function exibirDetalhesEvento() {
    const params = new URLSearchParams(window.location.search);
    const eventoId = parseInt(params.get("id"), 10);
    const evento = bd.find(e => e.id === eventoId);
    console.log(evento)

    if (evento) {
        document.getElementById("titulo-evento").textContent = evento.name;
        document.getElementById("descricao-evento").textContent = evento.content;
        document.getElementById("local-evento").textContent = evento.location;
        document.getElementById("data-evento-inicial").textContent = evento.initialDate;
        document.getElementById("data-evento-final").textContent = evento.finalDate;
    } else {
        document.getElementById("detalhes-evento").innerHTML = `
            <p>Evento não encontrado. Por favor, volte para a página inicial.</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", exibirDetalhesEvento);
