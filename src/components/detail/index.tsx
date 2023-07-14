import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as _ from "./style";

const baseUrl = process.env.REACT_APP_BASEURL
const token = localStorage.getItem("AccessToken");

type DetailType = {
    noticeID: number,
    noticeHead: string,
    noticeBy: string,
    noticeAdditional: string[],
    createdAt: string,
    noticeContent: string,
}

export const Detail = () =>{

    const navigate = useNavigate();
    // const location = useLocation();
    // const Id = location.state.value;
    // const [detailData, setDetailData] = useState<DetailType>();

    useEffect(()=>{
        // axios({
        //     method: 'get',
        //     url: `${baseUrl}/result`,
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     },
        //     params:{
        //         boardID: Id
        //     }
        // }).then((result)=>{
        //     console.log(result);
        //     setDetailData(result.data.data)
        // }).catch((error)=>{
        //     console.error(error);
        // })
    },[])

    return(
        <_.ContentFlex>
            <_.ReturnResult>
                <_.RetrunFlex onClick={()=>navigate("/result")}>
                    <_.ReturnBtn src="/assets/img/ReturnBtn.svg"/>
                    <div>결과 상세 조회</div>
                </_.RetrunFlex>
            </_.ReturnResult>
            <_.Content>
                <_.Title>오늘은 데프콘을 진행합니다.</_.Title>
                <_.TitleFlex>
                    <_.SmallTitle>2023-07-12</_.SmallTitle>
                    <_.SmallTitle>강진현</_.SmallTitle>
                </_.TitleFlex>
                <_.Line/>
                <_.MainContents>오늘 데프콘이 진행될예정이며 많은 참여 부탁드립니다.</_.MainContents>
            </_.Content>
            <_.FileFlex>
                <_.FileList>
                    <_.Files>대마고 축제 홍보 포스터.pdf</_.Files>
                    <_.Files>대마고 축제 안전수칙.pdf</_.Files>
                </_.FileList>
            </_.FileFlex>
        </_.ContentFlex>
    );
}