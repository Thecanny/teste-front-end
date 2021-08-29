import styled from "styled-components";
import { ShoppingCart } from "styled-icons/typicons";
import { Search } from "styled-icons/bootstrap";
import { User } from "styled-icons/fa-regular";
import { Menu } from "styled-icons/boxicons-regular";


export const Header = styled.header`
  width: 100%;
  height: 80px;
  max-height: 80px;
  @media (max-width: 980px) {
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;

  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: inherit;
`;

export const Logo = styled.div`
  width: 20%;
  @media (max-width: 980px) {
    width: 43%;
    svg{
      width: 120px;
    }
  }
`;
export const Hamburger = styled.div`
  width: 20%;
  display: none;
  @media (max-width: 980px) {
    display: block;
  }
`;

export const SearchWrapper = styled.div`
  width: 46%;
  position: relative;
  @media (max-width: 980px) {
    width: 97%;
    order: 3;
  }
  input#search {
    border: none;
    border-bottom: 1px solid var(--color-cinza-escuro);
    padding: 10px;
    width: 100%;
    @media (max-width: 980px) {
      padding: 5px;
      }
    &::placeholder {
      color: var(--color-cinza-escuro);
      @media (max-width: 980px) {
        font-size: 14px;
      }
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 7px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const AccountWrapper = styled.div`
  width: 10%;
  a {
    text-decoration: none;
    font-size: 13px;
    color: var(--color-cinza-escuro);
  }
  @media (max-width: 980px) {
    display: none;
  }
`;
export const CartWrapper = styled.div`
  width: 10%;
  color: var(--color-preto);
  position: relative;
  @media (max-width: 980px) {
    width: 20%;
  }
  .cart-number {
    position: absolute;
    left: 25px;
    top: 3px;
    background: var(--color-rosa);
    color: var(--color-branco);
    border-radius: 50%;
    font-size: 12px;
    padding: 2px 4px;
  }
`;

// Icons

export const IconSearch = styled(Search)`
  width: 25px;
  height: 25px;
  color: var(--color-preto);
  @media (max-width: 980px) {
    width: 20px;
  height: 20px;
  }
`;
export const IconUser = styled(User)`
  width: 25px;
  height: 25px;
  color: var(--color-preto);
`;
export const IconCart = styled(ShoppingCart)`
  width: 25px;
  height: 25px;
  color: var(--color-preto);
`;
export const IconHamburguer = styled(Menu)`
  width: 25px;
  height: 25px;
  color: var(--color-preto);
`;
