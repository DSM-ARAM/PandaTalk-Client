import ReactQuill from "react-quill";
import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

export const Background = styled.div`
  width: 100%;
  background-color: ${Color.gray5};
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 100px;
  word-break: keep-all;
`;

export const Box = styled.div`
  width: 50%;
  min-width: 800px;
  height: auto;
  background-color: ${Color.white};
  padding: 0 40px;
`;

export const ReceivePeople = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${Color.black};
`;

export const Essential = styled.div`
  font-size: 14px;
  color: ${Color.black};
`;

export const People = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${Color.black};
  margin: 0 3% 0 15%;
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray5};
`;

export const EssentialFlex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const PeopleFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4%;
  margin-top: 10%;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  gap: 10px;
  margin-left: 10%;

  font-size: 20px;
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  border: 1px solid ${Color.black};
  border-radius: 99px;

  &:checked {
    background-color: ${Color.white};
    background-image: url("/assets/img/CircleCheck.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border: 0;
  }
`;

export const Calender = styled(Flatpickr)`
  padding: 5px 5px;
  font-size: 16px;
  margin-left: 10px;
`;

export const TitleInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px 10px;
  outline: none;
  border: 1px solid ${Color.gray25};
  border-radius: 5px;
`;

export const Editer = styled(ReactQuill)`
  height: 350px;
  margin-top: 3%;
  margin-bottom: 10%;
`;

export const AddFileFlex = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;

  & > div {
    font-size: 20px;
    color: ${Color.gray50};
  }
`;

export const LabelFlex = styled.div``;

export const FileLabel = styled.label`
  background-color: ${Color.gray5};
  color: ${Color.black};
  font-size: 18px;
  font-weight: 400;
  padding: 10px;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SendBtn = styled.button`
  width: 40%;
  color: ${Color.black};
  font-size: 24px;
  font-weight: 800;
  background-color: ${Color.main};
  padding: 5px 20px;
  border: none;
  border-radius: 10px;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.025);
  }

  &:active {
    transition: all 0.3s;
    filter: brightness(0.9);
  }

  margin-top: 5%;
  margin-bottom: 5%;
`;

export const FileNameFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 10px;
`;

export const FileName = styled.div`
  font-size: 14px;
  border: 1px solid ${Color.gray25};
  padding: 5px 10px;
  border-radius: 5px;

  display: flex;
  align-items: center;
`;

export const Cancel = styled.img`
  margin-left: 10px;
`;

export const ModalFlex = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ModalCancel = styled.img`
  width: 4%;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.025);
    cursor: pointer;
  }
`;

export const ModalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray5};
  margin-bottom: 2%;
`;

export const BoxFlex = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

export const GroupBoxFlex = styled.div`
  width: 18%;
  height: 100%;
  min-width: 150px;
`;

export const SelectGroupFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

type GroupType = {
  maincolor: number;
};

export const SelectGroup = styled.div<GroupType>`
  background-color: white;
  border: 1px solid
    ${(props) => (props.maincolor === 1 ? Color.main : Color.gray50)};
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.maincolor === 1 ? Color.main : Color.gray50)};
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  border-bottom: none;
`;

export const GroupBox = styled.div`
  width: 100%;
  height: 90%;
  border: 2px solid ${Color.gray50};
  border-radius: 5px;
  padding: 15px 10px;
`;

export const AllFlex = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const AllContent = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const PickBoxLabel = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const PickBox = styled.input`
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

export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const GroupFlex = styled.div`
  display: flex;
  gap: 10px;
`;

export const GroupName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const SelectPeopleFlex = styled.div`
  width: 60%;
  height: 100%;
  & > div {
    font-size: 22px;
  }
`;

export const SelectPeopleBox = styled.div`
  width: 100%;
  height: 90%;
  border: 2px solid ${Color.gray50};
  border-radius: 5px;
`;

export const PeopleCheckFlex = styled.div`
  width: 20%;
  height: 100%;
  & > div {
    font-size: 22px;
  }
`;

export const PeopleCheckBox = styled.div`
  width: 100%;
  height: 90%;
  border: 2px solid ${Color.gray50};
  border-radius: 5px;
`;

export const SelectBtn = styled.div`
  width: 30%;
  height: 40px;
  font-size: 20px;
  background-color: ${Color.main};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.025);
  }
  &:active {
    transition: all 0.3s;
    filter: brightness(1.1);
  }
`;
