import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "../../../styles/theme/color";

type NavigateColor = {
  maincolor?: string;
};

export const Background = styled.div`
  width: 100%;
  height: 70px;

  background-color: ${Color.white};

  display: flex;
  justify-content: center;
`;

export const Flex = styled.div`
  width: 600px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigateLink = styled(NavLink)<NavigateColor>`
  text-decoration: none;
  color: ${Color.black};
  font-size: 20px;
  font-weight: bold;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray5};
`;
