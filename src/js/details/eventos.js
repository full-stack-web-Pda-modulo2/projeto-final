import { bd } from "./../conferenceForms/conferenceForms.js";
import { exibirDetalhesEvento } from "./../details/details.js";

const changeForm = document.getElementById("change-form");
export const form = document.querySelector("form");
export const eventos = document.getElementById("eventos-lista");
const details = document.getElementById("detalhes-evento");


// Alternar formulário de edição e lista de eventos
changeForm.addEventListener("click", (evento) => {
    evento.preventDefault();
    form.classList.add("show");
    if (eventos && eventos.classList.contains("show")) {
        eventos.classList.remove("show");
    } 

    if(details && details.classList.contains("show")){
        details.classList.remove("show");
    }
    
    details.classList.add("hidden");
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
                <button id="${id}" class="event-select">Ver Detalhes</button>
            </div>
        `;
        container.appendChild(card);
    }
}

// Adicionar eventos de clique após o DOM carregar


function selectConference(button) {
    
    if (eventos && eventos.classList.contains("show")) {
        eventos.classList.remove("show");
    } 
    details.classList.remove("hidden");
    details.classList.add("show");
    eventos.classList.add("hidden");
    exibirDetalhesEvento(bd[button]);
}
