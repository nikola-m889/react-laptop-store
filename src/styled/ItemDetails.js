import styled from "styled-components";

export const ItemDetails = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px;
  border: 1px solid #111;
  img {
    max-width: 90%;
  }
  .info {
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
    font-weight: bold;
    font-size: 20px;
  }
  .price {
    font-family: "Lato", sans-serif;
    margin-top: 5px;
    font-size: 18px;
    color: #333;
  }
`;
