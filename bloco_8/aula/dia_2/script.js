const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio','Janderson', 'Sócrates'];

/* jogadores.forEach((item) => console.log(item)); */

const pessoas = [
    {nome: "Robert", sobrenome: 'De Niro', dirige: false},
    {nome: "robert", sobrenome: 'Pleiffer', dirige: false},
    {nome: "Will", sobrenome: 'Smith', dirige: false},
    {nome: "Mariah", sobrenome: 'Carey', dirige: false},
    {nome: "Lady", sobrenome: 'Gaga', dirige: false},
    {nome: "Justin", sobrenome: 'Bieber', dirige: false},
]

const temPessoaQueNaoDirige = pessoas.find((item) => item.dirige === false);
/* console.log(temPessoaQueNaoDirige); */

console.log(jogadores.sort());

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

numeros.sort((a,b) => b-a );

console.log(numeros);