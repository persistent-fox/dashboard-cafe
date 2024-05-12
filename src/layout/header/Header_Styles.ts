import styled from "styled-components";
import { StyledLogo } from "../../components/logo/Logo";
import { StyledButton } from "../../components/button/Button";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.medium};
  ${StyledLogo} {
    margin-left: 24px;
  }
  ${StyledButton} {
    padding: 8px 20px;
  }
`;

const ArrowBack = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray.medium};
  margin-right: 24px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    right: -24px;
    height: 100%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.gray.medium};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.gray.medium};
  }
`;

const Rabber = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  max-width: 1440px;
  width: 100%;
`;

const Navigation = styled.nav`
  max-width: 400px;
  width: 100%;
  margin-right: 16px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.gray.dark};
  transition: 0.3s all;
  &:hover {
    font-weight: 500;
    color: ${(props) => props.theme.colors.text.accent};
  }
`;

const Date = styled.div`
  padding: 8px 20px;
  border-radius: 40px;
  background: ${(props) => props.theme.colors.gray.light};
  span + span {
    margin-left: 10px;
  }
`;

export const S = {
  Header,
  ArrowBack,
  Rabber,
  Navigation,
  List,
  Link,
  Date,
};
