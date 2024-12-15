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

     constructor(id, name, content, location, initialDate, finalDate) {
      // Chama o construtor da classe pai (Adress) com os dados de Adress
      
      this.#id = id;
      this.#name = name;
      this.#content = content;
      this.location = location;
      this.#initialDate = new Date(initialDate);
      this.#finalDate = new Date(finalDate);
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

    // Acessando PegaDados da classe pai diretamente
    get dataConference() {
        return [this.#content, this.PegaDados, this.#name];  // Usando PegaDados da superclasse
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
    // verifica se o evento já aconteceu
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