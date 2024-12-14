<<<<<<< HEAD
import { showErro } from "./modal.js";
const fillForm = (adress)=>{
    document.getElementById('street-input').value = adress.logradouro;
    document.getElementById('neighborhood-input').value = adress.bairro;
    document.getElementById('city-input').value = adress.localidade;
    document.getElementById('state-input').value = adress.uf;
=======
import { mostrarErro } from "./modal.js";
const preencherFormulario = (endereco)=>{
    document.getElementById('street-input').value = endereco.logradouro;
    document.getElementById('neighborhood-input').value = endereco.bairro;
    document.getElementById('city-input').value = endereco.localidade;
    document.getElementById('state-input').value = endereco.uf;
>>>>>>> develop-odilon
}
//função para validar se o valor contém apenas números
const isNumber = (number)=>/^[0-9]+$/.test(number);
//função que valida o CEP, que deve ter 8 díditos e conter apenas números
const validCEP = (cep)=> cep.length === 8 && isNumber(cep);
const pequisarCep = async() =>{
    try {
        let cep= document.getElementById("cep-input").value;
        cep = cep.replace(/\D/g, '');
        const url = `http://viacep.com.br/ws/${cep}/json/`;
<<<<<<< HEAD
        if(validCEP(cep)){
            const data = await fetch(url);
            const adress = await data.json();
            if(adress.hasOwnProperty('erro')){
                throw new Error('CEP não encontrado!');
            }else{
                fillForm(adress);
=======
        if(cepValido(cep)){
            const dados = await fetch(url);
            const endereco = await dados.json();
            if(endereco.hasOwnProperty('erro')){
                throw new Error('CEP não encontrado!');
            }else{
                preencherFormulario(endereco);
>>>>>>> develop-odilon
            }
        }else{
            throw new Error('CEP incorreto!')
        }
    } catch (error) {
<<<<<<< HEAD
        showErro(error.message)
=======
        mostrarErro(error.message)
>>>>>>> develop-odilon
    }    
};
document.getElementById("cep-input").addEventListener('focusout', pequisarCep)