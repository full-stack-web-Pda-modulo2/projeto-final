import { showErro } from "./modal.js";
const fillForm = (adress)=>{
    document.getElementById('street-input').value = adress.logradouro;
    document.getElementById('neighborhood-input').value = adress.bairro;
    document.getElementById('city-input').value = adress.localidade;
    document.getElementById('state-input').value = adress.uf;
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

        if(validCEP(cep)){
            const data = await fetch(url);
            const adress = await data.json();
            if(adress.hasOwnProperty('erro')){
                throw new Error('CEP não encontrado!');
            }else{
                fillForm(adress);
            }
        }else{
            throw new Error('CEP incorreto!')
        }
    } catch (error) {
        showErro(error.message)
    }    
};
document.getElementById("cep-input").addEventListener('focusout', pequisarCep)