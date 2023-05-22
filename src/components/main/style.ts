import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 170px);

  background-color: ${Color.gray5};
  display: flex;
  justify-content: center;
`;

export const Flex = styled.div`
  width: 70%;

  & > p {
    color: ${Color.black};
    font-size: 24px;
    font-weight: 800;
    margin-top: 5%;
  }
`;

export const LastSendList = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-wrap: wrap;

  gap: 3%;
`;

export const AllSendResultFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AllSendResult = styled(Link)`
  color: ${Color.black};
  font-size: 18px;
  font-weight: 800;
  margin-right: 3%;
  margin-bottom: 1%;

  text-decoration: none;

  &:hover {
    transform: scale(1.025);
  }
`;

export const SendCard = styled.div`
  width: 22%;
  height: 35%;
  background-color: ${Color.white};
`;

export const Information = styled.div`
  width: 100%;
  height: 35%;
  background-color: ${Color.main};
  padding: 10px;
`;

export const Contents = styled.div`
  padding: 10px;
`;

export const InformationFlex = styled.div`
  display: flex;
  gap: 5px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${Color.gray75};
  margin-bottom: 5px;
`;

export const Days = styled.div`
  font-size: 14px;
  color: ${Color.gray50};
`;

export const Name = styled.div`
  font-size: 14px;
  color: ${Color.gray50};
`;

export const Bar = styled.div`
  width: 3px;
  height: 15px;
  background-color: ${Color.gray50};
  border-radius: 999px;
`;

export const ContentText = styled.div`
  font-size: 14px;
  color: ${Color.gray50};
`;
