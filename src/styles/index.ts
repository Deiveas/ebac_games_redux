import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#eee',
  corFundo: '#000000',
  corPrincipal: '#DF0101',
  corSecundaria: '#FFFF00'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto};
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
    line-height: 1.6; /* Melhorando a legibilidade */
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px; /* Adicionando padding para garantir que o conteúdo não encoste nas bordas */

    @media (max-width: 1024px) {
      max-width: 80%;
    }

    @media (max-width: 768px) {
      max-width: 95%; /* Melhorando a experiência em dispositivos menores */
    }
  }
`
