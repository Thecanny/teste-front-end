import * as S from "./styles";
import LogosFooter from '../../img/Logos-Footer.png';

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.Location>
          <h3>Localização</h3>
          <p> Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
          <p> Alphavile SP </p>
          <p> brasil@corebiz.ag </p>
          <p>+55 11 3090 1039</p>
        </S.Location>
        <S.Contact>
          <button className="contact-email">ENTRE EM CONTATO</button>
          <button className="online-consultant">FALE COM O NOSSO CONSULTOR ONLINE</button>
        </S.Contact>
        <S.LogosFooter>
          <img src={LogosFooter} alt="Logos footer" />
        </S.LogosFooter>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
