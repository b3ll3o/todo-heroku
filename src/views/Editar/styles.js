import styled from 'styled-components';

export default styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.cores.segunda};

  form{
    margin-top: 4rem;
  }
`;