import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica que quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id:'7h3oGtr0fxc',
    joke: 'Whiteboards... are remarkable.',
    status: 200,
  }

  const response = { json: jest.fn().mockImplementation(() => Promise.resolve(joke))}

  global.fetch = jest.fn().mockResolvedValue(response);

  const { findByText} = render(<App />);
  await findByText('Whiteboards... are remarkable.')
});
