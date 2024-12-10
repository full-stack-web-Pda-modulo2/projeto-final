'use strict'
const preencherFormulario = (endereco)=>{
    document.getElementById('street-input').value = endereco.logradouro;
    document.getElementById('neighborhood-input').value = endereco.bairro;
    document.getElementById('city-input').value = endereco.localidade;
    document.getElementById('state-input').value = endereco.uf;
}
//função para validar se o valor contém apenas números
const eNumero = (numero)=>/^[0-9]+$/.test(numero);
//função que valida o CEP, que deve ter 8 díditos e conter apenas números
const cepValido = (cep)=> cep.length === 8 && eNumero(cep);
const pequisarCep = async() =>{
try {
    let cep= document.getElementById("cep-input").value;
    cep = cep.replace(/\D/g, '');
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('state-input').value = 'CEP não encontrado!';
            throw new Error('CEP não encontrado!')
        }else{
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('state').value = 'CEP incorreto!'
        throw new Error('CEP incorreto!')
    }
    
    
} catch (error) {
    console.log(error.message)
}    
};
document.getElementById("cep-input").addEventListener('focusout', pequisarCep)