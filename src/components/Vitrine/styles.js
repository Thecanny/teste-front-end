import styled from "styled-components";

export const VitrineWrapper = styled.section`
  max-width: 1440px;

  padding: 0 20px;
  margin: 40px auto;

  .productWrapper{
    width:216px ;
    margin: 0 auto;
  }
  .slick-dots{
    top: 100% !important;
  }
`;

export const VitrineTitle = styled.div`
margin: 40px 0;
  h2{
    font-weight: 900;
    font-size: 20px;
    line-height: 27px;
    &::after{
      content: '';
      width: 65px;
      height: 4px;
      background:#C0C0C0;
      display: block;
    }
  }
`