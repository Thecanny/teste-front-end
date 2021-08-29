import {useState,useEffect } from 'react'
import Product from './Product'
import * as S from './styles'
import Slider from "react-slick";

function Vitrine() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const reponse = await fetch("https://corebiz-test.herokuapp.com/api/v1/products");
      const data = await reponse.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrow: false
        }
      },
    ]
  };

  return (
    <S.VitrineWrapper>
      <S.VitrineTitle>
        <h2>Mais Vendidos</h2>
      </S.VitrineTitle>
      <Slider {...settings}>
      {products.map((product, index) => (
            <Product
              key={product.productId}
              productName={product.productName}
              stars={product.stars}
              image={product.imageUrl}
              price={product.price}
              listPrice={product.listPrice}
              installments={product.installments.map( inst => inst.quantity) }
              installmentsPrice={product.installments.map( price => price.value) }
            />
        ))}
      </Slider>
    </S.VitrineWrapper>
  );
}

export default Vitrine;