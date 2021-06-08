import styled from "styled-components";

export const FooterStyle = styled.div`
  position: absolute;
  bottom: -120px;
  min-height: 330px;
  padding: 40px 0;
  background: #333;
  color: #fff;
  .footer-links {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-grap: 10px;
    justify-content: center;
  }
  .footer-col {
    padding: 0 20px;
    h3 {
      padding-bottom: 15px;
    }
    ul {
      margin-top: 29px;
    }
    li {
      padding: 7px 0;
      white-space: nowrap;
      margin-left: -32px;
    }
    p {
      padding: 10px 0;
    }
    a {
      color: #fff;
      transition: 0.3s ease-in-out;
    }
    a:hover {
      color: rgb(250, 130, 17);
    }
  }
  @media (max-width: 800px) {
    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 500px) {
    .footer-links {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 900px) {
    .footer-col {
      padding: 0 20px;
      h3 {
        padding-top: 7px;
      }
      li {
        padding: 7px 0;
      }
      p {
        padding-bottom: 10px;
      }
      a {
        color: #fff;
      }
    }
  }
`;
