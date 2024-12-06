import { Conference } from "../models/conferenceModel.js";

const nameConference = document.getElementById("name-input");
const description = document.getElementById("description-text");
const cep = document.getElementById("cep-input");
const street= document.getElementById("street-input");
const neighborhood = document.getElementById("neighborhood");
const city = document.getElementById("city-input");
const state = document.getElementById("state-input");
const registerBtn = document.getElementById("register-btn");


export function createConference(name, content, location, date) {
    const conference = new Conference(name, content, location, date);
    console.log(conference);
}

export function verificaCep(cep){
    try{
        if(!cep) {
            throw new Error("Preencha o CEP");
        }
        const verficarCaracteresEspeciais = /[^\w\s]/;
        if(cep.includes(' ') || verficarCaracteresEspeciais.test(cep)) {
            throw new Error("O CEP deve conter somente números");
        }
    } catch(erro) {
        
        console.error(erro.message);
    }

}

registerBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    verificaCep(cep.value);
})

//agora falta coloca na forma dos inputs e colocar dentro addEventListener
createConference("Odlion Evento", "Odilon", [12345678, "Rua", "Bairro","Cidade","Estado", "Quadra e Lote"], "Odilon")