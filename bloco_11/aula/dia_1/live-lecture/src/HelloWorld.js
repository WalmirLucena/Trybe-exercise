import React from 'react';

class HelloWorld extends React.Component {
    render() {
        
        const element = (
            <h1 className="hello-world">Hello, World!</h1>
          )

        const currentLearning = (subject) => {
            return (<h2>Eu estou aprendendo {subject}</h2>)
        }
          return (
            <>
            {element}
            <p>Esse é o meu primeiro App React</p>
            {currentLearning('React')}
            </>);
    }
}

export default HelloWorld;
