import styled from "styled-components";

const FoodCategory = styled.aside`
  background-color: ${(props) => props.theme.colors.primary};
  height: calc(100vh - 78px);
  width: 125px;
  border-right: 1px solid ${(props) => props.theme.colors.gray.medium};
  ul {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 6px;
  gap: 8px;
  width: 76px;
  height: 70px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text.gray.dark};
  font-size: 12px;
  font-weight: 500;
  &:hover {
    background: var(
      --Gradient-primary,
      linear-gradient(219deg, #ffab18 -6.67%, #ff2197 137.69%)
    );
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const S = {
  FoodCategory,
  Link,
};
