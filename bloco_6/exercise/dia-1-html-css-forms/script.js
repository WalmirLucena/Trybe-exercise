let state = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const getState = document.getElementById('estado');
const getButton = document.getElementById('enviar');

function stateOnSelect() {
  for (let index = 0; index < state.length; index += 1) {
    let option = document.createElement('option');
    option.innerHTML = state[index];
    getState.appendChild(option);
  }
}

const clearButton = document.querySelector('#clear-button');

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}

clearButton.addEventListener('click', clearFields);

/* const picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD/MM/YYYY',
    toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[2], 10) - 1;
      const year = parseInt(parts[2], 10);
      console.log (new Date(year, month, day));
      return new Date(year, month, day);
     
    }
  }); */

new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
      minLength: 3
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    estado: {
      required: true,

    },
    radio: {
      required: true,

    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,

    },
    messages: {
      email: {
        required: 'O campo de email é obrigatório.',
        email: 'O email digitado não é válido',
        maxLength: 'O limite é de 50 caracteres.'

      },
      name: {
        required: 'O campo de nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
    },
    endereco: {
      required: 'O campo de Endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    cidade: {
      required: 'O campo de Cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    estado: {
      required: 'O campo de Estado é obrigatório.',

    },
    radio: {
      required: 'O campo de Radio é obrigatório.',

    },
    text: {
      required: 'O campo de Resumo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'O campo de Cargo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'O campo de Descrição de Cargo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'O campo de Data é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }
});

window.onload = function () {
  stateOnSelect();
}

