import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom"
import * as _ from "./style"

const baseUrl = process.env.REACT_APP_BASEURL

export const Login = () => {
    const navigate = useNavigate();
    const GoHome = () =>{
        navigate('/');
    }

    const [mailValue, setMailValue] = useState<string>("");
    const [pwValue, setPwValue] = useState<string>("");

    const handleChangeMail:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setMailValue(e.target.value);
    }
    const handleChangePw:ChangeEventHandler<HTMLInputElement> = (e) =>{
        setPwValue(e.target.value);
    }

    const hadleClickLogin = () =>[
        axios({
            method: 'post',
            url: `${baseUrl}/auth`,
            data: {
                "userLogID" : mailValue,
	            "userPW" : pwValue,
            }
        }).then((result)=>{
            console.log(result);
            const {accessToken, refreshToken} = result.data.data;
            localStorage.setItem('AccessToken', accessToken);
            localStorage.setItem('RefreshToken', refreshToken);
            navigate("/main");
        }).catch((error)=>{
            console.error(error);
            if(error.status === 400){
                alert("에러가 발생했습니다.");
            }
            else if(error.status === 404){
                alert("존재하지 않는 이메일 입니다.");
            }
            else if(error.status === 409){
                alert("비밀번호가 일치하지 않습니다.");
            }
        })
    ]

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
                        <_.Input placeholder="아이디" value={mailValue} onChange={handleChangeMail}/>
                        <_.Input type="password" placeholder="비밀번호" value={pwValue} onChange={handleChangePw}/>
                        <_.LoginButton onClick={hadleClickLogin}>Login</_.LoginButton>
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