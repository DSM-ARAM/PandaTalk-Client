import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const HeaderBar = styled.div`
  width: 100%;
  height: 90px;

  border: none;
  background-color: ${Color.main};

  display: flex;
  justify-content: center;
`;

export const Flex = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 8px;
  }
`;

export const MainLogo = styled.img`
  width: 85px;
`;

export const TheacherInfo = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${Color.gray75};
`;
