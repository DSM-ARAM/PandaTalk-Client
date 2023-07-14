import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";

const baseUrl = process.env.REACT_APP_BASEURL
const token = localStorage.getItem("AccessToken");

type ResultType = {
    noticeID: number,
    noticeHead: string,
    noticeBy: string,
    noticeStat: string,
    noticeFor: number,
    noticeChecked: number,
    createdAt: string,
}

export const Result = () =>{

    const navigate = useNavigate();
    const [resultData, setResultData] = useState<ResultType[]>([]);

    useEffect(()=>{
        // axios({
        //     method: 'get',
        //     url: `${baseUrl}/result`,
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     },
        //     params: {
        //         cal: "2023-7",
        //         pgNum: 1,
        //     }
        // }).then((result)=>{
        //     console.log(result)
        //     setResultData(result.data);
        // }).catch((error)=>{
        //     console.error(error);
        // })
    },[])

    return(
        <_.Background>
            <_.Flex>
                <_.Head>결과 조회</_.Head>
                <_.FilterFlex>
                    <_.Select>
                        <option>전체(최근순)</option>
                        <option>발송 완료</option>
                        <option>발송 예약</option>
                        <option>전체(지난순)</option>
                    </_.Select>
                </_.FilterFlex>
                <_.InfoBar>
                    <_.Time>발송 / 예약 시간</_.Time>
                    <_.Content>내용</_.Content>
                    <_.ResultState>상태</_.ResultState>
                    <_.Send>발송</_.Send>
                </_.InfoBar>

                <_.ResultList>
                    {/* {
                        resultData.map(data=>(
                            <_.ListFlex key={data.noticeID} onClick={()=>{navigate("/result", {state: {value: data.noticeID}})}}>
                                <_.Time>{data.createdAt}</_.Time>
                                <_.Content>{data.noticeHead}</_.Content>
                                <_.ResultState>{data.noticeStat}</_.ResultState>
                                <_.Send>{data.noticeFor}</_.Send>
                            </_.ListFlex>
                        ))
                    } */}
                    <_.ListFlex onClick={()=>{navigate("/result/detail")}}>
                        <_.Time>2023-07-12</_.Time>
                        <_.Content>오늘은 데프콘을 진행합니다.</_.Content>
                        <_.ResultState>발송 완료</_.ResultState>
                        <_.Send>123</_.Send>
                    </_.ListFlex>
                    <_.ListFlex onClick={()=>{navigate("/result/detail")}}>
                        <_.Time>2023-07-11</_.Time>
                        <_.Content>수학여행 공지드립니다.</_.Content>
                        <_.ResultState>발송 예약</_.ResultState>
                        <_.Send>20</_.Send>
                    </_.ListFlex>
                    <_.ListFlex onClick={()=>{navigate("/result/detail")}}>
                        <_.Time>2023-07-10</_.Time>
                        <_.Content>코로나주의 해주세요.</_.Content>
                        <_.ResultState>발송 완료</_.ResultState>
                        <_.Send>123</_.Send>
                    </_.ListFlex>
                    <_.ListFlex onClick={()=>{navigate("/result/detail")}}>
                        <_.Time>2023-07-09</_.Time>
                        <_.Content>연수 진행합니다.</_.Content>
                        <_.ResultState>발송 예약</_.ResultState>
                        <_.Send>123</_.Send>
                    </_.ListFlex>
                </_.ResultList>
            </_.Flex>
        </_.Background>
    );
}