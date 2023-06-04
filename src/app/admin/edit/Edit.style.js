import styled from "styled-components";
import "@fontsource/roboto/400.css";

const StyledEdit = styled.div`
  .edit {
    padding: 40px;
    margin: auto;
    max-width: 1128px;
    height: 843px;
  }
  .edit * {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1c1b1f;
  }
  .input {
    height: 56px;
    flex-grow: 1;
  }
  .text {
    height: 88px;
  }
  .flex {
    display: flex;
    gap: 16px;
  }
`;

export { StyledEdit };
