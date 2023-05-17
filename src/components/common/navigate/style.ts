import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "../../../styles/theme/color";

type NavigateColor = {
  MainColor?: string;
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

export const NavigateLink = styled(Link)<NavigateColor>`
  text-decoration: none;
  color: ${(prpos) => (prpos.MainColor == "maincolor" ? Color.main : "black")};
  font-size: 20px;
  font-weight: bold;
`;
