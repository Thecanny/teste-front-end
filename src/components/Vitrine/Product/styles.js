import styled from "styled-components";

export const productWrapper = styled.div`
  width: 274px;
  margin: 0 auto;
  text-align: center;
  @media(max-width: 980px){
      width: auto;
    }
  &:hover {
    background: var(--color-cinza-claro);
    .btn-action {
      button {
        visibility: visible;
      }
    }
  }
  h3 {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-cinza-escuro);
  }
  .productImage {
    position: relative;
    img {
      width: 100%;
    }
  }
  .priceContainer {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: var(--color-preto);
  }
  .installments {
    font-size: 11px;
    line-height: 15px;
    color: var(--color-cinza-escuro);
  }
  .listPrice {
    font-size: 12px;
    line-height: 16px;
    color: var(--color-cinza-escuro);
    height: 15px;
  }
  .flag {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 100px solid var(--color-rosa);
    border-left: 100px solid transparent;
    span {
      color: var(--color-branco);
      position: absolute;
      right: 14px;
      bottom: 59px;
      font-weight: 900;
      font-size: 16px;
    }
  }
  .avaliations {
    margin: 10px auto;
    width: 33%;
    height: 10px;
    @media(max-width: 980px){
      width: 56%;
    }
    ul {
      display: flex;
      justify-content: flex-start;
    }
    li {
      margin: 0 3px;
    }
  }
  .btn-action {
    button {
      width: 125.28px;
      height: 32.42px;
      background: var(--color-preto);
      color: var(--color-branco);
      border: none;
      border-radius: 5px;
      margin: 10px 0;
      visibility: hidden;
      @media(max-width: 980px){
        visibility: visible;
    }
    }
  }
`;
