import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const Background = styled.div`
  width: 100%;
  height: 79vh;
  display: flex;
  justify-content: center;
`;

export const Flex = styled.div`
  width: 60%;
  height: 100%;
`;

export const Head = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-top: 5%;
`;

export const FilterFlex = styled.div`
  display: flex;
  width: 100%;
`;

export const Select = styled.select`
  min-width: 180px;
  width: 18%;
  height: 35px;
  font-size: 20px;
  padding: 0 5px;
  outline: none;
  border-radius: 5px;
  background: url("/assets/img/downarrow.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 150px;
  &::-ms-expand {
    display: none;
  }
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-top: 10px;
`;

export const InfoBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Color.gray5};
  border-top: 5px solid ${Color.gray25};
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Time = styled.div`
  width: 17%;
`;

export const Content = styled.div`
  width: 40%;
`;

export const ResultState = styled.div`
  width: 7%;
`;

export const Send = styled.div`
  width: 6%;
`;

export const ResultList = styled.div`
  width: 100%;
`;

export const ListFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  padding: 20px 0;
  border-bottom: 2px solid ${Color.gray5};
  &:hover {
    background-color: ${Color.gray5};
    filter: brightness(1.025);
    transition: all 0.3s;
  }
`;
