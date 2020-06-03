import styled from 'styled-components';

export default styled.div`

  display: flex;
  width: 2rem;
  
    div{
      svg{
        background-color: inherit;

        &.ativo{
          path{
            fill:  ${props => props.theme.cores.quarta};
          }
        }

        &.desativo{
          path{
            fill: ${props => props.theme.cores.quinta};
          }
        }
      }
    }
`;
