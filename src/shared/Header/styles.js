import styled from 'styled-components';

export default styled.div`

  display: flex;
  height: 3rem;
  width: 100%;
  padding: .75rem;
  background-color: ${props => props.theme.cores.primeira};
  align-items: center;

  div{
    display: flex;
  }

  a {
    display: flex;
    text-decoration: none;
    color: ${props => props.theme.cores.letra};
    font-size: 2rem;
  }
`;