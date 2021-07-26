const pessoa = {
    nome: 'Gabriel',
    sobreNome: 'Oliva',
    idade: 27,
    usaOculos: true,
}

pessoa['time'] = 'Flamengo';
pessoa.estado = 'Amazonas';


pessoa.time = 'Cruzeiro';
/* console.table(pessoa); */

/* console.log(`O ${pessoa.nome} torce para o ${pessoa.time}`); */

const endereco = {
    logradouro: 'Rua marques rebelo',
    numero: 123,
    bairro: 'Aclimação',
}
pessoa.endereco = endereco;
/* console.table(pessoa); 
 */


const livro1 = {
    autor: 'Machado de Assis',
    titulo:'Eramos seis'
}
const livros2 = {
    autor: 'José de Alencar',
    titulo: 'Veredas',
    qtdPaginas: 200,
}

//Verifica se o objeto tem qtdPaginas como propriedade
function verificaQtdPaginas(livro){
  return  Object.keys(livro).includes('qtdPaginas');
}

/* console.log(verificaQtdPaginas(livros2)); */
console.log(Object.entries(pessoa));

const livroComAutor = Object.assign({},livro1, livros2);
console.log(livroComAutor);