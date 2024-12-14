import { showErro } from "./modal.js"
//  pegando os inputs necessários para o preenchimento de dados de eventos 
const nameConference = document.getElementById("name-input");
const description = document.getElementById("description-text");
const cep = document.getElementById("cep-input");
const street= document.getElementById("street-input");
const neighborhood = document.getElementById("neighborhood-input");
const city = document.getElementById("city-input");
const state = document.getElementById("state-input");
const registerBtn = document.getElementById("register-btn");
const complement = document.getElementById("complement-input");

//  array do banco de dados
let bd = [
    {
        id: 1,
        name: "Introdução à Libras",
        content: "Aprenda os fundamentos da Língua Brasileira de Sinais.",
        location: "São Paulo, SP",
        datePublic: "2024-12-01",
        img: "https://example.com/images/intro-libras.jpg"
    },
    {
        id: 2,
        name: "Curso Avançado de Libras",
        content: "Aprofunde seus conhecimentos em Libras com este curso avançado.",
        location: "Rio de Janeiro, RJ",
        datePublic: "2024-12-05",
        img: "https://example.com/images/curso-avancado-libras.jpg"
    },
    {
        id: 3,
        name: "Sinais para Profissionais de Saúde",
        content: "Aprenda sinais específicos para comunicação em ambientes de saúde.",
        location: "Belo Horizonte, MG",
        datePublic: "2024-12-10",
        img: "https://example.com/images/sinais-saude.jpg"
    },
    {
        id: 4,
        name: "Libras no Contexto Escolar",
        content: "Estratégias para usar Libras no ambiente educacional.",
        location: "Curitiba, PR",
        datePublic: "2024-12-15",
        img: "https://example.com/images/libras-escolar.jpg"
    },
    {
        id: 5,
        name: "História e Cultura Surda",
        content: "Descubra a história e a cultura da comunidade surda.",
        location: "Salvador, BA",
        datePublic: "2024-12-20",
        img: "https://example.com/images/historia-cultura-surda.jpg"
    },

];

// Classe adress, classe para o endereco do evento
class Adress {
    #cep
    #street
    #neighborhood
    #city
    #state
    #complement

    constructor(cep, street, neighborhood, city, state, complement) {
        this.#cep = cep;
        this.#street = street;
        this.#neighborhood = neighborhood;
        this.#city = city;
        this.#state = state;
        this.#complement = complement;
    }

    get getData() {
        return [
            this.#cep,
            this.#street,
            this.#neighborhood,
            this.#city,
            this.#state,
            this.#complement,
        ];
    }
}

class Conference {
    constructor(title, img, content, adress, initialDate, finalDate) {
      this.title = title;
      this.img = img;
      this.content = content;
      this.adress = adress;
      this.initialDate = new Date(initialDate);
      this.finalDate = new Date(finalDate);
    }

    isInitialDateValid() {
      return this.initialDate.getTime() > Date.now();
    }

    getEventDuration() {
        const durationMs = this.finalDate.getTime() - this.initialDate.getTime();

        return this.formatDuration(durationMs);
    }

    timeUntilEvent() {
        const now = new Date().getTime();
        const timeUntilMs = this.initialDate.getTime() - now;

        // Caso o evento já tenha começado
        if (timeUntilMs <= 0) {
            return "O evento já começou ou terminou!";
        }

        return this.formatDuration(timeUntilMs);
    }

    formatDuration(durationMs) {
        const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
        const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));

        return `${days} dias e ${hours} horas`;
      }
      
    displayEvent() {
      const eventSection = document.createElement("section");
      eventSection.classList.add("event-info");

      eventSection.innerHTML = `
        <h2>${this.title}</h2>
        <img src="${this.img}" alt="Imagem do evento" id="img-evento" style="max-width: 100%;">
        <p><strong>Descrição:</strong> ${this.content}</p>
        <p><strong>Endereço:</strong> ${this.adress}</p>
        <p><strong>Data inicial:</strong> ${this.initialDate.toLocaleString()}</p>
        <p><strong>Data final:</strong> ${this.finalDate.toLocaleString()}</p>
        <p><strong>Duração do evento:</strong> ${this.getEventDuration()}</p>
        <p>O evento começa em ${this.timeUntilEvent()}</p>
      `;

      document.body.appendChild(eventSection);
    }
  }

  document.getElementById("register-btn").addEventListener("click", () => {
    const title = document.getElementById("name-input").value;
    const img = document.getElementById("url-img").value;
    const content = document.getElementById("description-text").value;
    const initialDate = document.getElementById("initial-date-input").value;
    const finalDate = document.getElementById("final-date-input").value;
    const adress = `
      ${document.getElementById("street-input").value},
      ${document.getElementById("neighborhood-input").value},
      ${document.getElementById("city-input").value} - 
      ${document.getElementById("state-input").value},
      CEP: ${document.getElementById("cep-input").value}
    `;

    const conference = new Conference(title, img, content, adress, initialDate, finalDate);

    conference.displayEvent();
  });
  
