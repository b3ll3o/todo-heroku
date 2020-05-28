import styled from 'styled-components';

export default styled.form`

  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 5%;
  background-color: inherit;

  input {
    height: 2rem;
    padding: .5rem;
    font-size: 1rem;
    border: none;
    color: ${props => props.theme.cores.letra};
    background-color: ${props => props.theme.cores.terceira}; 
    margin-bottom: .5rem;
    font-weight: 900;
  }

  textarea{
    height: 20rem;
    padding: .5rem;
    font-size: 1rem;
    border: none;
    color: ${props => props.theme.cores.letra};
    background-color: ${props => props.theme.cores.terceira};
    margin-bottom: .5rem;
    font-weight: 900;
  }

  button {
    height: 2.5rem;
    padding: .625rem;
    font-size: 1.25rem;
    border: none;
    color: ${props => props.theme.cores.letra};
    background-color: ${props => props.theme.cores.quarta};
    align-items: center;
    font-weight: 900;
    justify-content: center;
  }

  .primeiroItem {
    margin-top: .5rem;
  }
`