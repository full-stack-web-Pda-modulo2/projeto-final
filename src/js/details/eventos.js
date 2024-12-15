import {bd} from "./../conferenceForms/conferenceForms.js";


function carregarEventos() {
    const container = document.getElementById("eventos-container");

    bd.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("evento-card");

        card.innerHTML = `
            <div class="card-content">
                <h2>${evento.name}</h2>
                <p>${evento.formatDate(evento.initialDate)}</p>
                <p>${evento.timeOpen} - ${evento.timeClose}</p>
                <p>${evento.location[3]}</p>
                <a href="details.html?id=${evento.id}">Ver Detalhes</a>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", carregarEventos());
