class Signal {
    constructor(title, explaining, video) {
        this.title = title;
        this.explaining = explaining; 
        this.video = video;
    }

    displaySigns() {
        const div = document.getElementById("display-videos");

        const signalHTML = `
            <div class="video-container">
                <h2>${this.title}</h2> 
                <p>${this.explaining}</p>
                <iframe class="videos" src="https://www.youtube.com/embed/${this.video}"></iframe>
            </div>
        `;
    
        div.insertAdjacentHTML("beforeend", signalHTML);
    }
}

const videosDB = []; 

videosDB.push(
    ...[ // o spread "quebra" os itens do array, senão o array push guardaria um outro array inteiro ao invés dos valores separadamente
        new Signal("Alfabeto", "Teste teste", "ARX0sl6apCw&t=1s"),
        new Signal("Alfabeto detalhado", "Teste teste", "EaE7R1VBBiA"),
        new Signal("Cumprimentos", "Teste teste", "vaORm9dr8P4"),
        new Signal("Dias da semana", "Teste teste", "vaORm9dr8P4"),
        new Signal("Meses do ano", "Teste teste", "wruW9LIOkS8"), 
        new Signal("Calendário", "Teste teste", "OE_DUiCNpUw"), 

        new Signal("Meses do ano", "Teste teste", "wruW9LIOkS8"), 
        new Signal("Meses do ano", "Teste teste", "wruW9LIOkS8"), 
        new Signal("Meses do ano", "Teste teste", "wruW9LIOkS8"), 
    ]
);

videosDB.forEach((signal) => signal.displaySigns());