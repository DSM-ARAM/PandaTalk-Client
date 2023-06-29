import { styled } from "styled-components";
import { Color } from "../../../styles/theme/color";

type GroupWeight = {
  bold?: boolean;
};

export const GroupFlex = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 5px 0;
`;

export const CheckBoxLabel = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
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
  gap: 10px;
`;

export const AddListBtn = styled.img`
  width: 20px;
  height: 20px;
`;

export const GroupName = styled.label<GroupWeight>`
  font-size: 20px;
  font-weight: ${(props) => (props.bold ? 800 : 400)};
`;

export const PeopleListFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
`;

export const PeopleList = styled.div`
  width: 60%;
  min-width: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PeopleGroup = styled.div<GroupWeight>`
  font-size: 18px;
  margin: 10px 10px;
  font-weight: ${(props) => (props.bold ? 800 : 400)};
`;

export const NameList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin: 10px 25%;
  word-break: keep-all;
`;
