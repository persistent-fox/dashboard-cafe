import styled from "styled-components";

interface IUserIconProps {
  srcImg: string;
}

export const UserIcon = ({ srcImg }: IUserIconProps) => {
  return (
    <StyledUserIcon>
      <img src={srcImg} alt="" />
    </StyledUserIcon>
  );
};

const StyledUserIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
