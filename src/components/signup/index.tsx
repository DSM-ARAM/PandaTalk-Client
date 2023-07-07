import axios from "axios";
import { useNavigate } from "react-router-dom"
import * as _ from "./style"

export const Signup = () => {
    const navigate = useNavigate();
    const GoHome = () =>{
        navigate('/');
    }

    return(
        <_.Background>
            <_.LoginImg src="/assets/img/Signup.svg"/>
            <_.LogoFlex>
                <_.BackPage>
                    <_.Larva onClick={GoHome} title="메인으로 돌아가기">
                        <_.LogoImg src="/assets/img/Logo.svg"/> 
                    </_.Larva>
                </_.BackPage>
                <_.LoginBoxFlex>
                    <_.LoginBox>
                        <_.Title>회원가입</_.Title>
                        <_.Input placeholder="이름"/>
                        <_.Input placeholder="담당부서"/>
                        <_.Input placeholder="메일"/>
                        <_.Input placeholder="비밀번호"/>
                        <_.Input placeholder="비밀번호 확인"/>
                        <_.LoginButton>Signup</_.LoginButton>
                    </_.LoginBox>
                </_.LoginBoxFlex>
            </_.LogoFlex>
        </_.Background>
    );
}