import { styled } from "styled-components";
import { Color } from "../../../styles/theme/color";

export const Flex = styled.div`
  width: 100%;
  word-break: keep-all;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray25};
  margin-top: 1%;
`;

export const InfoFlex = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${Color.black};

  display: flex;
  align-items: center;
  gap: 10%;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 0 10px;
`;

export const CheckBoxLabel = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  appearance: none;
  border: 1px solid ${Color.gray25};

  &:checked {
    background-color: ${Color.white};
    background-image: url("/assets/img/Check.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`;

export const StudentIdFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailPeopleListFlex = styled.div`
  font-size: 18px;
  color: ${Color.black};

  display: flex;
  align-items: center;
  gap: 10.5%;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  &:hover {
    background-color: ${Color.gray5};
  }
`;

export const DetailPeopleList = styled.div``;

export const CheckBoxLabelMove = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const CheckBoxMove = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  appearance: none;
  border: 1px solid ${Color.gray25};

  &:checked {
    background-color: ${Color.white};
    background-image: url("/assets/img/Check.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`;

export const Classification = styled.div``;

export const StudentId = styled.div``;

export const StudentName = styled.div``;

export const StudentNumber = styled.div`
  margin-left: -1.5%;
  min-width: 160px;
`;
