let state = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia',  'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const getState = document.getElementById('estado');
const getButton = document.getElementById('enviar');

function stateOnSelect(){
    for(let index=0;index<state.length; index+=1){
        let option = document.createElement('option');
        option.innerHTML = state[index];
        getState.appendChild(option);
    }
}

function handleSubmit(event){
    event.preventDefault();

    //Validar os dados
let name = document.querySelector('[name=nome]');
//Verifica Max Lenght e REquire
if(name.value.length > 40 || name.value.length ===0 ){
    alert("Nome Inválido!");
}

}


window.onload = function(){
    stateOnSelect();

getButton.addEventListener('click',handleSubmit)
}