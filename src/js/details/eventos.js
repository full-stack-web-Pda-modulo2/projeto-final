const eventos = [
    {
        id: 1,
        titulo: "Workshop de Libras",
        descricao: "Aprenda o básico da Língua Brasileira de Sinais neste workshop interativo.",
        imagem: "assets/images/workshop.jpg"
    },
    {
        id: 2,
        titulo: "Palestra sobre Inclusão",
        descricao: "Uma conversa sobre os desafios e avanços na inclusão de pessoas surdas.",
        imagem: "assets/images/palestra.jpg"
    },
    {
        id: 3,
        titulo: "Curso Intensivo de Libras",
        descricao: "Curso intensivo para desenvolver habilidades práticas em Libras.",
        imagem: "assets/images/curso.jpg"
    }
];

function carregarEventos() {
    const container = document.getElementById("eventos-container");

    eventos.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("evento-card");

        card.innerHTML = `
            <img src="${evento.imagem}" alt="${evento.titulo}">
            <div class="card-content">
                <h2>${evento.titulo}</h2>
                <p>${evento.descricao}</p>
                <a href="details.html?id=${evento.id}">Ver Detalhes</a>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", carregarEventos);