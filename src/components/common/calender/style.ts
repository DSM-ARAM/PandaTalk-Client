import { styled } from "styled-components";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { Color } from "../../../styles/theme/color";

export const CalenderComponent = styled(Flatpickr)`
  padding: 10px 20px;
  height: 30px;
  margin-left: 3%;
  font-size: 14px;
  text-align: center;
`;
