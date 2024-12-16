import {bd} from "./../conferenceForms/conferenceForms.js";
import {exibirDetalhesEvento} from "./../details/details.js"
const changeForm = document.getElementById("change-form");
export const form = document.querySelector("form");
export const eventos = document.getElementById("eventos-lista");

changeForm.addEventListener("click", (evento) => {
    evento.preventDefault();
    form.classList.add("show")
    eventos.classList.add("hidden")
});

const eventSelect = document.querySelector("event-select");
if(eventSelect) {
    eventSelect.addEventListener("click", (e)=>{
        e.preventDefault();
        const links = document.getElementById("nav-links");
        exibirDetalhesEvento();
        eventos.classList.add("hidden");
        const events = createElement("li");
        events.innerHTML = ` <a href="#">eventos</a>`
        links.appendChild(events);
    });
}

export function carregarEvento(id, name, date,timeOpen, timeClose, city) {
    if(name ){
        const container = document.getElementById("eventos-container");
        const card = document.createElement("div");
        card.classList.add("evento-card");
        console.log(name);
        card.innerHTML = `
            <div class="card-content">
                <h2>${name}</h2>
                <p>${date}</p>
                <p>${timeOpen} - ${timeClose}</p>
                <p>${city}</p>
            <a href="events.html?id=${id}" class="event-select">Ver Detalhes</a>
            </div>
        `;
        container.appendChild(card);
    }
}

for (let conference of bd) {
    carregarEvento(conference.id,conference.name, conference.formatDate(conference.initialDate),conference.timeOpen,conference.timeClose, conference.location[3]);
}

document.addEventListener("DOMContentLoaded", carregarEvento());
