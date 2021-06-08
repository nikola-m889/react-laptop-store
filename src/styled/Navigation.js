import styled from "styled-components";

export const Navigation = styled.div`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 10px 0;
  .logo {
    margin-left: 25px;
  }
  .nav-menu {
    margin-bottom: 7px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-left {
    margin-left: 22px;
    margin-right: 30px;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
