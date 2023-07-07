import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import * as _ from "./style"

const baseUrl = process.env.REACT_APP_BASEURL

export const Header = () => {

    const AccessToken = localStorage.getItem("AccessToken");
    const RefreshToken = localStorage.getItem("RefreshToken");

    const [headerData, setHeaderData] = useState();

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
                    <_.MainLogo src="/assets/img/Logo.svg"/>
                    <div>
                        <_.TheacherInfo>{headerData.userName}</_.TheacherInfo>
                        <_.TheacherInfo>{headerData.userDepartment}</_.TheacherInfo>
                    </div>
                </_.Flex>
            </_.HeaderBar>
            <Outlet/>
        </>
    );
}