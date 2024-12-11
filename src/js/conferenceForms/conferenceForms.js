import { mostrarErro } from "./modal.js"
//  pegando os inputs necessários para o preenchimento de dados de eventos 
const nameConference = document.getElementById("name-input");
const description = document.getElementById("description-text");
const cep = document.getElementById("cep-input");
const street= document.getElementById("street-input");
const neighborhood = document.getElementById("neighborhood-input");
const city = document.getElementById("city-input");
const state = document.getElementById("state-input");
const registerBtn = document.getElementById("register-btn");
const datePublic = document.getElementById("date-input");
const complement = document.getElementById("complement-input");

//  array do banco de dados
let bd = [];

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

    get PegaDados() {
        return {
            cep: this.#cep,
            street: this.#street,
            neighborhood: this.#neighborhood,
            city: this.#city,
            state: this.#state,
            complement: this.#complement,
        };
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
        !datePublic.value.trim() ||
        !complement.value.trim()
    ) {
        throw Error("Preencha todas as informações");
    }
}

// seria uma verificação de cep ainda não está colocada no código estou trabalhando nessa parte 
function verificaCep(cep){
    if(!cep.trim()) {
        throw new Error("Preencha o CEP");
    }
    const verficarCaracteresEspeciais = /[^\w\s]/;
    if(cep.includes(' ') || verficarCaracteresEspeciais.test(cep)) {
        throw new Error("O CEP deve conter somente números");
    }
}

//  botão que vai criar um evento ao clicar nele e adicionar no banco de dados

registerBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    try {
        checkFilled();
        //falta colocar o id 
        const newConference = new Conference(id ,nameConference.value, description.value, [cep.value, street.value, neighborhood.value, city.value, state.value, complement.value], datePublic.value, "imagem");
        
    console.log(newConference);
    } catch (e) {
        mostrarErro(e.message);
    }
    
})