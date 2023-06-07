import styled from "styled-components";
import "@fontsource/roboto/400.css";

const StyledInitialPage = styled.div`
  .content {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-wrapper {
    background: #ffffff;
    border-radius: 4px;
    padding: 48px;
  }
  .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;

    color: #000000;
    margin-bottom: 12px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
  }
  .input {
    margin: 12px 0 12px 0;
  }
`;

export { StyledInitialPage };
