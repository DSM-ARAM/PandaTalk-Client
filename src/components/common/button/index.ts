import styled from "styled-components";
import { Color } from "../../../styles/theme/color";

type ButtonType = {
  MainColor?: boolean;
  Gray?: boolean;
  weight?: string;
  Width?: string | number | boolean;
};

export const Button = styled.button<ButtonType>`
  font-size: 20px;
  font-weight: ${(props) => (props.weight === "normal" ? props.weight : "800")};
  color: ${Color.black};

  border: 0;
  border-radius: 5px;

  padding: 4px 17px;

  width: ${(props) =>
    props.Width === "large"
      ? "20%"
      : props.Width === "medium"
      ? "15%"
      : props.Width
      ? `${props.Width}px`
      : "auto"};

  &:active {
    transition: all 0.3s;
    opacity: 0.8;
  }

  &:hover {
    transition: all 0.3s;
    background-color: ${Color.main};
  }

  background-color: ${(props) => (props.MainColor ? Color.main : Color.gray5)};
`;
