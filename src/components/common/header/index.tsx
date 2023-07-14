import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as _ from "./style"

const baseUrl = process.env.REACT_APP_BASEURL

interface HeaderType{
    userName: string,
    userDepartment: string,
}

export const Header = () => {

    const AccessToken = localStorage.getItem("AccessToken");
    const [headerData, setHeaderData] = useState<HeaderType>();
    const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method: "get",
            url: `${baseUrl}/main/header`,
            headers:{
                "Authorization": `Bearer ${AccessToken}`
            }
        }).then((result)=>{
            console.log(result);
            setHeaderData(result.data.data);
        })
    },[])

    return(
        <>
            <_.HeaderBar>
                <_.Flex>
                    <_.MainLogo src="/assets/img/Logo.svg" onClick={()=>navigate("/main")}/>
                    <div>
                        <_.TheacherInfo>{headerData?.userName}</_.TheacherInfo>
                        <_.TheacherInfo>{headerData?.userDepartment}</_.TheacherInfo>
                    </div>
                </_.Flex>
            </_.HeaderBar>
            <Outlet/>
        </>
    );
}