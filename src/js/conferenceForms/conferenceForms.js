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

//  pegando os inputs necessários para o preenchimento do formulário de eventos 
const nameConference = document.getElementById("name-input");
const description = document.getElementById("description-text");
const cep = document.getElementById("cep-input");
const street= document.getElementById("street-input");
const neighborhood = document.getElementById("neighborhood-input");
const city = document.getElementById("city-input");
const state = document.getElementById("state-input");
const registerBtn = document.getElementById("register-btn");
const date = document.getElementById("date-input");

//  array do banco de dados
let bd = [];

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

// função que cria um evento usando a classe conference 
function createConference(name, content, location, date) {
    try {
        checkFilled();
    } catch (error) {
        console.error(error.message)
    }
    const newConference = new Conference(name, content, location, date);
    bd.push(newConference);
    console.log(newConference);
}

//  botão para adicionar o evento no banco de dados 
registerBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    checkFilled();
    const newConference = createConference(nameConference.value, description.value,[cep.value, street.value, neighborhood.value, city.value,state.value ]);
    console.log("Banco de Dados ", bd)
    nameConference.value = '';
    description.value = ''
    cep.value = '';
    street.value = '';
    neighborhood.value = '';
    city.value = '';
    state.value = '';
})