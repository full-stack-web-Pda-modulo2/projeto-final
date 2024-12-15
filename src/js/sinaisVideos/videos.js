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
        new Signal("Alfabeto", "Aprenda os sinais correspondentes às letras do alfabeto.", "EZxkymw426U"),
        new Signal("Alfabeto detalhado", "Entenda como executar cada sinal do alfabeto com precisão.", "EaE7R1VBBiA"),
        new Signal("Cumprimentos", "Descubra como se comunicar com saudações básicas em sinais.", "iCG6wTKJkis"),
        
        new Signal("Dias da semana", "Aprenda os sinais para os dias da semana.", "vaORm9dr8P4"),
        new Signal("Meses do ano", "Memorize os sinais dos meses do ano.", "wruW9LIOkS8"),
        new Signal("Calendário", "Saiba como sinalizar datas e períodos no calendário.", "OE_DUiCNpUw"),
        
        new Signal("Verbos", "Aprenda os sinais para verbos comuns e suas variações.", "Tb4Byr4gfRI"),
        new Signal("Adjetivos", "Descubra como descrever características com sinais.", "M6HCAc26Fss"),
        new Signal("Emoções e sentimentos", "Expresse emoções e sentimentos usando sinais.", "Xn_rDzXuIrw")
    ]
);

videosDB.forEach((signal) => signal.displaySigns());