//  funcao para verificar o preenchimento de todos os campos do formulario
function checkFilled() {
    if (
        !nameConference.value.trim() ||
        !description.value.trim() ||
        !cep.value.trim() ||
        !street.value.trim() ||
        !neighborhood.value.trim() ||
        !city.value.trim() ||
        !state.value.trim() ||
        !complement.value.trim() ||
        !dateInitial.value.trim() ||
        !dateFinal.value.trim() 
    ) {
        throw Error("Preencha todas as informações");
    }
}

//  array do banco de dados
export let bd = [
    new Conference(1, "Introdução à Libras", "Aprenda os fundamentos da Língua Brasileira de Sinais.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-01", "2024-12-03"),
    new Conference(2, "Curso Avançado de Libras", "Aprofunde seus conhecimentos em Libras com este curso avançado.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-05", "2024-12-07"),
    new Conference(3, "Sinais para Profissionais de Saúde", "Aprenda sinais específicos para comunicação em ambientes de saúde.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-10", "2024-12-12"),
    new Conference(4, "Libras no Contexto Escolar", "Estratégias para usar Libras no ambiente educacional.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-15", "2024-12-17"),
    new Conference(5, "História e Cultura Surda", "Descubra a história e a cultura da comunidade surda.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-20", "2024-12-22")
];

console.log(bd);

//  botão que vai criar um evento ao clicar nele e adicionar no banco de dados

// document.addEventListener("DOMContentLoaded", () => {
//     const registerBtn = document.getElementById("register-btn");
    
//     if (registerBtn) {
//         registerBtn.addEventListener("click", (event)=>{
//             event.preventDefault();
            
//             try {
//                 //  checa se todos os inputs tem algum valor
//                 checkFilled();
        
//                 //  instância um novo objeto do tipo Adress
//                 const newAdress = new Adress(cep.value, street.value, neighborhood.value,  city.value, state.value, complement.value);
                
//                 //Instância um novo objeto do tipo Conference
//                 const newConference = new Conference(bd[bd.length-1].id,nameConference.value, description.value,  newAdress.getData, dateInitial.value, dateFinal.value);
        
//                 // verifica se as datas são válidas
//                 newConference.isInitialDateValid();
//                 newConference.isFinalDateValid();
                
//                 // atribui o ultimo valor do array banco de dados a variavel newConference
//                 bd[bd.length-1] = newConference;
        
//                 //  cria uma variavel que seria o proximo id do proximo evento
//                 const proxConference = new Conference(bd[bd.length-1].id+1);
        
//                 // coloca a variavel proxConference é um número na última posição do array banco de dados
//                 bd.push(proxConference);
//                 console.log(bd)
        
                
                
//             } catch (e) {
//                 //  aparece a de erro na tela 
//                 console.log(e)
//                 showErro(e.message);
//             }
            
//         });
//     } else {
//         console.error("O elemento com ID 'register-btn' não foi encontrado.");
//     }
// });











// registerBtn.addEventListener("click", (event)=>{
//     event.preventDefault();
    
//     try {
//         //  checa se todos os inputs tem algum valor
//         checkFilled();

//         //  instância um novo objeto do tipo Adress
//         const newAdress = new Adress(cep.value, street.value, neighborhood.value,  city.value, state.value, complement.value);
        
//         //Instância um novo objeto do tipo Conference
//         const newConference = new Conference(bd[bd.length-1].id,nameConference.value, description.value,  newAdress.getData, dateInitial.value, dateFinal.value);

//         // verifica se as datas são válidas
//         newConference.isInitialDateValid();
//         newConference.isFinalDateValid();
        
//         // atribui o ultimo valor do array banco de dados a variavel newConference
//         bd[bd.length-1] = newConference;

//         //  cria uma variavel que seria o proximo id do proximo evento
//         const proxConference = new Conference(bd[bd.length-1].id+1);

//         // coloca a variavel proxConference é um número na última posição do array banco de dados
//         bd.push(proxConference);
//         console.log(bd)

        
        
//     } catch (e) {
//         //  aparece a de erro na tela 
//         console.log(e)
//         showErro(e.message);
//     }
    
// })