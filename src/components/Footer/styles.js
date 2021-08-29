import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--color-preto);
`;
export const FooterContainer = styled.div`
    max-width: 1440px;

    padding: 40px 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Location = styled.div`
  width: 30%;
  @media(max-width: 980px){
      width: 100%;
    }
  h3{
    font-weight: 900;
    font-size: 20px;
    line-height: 27px;
    color: var(--color-branco);
    padding-bottom: 10px;
    &::after{
      content: '';
      width: 65px;
      height: 4px;
      background:var(--color-branco);
      margin: 10px 0;
      display: block;
    }
  }
  p{
    color: var(--color-branco);
    font-weight: normal;
    font-size: 13px;
    line-height: 12px;
    margin: 10px 0;
  }
`;

export const Contact = styled.div`
  text-align: center;
  width: 30%;
  padding: 24px;
  @media(max-width: 980px){
      width: 100%;
    }
  button{
    background:var(--color-branco);
    border-radius: 5px;
    border: none;
    width: 195px;
    height: 38px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: block;
    margin: 20px auto;
    position: relative;
    &::before{
      content: '';
      background-size: cover;
      position: absolute;
      left: 12px;
    }
  }
  .contact-email{
    &::before{
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='15' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.2337 0.666626H1.72725C0.798681 0.666626 0.047382 1.42663 0.047382 2.35551L0.0389404 12.4888C0.0389404 13.4177 0.798681 14.1777 1.72725 14.1777H15.2337C16.1623 14.1777 16.9221 13.4177 16.9221 12.4888V2.35551C16.9221 1.42663 16.1623 0.666626 15.2337 0.666626ZM15.2338 4.04448L8.48054 8.2667L1.72729 4.04448V2.35559L8.48054 6.57781L15.2338 2.35559V4.04448Z' fill='black'/%3E%3C/svg%3E%0A");
      width: 17px;
      height: 15px;
    }
  }
  .online-consultant{
    &::before{
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.16881 0.133301C3.97336 0.133301 0.571411 3.53641 0.571411 7.7333V13.6444C0.571411 15.0462 1.70258 16.1777 3.10388 16.1777H5.63635V9.42219H2.25972V7.7333C2.25972 4.4653 4.90193 1.82219 8.16881 1.82219C11.4357 1.82219 14.0779 4.4653 14.0779 7.7333V9.42219H10.7013V16.1777H14.0779V17.0222H8.16881V18.7111H13.2337C14.635 18.7111 15.7662 17.5795 15.7662 16.1777V7.7333C15.7662 3.53641 12.3643 0.133301 8.16881 0.133301Z' fill='black'/%3E%3C/svg%3E ");
      width: 16px;
      height: 19px;
      top: 10px;

    }
  }
`;

export const LogosFooter = styled.div`
  width: 30%;
  text-align: right;
  padding: 60px 0;
  @media(max-width: 980px){
      width: 100%;
      text-align: center;
      padding: 20px 0;
    }
`
