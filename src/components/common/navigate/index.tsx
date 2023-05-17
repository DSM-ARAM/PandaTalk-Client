import { useEffect, useState } from "react";
import { Outlet, useLocation} from "react-router-dom";
import * as _ from "./style"


export const Navigate = ():JSX.Element => {

    const location = useLocation();
    const [homeProps, setHoemProps] = useState<string>();
    const [alarmProps, setAlarmProps] = useState<string>();
    const [retultProps, setResultProps] = useState<string>();
    const [peopleProps, setPeopleProps] = useState<string>();

    useEffect(() => {
        setHoemProps("");
        setAlarmProps("");
        setResultProps("");
        setPeopleProps("");
        ColorProps();
    },[]);

    const ColorProps = () => {
        return (
        location.pathname === "/main" ?  setHoemProps("maincolor") : 
        location.pathname === "/alarm" ? setAlarmProps("maincolor") : 
        location.pathname === "result" ? setResultProps("maincolor") : setPeopleProps
        );
    }

    

    return(
        <>
            <_.Background>
                <_.Flex>
                    <_.NavigateLink to="/" MainColor={homeProps} >홈</_.NavigateLink>
                    <_.NavigateLink to="/alarm" MainColor={alarmProps}>알림 발송</_.NavigateLink>
                    <_.NavigateLink to="/result" MainColor={retultProps}>결과 조회</_.NavigateLink>
                    <_.NavigateLink to="/people" MainColor={peopleProps}>구성원 관리</_.NavigateLink>
                </_.Flex>
            </_.Background>
            <Outlet/>
        </>        
    );
}