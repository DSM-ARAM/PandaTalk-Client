import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

type GroupType = {
  maincolor?: number;
};

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 172px);
  display: flex;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Flex = styled.div`
  width: 60%;
  height: 100%;
`;

export const GroupChange = styled.div`
  display: flex;
  margin-top: 5%;

  font-size: 20px;
  font-weight: 800;
`;

export const Group = styled.div<GroupType>`
  color: ${(props) => (props.maincolor === 1 ? Color.main : Color.gray50)};

  &:hover {
    transition: all 0.3s;
    transform: scale(1.025);
  }
`;

export const Bar = styled.div`
  width: 4px;
  background-color: ${Color.gray25};
  border-radius: 5px;
  margin: 0 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray25};
  margin-top: 20px;
`;

export const BoxFlex = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 20px;
  display: flex;
`;

export const GroupBox = styled.div`
  width: 20%;
  height: 100%;
  border: 2px solid ${Color.gray50};
  border-radius: 4px;
  margin-right: 20px;
  min-width: 130px;
  padding-top: 2%;
  padding-left: 2%;
  gap: 10px;

  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const DetailBox = styled.div`
  width: calc(100% - 20% - 20px);
  min-width: 600px;
  height: 100%;
  border: 2px solid ${Color.gray50};
  border-radius: 4px;
  padding: 20px;
`;

export const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  margin-top: 10px;
`;

export const PeopleBtn = styled.button`
  background-color: ${Color.white};
  border: 0;
  border: 1px solid ${Color.gray25};
  font-size: 20px;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    background-color: ${Color.main};
    transition: all 0.3s;
    color: ${Color.gray75};
    border: 0;
  }

  &:active {
    filter: brightness(1.1);
    transition: all 0.3s;
  }
`;

export const PeopleFlex = styled.div`
  display: flex;
  gap: 10px;
`;
