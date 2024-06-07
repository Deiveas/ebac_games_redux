import styled from 'styled-components'
import { cores } from '../../styles'

export const Produto = styled.div`
  background-color: #1e1e1e; /* Adicionei uma cor de fundo para melhor visualização */
  padding: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 260px;
    margin-bottom: 8px;
    object-fit: cover; /* Adicionado para garantir que a imagem mantenha sua proporção */

    @media (max-width: 768px) {
      height: 200px;
    }
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: #fff;

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
  }
`

export const Tag = styled.span`
  background-color: ${cores.corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 768px) {
    padding: 4px;
    font-size: 10px;
  }
`

export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0;

  li {
    background-color: ${cores.corPrincipal};
    padding: 8px;
    font-size: 10px;
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 8px;
      padding: 4px;
    }
  }
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 0;
  }
`
