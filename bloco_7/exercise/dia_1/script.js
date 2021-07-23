/* const testingScope = (escopo) => {
    if (escopo === true) {
        console.log(`Não devo ser utilizada fora do meu escopo (if)
ótimo, fui utilizada no escopo !`);
    } else {
      console.log(`Não devo ser utilizada fora meu escopo (else)
ótimo, fui utilizada no escopo !`);
    }
  }

  testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function (a,b){return a - b});


// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

/* const fatorial = (num) => {
    let sum =1;
    for(let i=1; i <= num; i+=1){
        
        sum = sum*i;
        
    }
    return sum;
}
console.log(fatorial(5)); */
/* 
const factorial= number => number > 1 ? number*factorial(number-1): 1;
console.log(factorial(5));

const longestWord = text => {
    let getWords = text.split(' ');
    let maxLength = 0;
    let result = '';
    for(let index=0; index < getWords.length; index +=1){
        if(getWords[index].length > maxLength){
            maxLength = getWords[index].length ;
            result = getWords[index];
        }
    }
    return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); */

const array = ["Bootstrap", "JavaScript", "Html", "Css", "Git"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach(elemento =>
    result = `${result}

    - ${elemento}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));