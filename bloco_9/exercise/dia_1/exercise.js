const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};
/* 
console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C */

//2
const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars2 = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus2 = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter2 = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};
/* 
console.log(planetDistanceFromSun2(mars2)); // A
setTimeout(() => console.log(planetDistanceFromSun2(venus2)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun2(jupiter2)), 2000); // C
 */
//3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

/* getPlanet(); */ // imprime Marte depois de 4 segundos

//4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    const temperature = getMarsTemperature();
    setTimeout(() => console.log( `Mars temperature is: ${temperature} degree Celsius`), messageDelay());
} 

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

//5
const messageDelay2 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature2 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature2 = (onSucess) => {
    const temperature = getMarsTemperature2();
    setTimeout(() => onSucess(temperature), messageDelay2());
} 

sendMarsTemperature2(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature2(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

//6
const messageDelay3 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature3 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit3 = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit3 = (temperature) =>
  console.log(`It is currently ${toFahrenheit3(temperature)}ºF at Mars`);

const greet3 = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature3 = (onSucess, onError) => {
    const temperature = getMarsTemperature3();
    setTimeout(() => {
        const messageSucceed = Math.random() >= 0.5;
        if(messageSucceed){
            onSucess(temperature);
        }
        else {
            onError('Robot is busy');
        }
    }, messageDelay3());
}; 

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(temperatureInFahrenheit3, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(greet3, handleError);