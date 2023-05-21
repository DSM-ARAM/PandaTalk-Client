import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const Background = styled.div`
  display: flex;
`;

export const LoginImg = styled.img`
  min-width: 300px;
  width: 50%;
  height: 99vh;
  object-fit: cover;
`;

export const LogoFlex = styled.div`
  width: 50%;
`;

export const BackPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Larva = styled.abbr`
  :hover {
    transform: scale(1.025);
  }
`;

export const LogoImg = styled.img`
  margin: 20px 30px 0 0;
  width: 60%;
`;

export const LoginBoxFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoginBox = styled.div`
  width: 55%;
  height: 600px;
  background-color: ${Color.white};
  border: 3px solid ${Color.gray25};
  border-radius: 10px;
  margin-top: 40px;
  padding: 85px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;

  margin-bottom: 15%;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${Color.gray25};
  outline: none;
  width: 100%;
  height: 10%;
  font-size: 20px;
  margin-bottom: 5%;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 10%;
  font-size: 24px;
  font-weight: 800;
  border: 0;
  border-radius: 8px;
  color: ${Color.white};
  background-color: ${Color.main};
  margin-top: 10%;
  margin-bottom: 5%;

  &:hover {
    transform: scale(1.025);
  }
`;

export const SignupFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 7px;
`;

export const SignupEX = styled.div`
  font-size: 18px;
  color: ${Color.gray25};
`;

export const SignupGo = styled(Link)`
  color: ${Color.main};
  text-decoration: none;

  font-size: 18px;
`;
