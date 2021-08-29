import styled from "styled-components";

export const NewsletterWrapper = styled.section`
  background: var(--color-cinza-claro);
  font-family: 'Lato', sans-serif; 
`;

export const Container = styled.div`
  max-width: 1440px;

  padding: 40px 20px;
  margin: 0 auto;
`;

export const NewsletterTittle = styled.div`
  text-align: center;
  margin: 20px 0;
  h3{
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
  }
`;

export const NewsletterFormWrapper = styled.div`
  text-align: center;
  &.close{
    display: none;
  }
  form{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 53%;
    @media(max-width: 980px){
      width: 100%;
    }
  }
  .input-fild{
    @media(max-width: 980px){
      width: 100%;
    }
    .error-input{
      color: #D7182A;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
    }
  }
  input{
    border: 1px solid #BDBDBD;
    border-radius: 5px;     
    width: 280px;
    height: 48px;
    margin-left: 10px;
    padding: 10px;
    @media(max-width: 980px){
      margin-bottom: 10px;
      margin-left: 0;
      width: 300px;
    }
    &.error{
      border: 1px solid #D7182A;
    }
  }
  button{
    border-radius: 5px;
    color: var(--color-branco);
    background: var(--color-preto);
    width: 140px;
    height: 48px;
    border: none;
    margin: 0 10px;
    @media(max-width: 980px){
      width: 100%;
    }
  }
`;

export const NewsletterSuccessWrapper = styled.div`
  text-align: center;
  display: none;
  &.open{
    display: block;
  }
  button{
    background: var(--color-preto);
    border-radius: 5px;
    width: 328px;
    height: 48px;
    color:var(--color-branco);
    border: none;
    margin: 10px;
    @media(max-width: 980px){
      width: 89%;
    }
  }
`


