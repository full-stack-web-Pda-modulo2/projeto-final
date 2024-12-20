import { showErro } from "./modal.js"
import { form, eventos, carregarEvento } from "../details/eventos.js";

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
const dateInitial = document.getElementById("date-input-fist");
const dateFinal = document.getElementById("date-input-second");


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
//  Classe de conference(Eventos)
export class Conference {
    #id
    #name
    #content
    #initialDate
    #finalDate
    #timeOpen
    #timeClose

     constructor(id, name, content, location, initialDate, finalDate,timeOpen, timeClose) {
      
      this.#id = id;
      this.#name = name;
      this.#content = content;
      this.location = location;
      this.#initialDate = new Date(initialDate);
      this.#finalDate = new Date(finalDate);
      this.#timeOpen = timeOpen;
      this.timeClose = timeClose;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get content() {
        return this.#content;
    }

    set content(content) {
        this.#content = content;
    }

    get initialDate() {
            return this.#initialDate;
        }

    set initialDate(initialDate) {
        this.#initialDate = new Date(initialDate);
    }

    get finalDate() {
        return this.#finalDate;
    }

    set finalDate(finalDate) {
        this.#finalDate = new Date(finalDate);
    }

    get timeOpen() {
        return this.#timeOpen;
    }

    set timeOpen(timeOpen) {
        this.#timeOpen = timeOpen;
    }

    get timeClose() {
        return this.#timeClose;
    }

    set timeClose(timeClose) {
        this.#timeClose = timeClose;
    }

    formatDate(date) {
        const formatter = new Intl.DateTimeFormat('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
        return formatter.format(date);
    }

    getFormattedInitialDate() {
        return this.formatDate(this.#initialDate);
    }

    getFormattedFinalDate() {
        return this.formatDate(this.#finalDate);
    }

    get dataConference() {
        return [this.#content, this.PegaDados, this.#name]; 
    }

    isInitialDateValid() {
      if(this.initialDate.getTime() < Date.now()) {
        throw new Error("Data inválida")
      }
      console.log("Data válida")
    }

    isFinalDateValid() {
        if(this.finalDate.getTime() < Date.now()) {
          throw new Error("Data inválida")
        }
        console.log("Data válida")
      }
  
    getEventDuration() {
        const durationMs = this.finalDate.getTime() - this.initialDate.getTime();
  
        return this.formatDuration(durationMs);
    
    }

  timeUntilEvent() {
    const now = new Date().getTime();
    const timeUntilMs = this.initialDate.getTime() - now;

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
}

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

export let bd = [
    new Conference(1, "Introdução à Libras", "Aprenda os fundamentos da Língua Brasileira de Sinais.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-01-12", "2024-03-12", "10:00", "18:00"),
    new Conference(2, "Curso Avançado de Libras", "Aprofunde seus conhecimentos em Libras com este curso avançado.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-05", "2024-12-07", "12:00", "19:00"),
    new Conference(3, "Sinais para Profissionais de Saúde", "Aprenda sinais específicos para comunicação em ambientes de saúde.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-10", "2024-12-12", "13:00", "17:00"),
    new Conference(4, "Libras no Contexto Escolar", "Estratégias para usar Libras no ambiente educacional.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-15", "2024-12-17", "09:00", "13:00"),
    new Conference(5, "História e Cultura Surda", "Descubra a história e a cultura da comunidade surda.", ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"], "2024-12-20", "2024-12-22", "17:00", "20:00")
];


console.log(bd);

const open = document.getElementById("time-input-open");
const close = document.getElementById("time-input-close");

document.addEventListener("DOMContentLoaded", () => {
    // const registerBtn = document.getElementById("register-btn");
    // esse btn já fo nas primeiras linhas
    
    if (registerBtn) {
        registerBtn.addEventListener("click", (event)=>{
            event.preventDefault();
            console.log(open.value);
            try {
                //  checa se todos os inputs tem algum valor
                checkFilled();
        
                //  instância um novo objeto do tipo Adress
                const newAdress = new Adress(cep.value, street.value, neighborhood.value,  city.value, state.value, complement.value);
                
                //Instância um novo objeto do tipo Conference
                const newConference = new Conference(bd[bd.length-1].id +1,nameConference.value, description.value,  newAdress.getData, dateInitial.value, dateFinal.value,open.value, close.value);
        
                // verifica se as datas são válidas
                newConference.isInitialDateValid();
                newConference.isFinalDateValid();
                
                // atribui o ultimo valor do array banco de dados a variavel newConference
                bd.push(newConference);
        
                //  cria uma variavel que seria o proximo id do proximo evento
        
                // coloca a variavel proxConference é um número na última posição do array banco de dados
                form.classList.remove("show");
                form.classList.add("hidden");

                eventos.classList.remove("hidden");
                eventos.classList.add("show");
                carregarEvento(newConference.id,newConference.name, newConference.formatDate(newConference.initialDate),newConference.timeOpen,newConference.timeClose, newConference.location[3]);
                
            } catch (e) {
                //  aparece a de erro na tela 
                console.log(e)
                showErro(e.message);
            }
            
        });
    }
});