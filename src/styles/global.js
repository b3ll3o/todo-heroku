import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    width: 100%;
  }

  html body #root{
    font: 14px 'Roboto', sans-serif;
    background: white;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    width: 100%;
  }

  ul {
    list-style: none;
  }
`;