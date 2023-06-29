import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 20vh);
`;

export const BackgroundColor = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${Color.gray5};
`;

export const LogoFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LogoBox = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: ${Color.white};
  margin-top: 110px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LogoImg = styled.img`
  width: 150px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
`;

export const ContentFlex = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 800;
`;

export const BlackContent = styled.div`
  color: ${Color.black};
`;

export const MainContent = styled.div`
  color: ${Color.main};
  margin-left: 10px;
`;

export const ResultGo = styled(Link)`
  color: ${Color.gray25};
  font-size: 20px;
  margin-top: 10px;
`;
