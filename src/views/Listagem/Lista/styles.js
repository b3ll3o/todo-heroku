import styled from 'styled-components';

export default styled.div`

  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 5%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .content{
    display: flex;
    flex-direction: column;
    margin-bottom: .75rem;
    height: fit-content;
    padding: .5rem;
    background-color: ${props => props.theme.cores.terceira};
    
    span{

      &.titulo{
        display: flex;
        height: 1.5rem;
        font-size: 1.25rem;
        margin-bottom: .5rem;
      }

      &.conteudo{
        display: block;
        min-height: 1rem;
        max-height: 15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
      }
    }
  }
`;