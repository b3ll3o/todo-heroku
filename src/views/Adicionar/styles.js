import styled from 'styled-components';

export default styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.cores.segunda};

  form {

    margin-top: 4rem;
  }
`;