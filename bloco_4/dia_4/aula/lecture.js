let pessoaEstudante = {
    'nome': 'Ramona',
    sobrenome: 'Jesus',
    idade: 70,
    apelido: 'Espanhola',
    'blocosFinalizados': ['bloco1','bloco2', 'bloco3'],
    'endereco':{
        logradouro: 'Rua Xingu',
        numero: 245,
        cidade: 'Santos',
        estado: 'Sao Paulo',        
    }
}

// console.log("Meu nome é", pessoaEstudante['nome'], pessoaEstudante['sobrenome']);

// pessoaEstudante.turma = 'turma 14A';


// delete pessoaEstudante.apelido;
// console.log(pessoaEstudante.blocosFinalizados);

// for(let bloco of pessoaEstudante.blocosFinalizados){
//     console.log(bloco);
// }
console.log(pessoaEstudante.endereco.cidade);

for(let key in pessoaEstudante){
    console.log(pessoaEstudante[key]);
}