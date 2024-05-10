import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text.secondary},
  }

  body {
    margin: 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.text.secondary};
    background-color: ${(props) => props.theme.colors.grey.light};
  }
`;
