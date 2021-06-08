import styled from "styled-components";

export const StoreButton = styled.button`
  background: transparent;
  padding: 7px 20px;
  font-size: 21px;
  color: ${(props) => (props.preview ? "#333" : "#fff")};
  border: ${(props) => (props.preview ? "1px solid #333" : "1px solid #fff")};
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
  &:hover {
    background: ${(props) => (props.preview ? "#111" : "#fff")};
    color: ${(props) => (props.preview ? "#fff" : "#111")};
  }
`;
