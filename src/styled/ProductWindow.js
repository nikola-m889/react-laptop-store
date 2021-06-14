import styled from "styled-components";

export const ProductWindow = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(51, 51, 51, 0.384);
  z-index: 999;
  .window-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #fff;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    padding: 20px;
  }
  img {
    width: 240px;
    height: 170px;
  }
   @media (max-width: 900px) {
    .window-info {
      width: 90%;
      margin: auto;
      font-size: 18px;
    }
    img {
      width: 100%;
    }
  }
`;
