import { useNavigate } from "react-router-dom"
import * as _ from "./style"

export const Login = () => {
    const navigate = useNavigate();
    const GoHome = () =>{
        navigate('/');
    }

    return(
        <_.Background>
            <_.LoginImg src="/assets/img/Login.svg"/>
            <_.LogoFlex>
                <_.BackPage>
                    <_.Larva onClick={GoHome} title="메인으로 돌아가기">
                        <_.LogoImg src="/assets/img/Logo.svg"/> 
                    </_.Larva>
                </_.BackPage>
                <_.LoginBoxFlex>
                    <_.LoginBox>
                        <_.Title>로그인</_.Title>
                        <_.Input placeholder="메일"/>
                        <_.Input placeholder="비밀번호"/>
                        <_.LoginButton>Login</_.LoginButton>
                        <_.SignupFlex>
                            <_.SignupEX>계정이 없으신 가요?</_.SignupEX>
                            <_.SignupGo to="/signup">회원가입 하기</_.SignupGo>
                        </_.SignupFlex>
                    </_.LoginBox>
                </_.LoginBoxFlex>
            </_.LogoFlex>
        </_.Background>
    );
}