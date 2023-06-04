import { styled } from "styled-components";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

export const CalenderComponent = styled(Flatpickr)`
  width: 20%;
  min-width: 160px;
  height: 30px;
  margin-left: 3%;
  font-size: 14px;
  text-align: center;
`;
