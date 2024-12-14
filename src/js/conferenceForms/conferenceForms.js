<<<<<<< HEAD
import { showErro } from "./modal.js"
=======
import { mostrarErro } from "./modal.js"
>>>>>>> develop-odilon
//  pegando os inputs necessários para o preenchimento de dados de eventos 
const nameConference = document.getElementById("name-input");
const description = document.getElementById("description-text");
const cep = document.getElementById("cep-input");
const street= document.getElementById("street-input");
const neighborhood = document.getElementById("neighborhood-input");
const city = document.getElementById("city-input");
const state = document.getElementById("state-input");
const registerBtn = document.getElementById("register-btn");
<<<<<<< HEAD
const complement = document.getElementById("complement-input");
const dateInitial = document.getElementById("date-input-fist");
const dateFinal = document.getElementById("date-input-second");
const image = document .getElementById("myFile");

//  array do banco de dados
 export let bd = [
=======
const datePublic = document.getElementById("date-input");
const complement = document.getElementById("complement-input");

//  array do banco de dados
let bd = [
>>>>>>> develop-odilon
    {
        id: 1,
        name: "Introdução à Libras",
        content: "Aprenda os fundamentos da Língua Brasileira de Sinais.",
<<<<<<< HEAD
        location: ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"],
=======
        location: "São Paulo, SP",
>>>>>>> develop-odilon
        datePublic: "2024-12-01",
        img: "https://example.com/images/intro-libras.jpg"
    },
    {
        id: 2,
        name: "Curso Avançado de Libras",
        content: "Aprofunde seus conhecimentos em Libras com este curso avançado.",
<<<<<<< HEAD
        location: ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"],
=======
        location: "Rio de Janeiro, RJ",
>>>>>>> develop-odilon
        datePublic: "2024-12-05",
        img: "https://example.com/images/curso-avancado-libras.jpg"
    },
    {
        id: 3,
        name: "Sinais para Profissionais de Saúde",
        content: "Aprenda sinais específicos para comunicação em ambientes de saúde.",
<<<<<<< HEAD
        location: ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"],
=======
        location: "Belo Horizonte, MG",
>>>>>>> develop-odilon
        datePublic: "2024-12-10",
        img: "https://example.com/images/sinais-saude.jpg"
    },
    {
        id: 4,
        name: "Libras no Contexto Escolar",
        content: "Estratégias para usar Libras no ambiente educacional.",
<<<<<<< HEAD
        location: ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"],
=======
        location: "Curitiba, PR",
>>>>>>> develop-odilon
        datePublic: "2024-12-15",
        img: "https://example.com/images/libras-escolar.jpg"
    },
    {
        id: 5,
        name: "História e Cultura Surda",
        content: "Descubra a história e a cultura da comunidade surda.",
<<<<<<< HEAD
        location: ["12345-678", "Rua Exemplo", "Bairro Exemplo", "São Paulo", "SP", "Apto 101"],
        datePublic: "2024-12-20",
        img: "https://example.com/images/historia-cultura-surda.jpg"
    }
=======
        location: "Salvador, BA",
        datePublic: "2024-12-20",
        img: "https://example.com/images/historia-cultura-surda.jpg"
    },
    6
>>>>>>> develop-odilon
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
//  Classe de conference(Eventos)
<<<<<<< HEAD
class Conference {
=======
class Conference extends Adress {
>>>>>>> develop-odilon
    #id
    #name
    #content
    #datePublic
<<<<<<< HEAD
    #durationConference 
    #img
    #initialDate
    #finalDate

     constructor(id, name, content, location, initialDate, finalDate, img) {
      // Chama o construtor da classe pai (Adress) com os dados de Adress
      
      this.#id = id;
      this.#name = name;
      this.#content = content;
      this.location = location;
      this.#initialDate = new Date(initialDate);
      this.#finalDate = new Date(finalDate);
      this.#img = img;
=======
    #img

    constructor(id, name, content, location, datePublic, img) {
        // Chama o construtor da classe pai (Adress) com os dados de Adress
        super(...location);  // location seria um array com [cep, street, neighborhood, city, state, complement]
        this.#id = id;
        this.#name = name;
        this.#content = content;
        this.#datePublic = datePublic;
        this.#img = img;
>>>>>>> develop-odilon
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

    get datePublic() {
        return this.#datePublic;
    }

<<<<<<< HEAD
    set datePublic(date) {
        date = new Date().getTime();
        this.#datePublic =  date;
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

    get durationConference() {
        return this.#durationConference;
    }

    set durationConference(time) {
        this.#durationConference = time;
=======
    set datePublic(datePublic) {
        this.#datePublic = datePublic;
>>>>>>> develop-odilon
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

<<<<<<< HEAD
=======

>>>>>>> develop-odilon
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
<<<<<<< HEAD
        !complement.value.trim() ||
        !dateInitial.value.trim() ||
        !dateFinal.value.trim() ||
        !image
=======
        !datePublic.value.trim() ||
        !complement.value.trim()
>>>>>>> develop-odilon
    ) {
        throw Error("Preencha todas as informações");
    }
}

<<<<<<< HEAD
//  botão que vai criar um evento ao clicar nele e adicionar no banco de dados
registerBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    
    try {
        //  checa se todos os inputs tem algum valor
        checkFilled();
        //  instância um novo objeto do tipo Adress
        const newAdress = new Adress(cep.value, street.value, neighborhood.value,  city.value, state.value, complement.value)
        
        //  transforma os valores input de datas em um objeto do tipo Date
        // const initialDateobj = new Date(dateInitial.value)
        // const finalDateobj = new Date(dateFinal.value)
        
        //Instância um novo objeto do tipo Conference
        const newConference = new Conference(bd[bd.length-1].id,nameConference.value, description.value,  newAdress.getData, dateInitial.value, dateFinal.value, "imagem");

        newConference.isInitialDateValid();
        
        // atribui o ultimo valor do array banco de dados a variavel newConference
        bd[bd.length-1] = newConference;

        //  cria uma variavel que seria o proximo id do proximo evento
        const proxConference = new Conference(bd[bd.length-1].id+1);
=======
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
        const newConference = new Conference(bd[bd.length-1],nameConference.value, description.value, [cep.value, street.value, neighborhood.value, city.value, state.value, complement.value], datePublic.value, "imagem");
        
        // atribui o ultimo valor do array banco de dados a variavel newConference
        bd[bd.length-1] = newConference

        //  cria uma variavel que seria o proximo id do proximo evento
        const proxConference = bd[bd.length-1].id+1
>>>>>>> develop-odilon

        // coloca a variavel proxConference é um número na última posição do array banco de dados
        bd.push(proxConference);
        console.log(bd)
<<<<<<< HEAD
        
    } catch (e) {
        //  aparece a de erro na tela 
        console.log(e)
        showErro(e.message);
    }
    
})
=======
    } catch (e) {
        mostrarErro(e.message);
    }
    
})
>>>>>>> develop-odilon
