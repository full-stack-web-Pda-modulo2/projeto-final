// js/detalhes.js

// Dados simulados de eventos
const eventos = [
    { 
        id: 1, 
        titulo: "Introdução à Libras", 
        descricao: "Workshop introdutório sobre a Língua Brasileira de Sinais para iniciantes.", 
        data: "2024-12-10", 
        local: "Online", 
        publico: "Para ouvintes e surdos, sem pré-requisitos." 
    },
    { 
        id: 2, 
        titulo: "Inclusão no Ambiente de Trabalho", 
        descricao: "Palestra sobre a inclusão de surdos no ambiente corporativo, com tradução simultânea em Libras.", 
        data: "2024-12-15", 
        local: "São Paulo", 
        publico: "Profissionais de RH e gestores." 
    },
    { 
        id: 3, 
        titulo: "Encontro Cultural de Libras", 
        descricao: "Evento para celebração e promoção da cultura surda, com apresentações artísticas.", 
        data: "2024-12-20", 
        local: "Rio de Janeiro", 
        publico: "Aberto ao público geral." 
    },
];

// Função para capturar parâmetros da URL
function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Pega o ID do evento da URL
const eventoId = getQueryParam("id");

// Busca o evento no array
const evento = eventos.find(e => e.id === parseInt(eventoId, 10));

// Seleciona o elemento onde os detalhes serão exibidos
const detalhesEventoDiv = document.getElementById("detalhes-evento");

// Exibe os detalhes do evento ou uma mensagem de erro
if (evento) {
    detalhesEventoDiv.innerHTML = `
        <h1>${evento.titulo}</h1>
        <p><strong>Descrição:</strong> ${evento.descricao}</p>
        <p><strong>Data:</strong> ${new Date(evento.data).toLocaleDateString()}</p>
        <p><strong>Local:</strong> ${evento.local}</p>
        <p><strong>Público:</strong> ${evento.publico}</p>
        <a href="eventos.html" class="btn">Voltar</a>
    `;
} else {
    detalhesEventoDiv.innerHTML = `
        <h1>Evento não encontrado</h1>
        <p>O evento que você está procurando não existe ou foi removido.</p>
        <a href="eventos.html" class="btn">Voltar</a>
    `;
}
