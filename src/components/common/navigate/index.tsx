import {useState } from "react";
import { Outlet} from "react-router-dom";
import * as _ from "./style"


export const Navigate = ():JSX.Element => {

    const [activeNav, setActiveNav] = useState<number>(1);

    return(
        <>
            <_.Background>
                <_.Flex>
                    <_.NavigateLink to="/main" maincolor={activeNav === 1 ? "maincolor" : ""} onClick={()=>{setActiveNav(1)}} >홈</_.NavigateLink>
                    <_.NavigateLink to="/alarm" maincolor={activeNav === 2 ? "maincolor" : ""} onClick={()=>{setActiveNav(2)}}>알림 발송</_.NavigateLink>
                    <_.NavigateLink to="/result" maincolor={activeNav === 3 ? "maincolor" : ""} onClick={()=>{setActiveNav(3)}}>결과 조회</_.NavigateLink>
                    <_.NavigateLink to="/people" maincolor={activeNav === 4 ? "maincolor" : ""} onClick={()=>{setActiveNav(4)}}>구성원 관리</_.NavigateLink>
                </_.Flex>
            </_.Background>
            <Outlet/>
        </>        
    );
}