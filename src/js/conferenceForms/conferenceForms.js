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
const datePublic = document.getElementById("date-input");
const complement = document.getElementById("complement-input");

//  array do banco de dados
 export let bd = [
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
    6
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
//  Classe de conference(Eventos)
class Conference extends Adress {
    #id
    #name
    #content
    #datePublic
    #img

    constructor(id, name, content, location, datePublic, img) {
        // Chama o construtor da classe pai (Adress) com os dados de Adress
        super(...location);  // location seria um array com [cep, street, neighborhood, city, state, complement]
        this.#id = id;
        this.#name = name;
        this.#content = content;
        this.#datePublic = datePublic;
        this.#img = img;
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

    set datePublic(datePublic) {
        this.#datePublic = datePublic;
    }

    // Acessando PegaDados da classe pai diretamente
    get dataConference() {
        return [this.#content, this.PegaDados, this.#name];  // Usando PegaDados da superclasse
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
        !datePublic.value.trim() ||
        !complement.value.trim()
    ) {
        throw Error("Preencha todas as informações");
    }
}

// seria uma verificação de cep ainda não está colocada no código estou trabalhando nessa parte 
function checkCEP(cep){
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

        // coloca a variavel proxConference é um número na última posição do array banco de dados
        bd.push(proxConference);
        console.log(bd)
    } catch (e) {
        //  aparece a mensagem de erro na tela 
        showErro(e.message);
    }
    
})

