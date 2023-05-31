import {useState } from "react";
import { Outlet} from "react-router-dom";
import { Color } from "../../../styles/theme/color";
import * as _ from "./style"


export const Navigate = ():JSX.Element => {

    const [activeNav, setActiveNav] = useState<number>(1);

    const activeStyle = {
        color: `${Color.main}`
    }

    return(
        <>
            <_.Background>
                <_.Flex>
                    <_.NavigateLink to="/main" style={({isActive}) => (isActive ? activeStyle : undefined)} onClick={()=>{setActiveNav(1)}} >홈</_.NavigateLink>
                    <_.NavigateLink to="/alarm" style={({isActive}) => (isActive ? activeStyle : undefined)} onClick={()=>{setActiveNav(2)}}>알림 발송</_.NavigateLink>
                    <_.NavigateLink to="/result" style={({isActive}) => (isActive ? activeStyle : undefined)} onClick={()=>{setActiveNav(3)}}>결과 조회</_.NavigateLink>
                    <_.NavigateLink to="/people" style={({isActive}) => (isActive ? activeStyle : undefined)} onClick={()=>{setActiveNav(4)}}>구성원 관리</_.NavigateLink>
                </_.Flex>
            </_.Background>
            <_.Line/>
            <Outlet/>
        </>        
    );
}