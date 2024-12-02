'use strict'


const preencherFormulario = (endereco)=>{
    document.getElementById('street-input').value = endereco.logradouro;
    document.getElementById('neighborhood').value = endereco.bairro;
    document.getElementById('city').value = endereco.localidade;
    document.getElementById('state').value = endereco.uf;
}


//função para validar se o valor contém apenas números
const eNumero = (numero)=>/^[0-9]+$/.test(numero);

//função que valida o CEP, que deve ter 8 díditos e conter apenas números
const cepValido = (cep)=> cep.length === 8 && eNumero(cep);


const pequisarCep = async() =>{
try {
    const cep= document.getElementById("cep").value;

    cep = cep.replace(/\D/g, '');

    const url = `http://viacep.com.br/ws/${cep}/json/`

    
    
} catch (error) {
    
}    


}