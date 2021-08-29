import * as S from './styles';
import Slider from "react-slick";

import imageFullbanner from '../../img/fullbannerDesk.jpg';
import imageFullbannerMob from '../../img/fullbannerMob.jpg';

export default function Fullbanner() {
  let settings = {
    arrow: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrow: false
        }
      },
    ]
  };

  return (
    <Slider {...settings}>
      <S.FullbannerImg>
        <img className="Desk" src={imageFullbanner} alt="fullbanner 01" />
        <img className="Mob" src={imageFullbannerMob} alt="fullbanner 01" />
        <S.FullbannerTextWrapper>
          <div className="fullbanner-text">
            <p>
            Olá, o que você está buscando?
            </p>
            <h1>Criar ou migrar seu e-commerce?</h1>
          </div> 
        </S.FullbannerTextWrapper>
      </S.FullbannerImg>
      <S.FullbannerImg>
        <img className="Desk" src={imageFullbanner} alt="fullbanner 01" />
        <img className="Mob" src={imageFullbannerMob} alt="fullbanner 01" />
      </S.FullbannerImg>
    </Slider>
  );
}
