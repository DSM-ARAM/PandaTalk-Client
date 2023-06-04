import { styled } from "styled-components";
import { Color } from "../../../styles/theme/color";

export const GroupFlex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const GroupListFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 100px;
`;

export const CheckBoxLabel = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  gap: 10px;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
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

export const ListChangeFlex = styled.div`
  display: flex;
  cursor: pointer;
`;

export const AddListBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const GroupName = styled.label`
  font-size: 18px;
`;

export const PeopleListFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32%;
`;

export const PeopleList = styled.div`
  display: flex;
`;

export const PeopleGroup = styled.div`
  font-size: 18px;
  margin: 10px 10px;
`;
