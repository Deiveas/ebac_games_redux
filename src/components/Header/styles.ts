import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 18px;
    flex: 1;
  }

  div {
    display: flex;
    align-items: center;
    img {
      width: 18px;
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      margin-bottom: 16px;
      width: 100%;
    }

    div {
      width: 100%;
      justify-content: flex-start;
      margin-top: 0;

      img {
        width: 24px; /* Aumente o tamanho da imagem se necessário */
        margin-right: 8px;
      }
    }
  }
`
