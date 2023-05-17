import { Outlet } from "react-router-dom";
import * as _ from "./style"

export const Header = () => {
    return(
        <>
            <_.HeaderBar>
                <_.Flex>
                    <_.MainLogo src="/assets/img/Logo.svg"/>
                    <div>
                        <_.TheacherInfo>산학협력부</_.TheacherInfo>
                        <_.TheacherInfo>홍길동</_.TheacherInfo>
                    </div>
                </_.Flex>
            </_.HeaderBar>
            <Outlet/>
        </>
    );
}