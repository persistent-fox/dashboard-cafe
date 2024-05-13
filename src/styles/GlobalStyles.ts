import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{
  theme: typeof theme;
}>`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text.primary};
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text.secondary},
  }

  body {
    margin: 0;
    font-feature-settings: 'ss02' on, 'clig' off, 'liga' off;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.gray.light};
  }
`;
