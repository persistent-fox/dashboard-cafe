import { createGlobalStyle } from "styled-components";

export const GlobalStylesStyled = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  // *::-webkit-scrollbar {
  //   width: 5px;
  // }
  //
  // *::-webkit-scrollbar-track {
  //   background-color: ${(props) => props.theme.colors.scroll.trackDefault};
  // }
  //
  // *::-webkit-scrollbar-thumb {
  //   background-image: linear-gradient(to top,
  //   ${(props) => props.theme.colors.scroll.thumbDefaultSecondary},
  //   ${(props) => props.theme.colors.scroll.thumbDefaultAccent});
  //   border-radius: 5px;
  // }

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
