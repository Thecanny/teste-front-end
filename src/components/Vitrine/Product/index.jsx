import {useContext} from 'react';
import * as S from "./styles";
import StarFull from "../../../img/IconStarsFull.png";
import StarEmpty from "../../../img/IconStarsEmpty.png";
import parse from 'html-react-parser';
import {CartContext} from '../../../context/CartContext';


export default function Product({
  productName,
  stars,
  image,
  price,
  listPrice,
  installments,
  installmentsPrice,
}) {
  const cartNumber = useContext(CartContext);

  // Função que formata os preços para o Real
  const formatPrice = (price) => {
    let newPrice = price / 100;
    newPrice = newPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return newPrice;
  };

  // Função que coloca as strelas de avaliação no produto
  const avaliations = (stars) => {
    let starFull = [];
    let starempty = [];
    for (let i = 0; i < stars; i++) {
      starFull[i] = `<li key=${i}><img src=${StarFull} alt="icon star" /></li>`;
    }
    for (let i = 0; i < (5 - stars); i++) {
      starempty[i] = `<li key=${i}><img src=${StarEmpty} alt="icon star" /></li>`;
    }
    let fun01 = starFull.map((i) =>  parse(i) )
    let fun02 = starempty.map((i) =>  parse(i) )

    return[fun01, fun02]
  };

  const handleClick = () => {
    cartNumber.setCartNumber((cartNumber) => cartNumber + 1)
  }

  return (
    <S.productWrapper>
      <div className="productImage">
        <img src={image} alt={productName} />
        {listPrice !== null ? (
          <div className="flag">
            <span>OFF</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <h3>{productName}</h3>
      <div className="avaliations" >
        <ul>
          { avaliations(stars)}
        </ul>
      </div>
      <div className="listPrice">
        {listPrice !== null ? `de ${formatPrice(listPrice)}` : ""}
      </div>
      <div className="priceContainer">
        <span>por {formatPrice(price)}</span>
      </div>
      <div className="installments">
        <span>
          {installments.length
            ? `ou em  ${installments}x de ${formatPrice(installmentsPrice)}`
            : ""}
        </span>
      </div>
      <div className="btn-action">
            <button onClick={handleClick}>COMPRAR</button>
      </div>
    </S.productWrapper>
  );
}
