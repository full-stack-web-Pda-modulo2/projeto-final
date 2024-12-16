// import {bd} from "./../conferenceForms/conferenceForms.js";
// import {exibirDetalhesEvento} from "./../details/details.js"
// const changeForm = document.getElementById("change-form");
// export const form = document.querySelector("form");
// export const eventos = document.getElementById("eventos-lista");

// changeForm.addEventListener("click", (evento) => {
//     evento.preventDefault();
//     form.classList.add("show")
//     eventos.classList.add("hidden")
// });

// // document.getElementById("titulo-evento").textContent = evento.name;
// // document.getElementById("descricao-evento").textContent = evento.content;
// // document.getElementById("rua-evento").textContent = evento.location[1];
// // document.getElementById("bairro-evento").textContent = evento.location[2];
// // document.getElementById("cidade-evento").textContent = evento.location[3];
// // document.getElementById("estado-evento").textContent = evento.location[4];
// // document.getElementById("complemento-evento").textContent = evento.location[5];
// // document.getElementById("data-evento-inicial").textContent = evento.formatDate(evento.initialDate);
// // document.getElementById("data-evento-final").textContent = evento.formatDate(evento.finalDate);
// // document.getElementById("duracao-evento").textContent = evento.getEventDuration();
// // document.getElementById("abertura-evento").textContent = evento.timeOpen;
// // document.getElementById("fechamento-evento").textContent = evento.timeClose;

// const eventSelect = document.querySelector(".event-select");

// if(eventSelect) {
//     eventSelect.addEventListener("click", (e)=>{
//         e.preventDefault();
//         console.log(e)
//         const selectedElement = e.target;
//         const id = selectedElement.getAttribute("id");
//         exibirDetalhesEvento(id);
//         eventos.classList.add("hidden");
//     });
// }

// export function carregarEvento(id, name, date,timeOpen, timeClose, city) {
//     if(name){
//         const container = document.getElementById("eventos-container");
//         const card = document.createElement("div");
//         card.classList.add("evento-card");
//         console.log(name);
//         card.innerHTML = `
//             <div class="card-content">
//                 <h2>${name}</h2>
//                 <p>${date}</p>
//                 <p>${timeOpen} - ${timeClose}</p>
//                 <p>${city}</p>
//             <button id="${id}" class="event-select">Ver Detalhes</button>
//             </div>
//         `;
//         container.appendChild(card);
//     }
// }

// for (let conference of bd) {
//     carregarEvento(conference.id,conference.name, conference.formatDate(conference.initialDate),conference.timeOpen,conference.timeClose, conference.location[3]);
// }

// // document.addEventListener("DOMContentLoaded", carregarEvento());


import { bd } from "./../conferenceForms/conferenceForms.js";
import { exibirDetalhesEvento } from "./../details/details.js";

const changeForm = document.getElementById("change-form");
export const form = document.querySelector("form");
export const eventos = document.getElementById("eventos-lista");
// const details = document.getElementsById("detalhes-evento");

// Alternar formulário de edição e lista de eventos
changeForm.addEventListener("click", (evento) => {
    evento.preventDefault();
    form.classList.add("show");
    if (eventos && eventos.classList.contains("show")) {
        eventos.classList.remove("show");
    } 
    eventos.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
    // Carregar eventos no DOM
    for (let conference of bd) {
        carregarEvento(
            conference.id,
            conference.name,
            conference.formatDate(conference.initialDate),
            conference.timeOpen,
            conference.timeClose,
            conference.location[3]
        );
    }

    // Delegação de evento para os botões
    const container = document.getElementById("eventos-container");

    container.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("event-select")) {
            // Acessar o ID do botão clicado
            const buttonId = e.target.id;
            selectConference(buttonId);
        }
    });
});

// Função para carregar um evento no DOM
export function carregarEvento(id, name, date, timeOpen, timeClose, city) {
    if (name) {
        const container = document.getElementById("eventos-container");
        const card = document.createElement("div");
        card.classList.add("evento-card");
        card.innerHTML = `
            <div class="card-content">
                <h2>${name}</h2>
                <p>${date}</p>
                <p>${timeOpen} - ${timeClose}</p>
                <p>${city}</p>
                <button id="ver-Detalhe${id}" class="event-select">Ver Detalhes</button>
            </div>
        `;
        container.appendChild(card);
    }
}

// Adicionar eventos de clique após o DOM carregar


function selectConference(buttonId) {
    // Exibir os detalhes do evento com o id
    
    exibirDetalhesEvento(buttonId);
    
    if (eventos && eventos.classList.contains("show")) {
        eventos.classList.remove("show");
    } 
    eventos.classList.add("hidden");
}
