import styled from "styled-components";

export const FullbannerImg = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
  .Mob {
    display: none;
  }
  @media (max-width: 980px) {
    .Desk {
      display: none;
    }
    .Mob {
      display: block;
    }
  }
`;

export const FullbannerTextWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  .fullbanner-text {
    position: absolute;
    color: var(--color-branco);
    top: 0;
    bottom: 0;
    width: 27%;
    max-width: 457px;
    height: fit-content;
    margin: auto;
    @media (max-width: 980px) {
      width: 100%;
      padding: 20px;
    }
    p {
      font-weight: bold;
      font-size: 30px;
      line-height: 41px;
      @media (max-width: 980px) {
        font-size: 20px;
      }
    }
    h1 {
      font-weight: bold;
      font-size: 45px;
      line-height: 41px;
      margin: 10px 0;
      @media (max-width: 980px) {
        font-size: 30px;
      }
    }
  }
`;
