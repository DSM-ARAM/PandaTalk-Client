import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";

const baseUrl = process.env.REACT_APP_BASEURL

type ListType = {
    noticeID: number,
    noticeHead: string,
    noticeContent: string,
    noticeBy: string,
    createdAt: string, 
    noticeChecked: number,
    noticeFor: number,
    noticeStat: string,
}

export const Main = () =>{

    const token = localStorage.getItem("AccessToken");
    const [dataList, setDataList] = useState<ListType[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method: 'get',
            url: `${baseUrl}/main`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then((result)=>{
            console.log(result);
            const data = result.data.data.recently;
            setDataList(data);
        }).catch((error)=>{
            console.error(error);
        });
    },[])

    return(
        <_.Background>
            <_.Flex>
                <p>최근 발송내역</p>
                <_.AllSendResultFlex>
                    <_.AllSendResult to="/result">더보기</_.AllSendResult>
                </_.AllSendResultFlex>
                <_.LastSendList>
                    {/* {
                        dataList?.map((data, index)=>(
                            <_.SendCard key={index}>
                                <_.Information>
                                    <_.Title>{data.noticeHead}</_.Title>
                                    <_.InformationFlex>
                                        <_.Days>{data.createdAt.substr(0, 9)}</_.Days>
                                        <_.Bar></_.Bar>
                                        <_.Name>{data.noticeBy}</_.Name>
                                    </_.InformationFlex>
                                </_.Information>
                                <_.Contents>
                                    <_.ContentText>{data.noticeContent}</_.ContentText>
                                </_.Contents>
                            </_.SendCard>
                        ))
                    } */}
                    <_.SendCard onClick={()=>navigate("/result/detail")}>
                        <_.Information>
                            <_.Title>오늘은 데프콘을 진행합니다.</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-07-12</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>강진현</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>오늘 데프콘이 진행될예정이며 많은 참여 부탁드립니다.</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                    <_.SendCard onClick={()=>navigate("/result/detail")}>
                        <_.Information>
                            <_.Title>수학여행 공지드립니다.</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-07-11</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>유나현</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>여권 확인 부탁바랍니다. 안전수칙pdf도 공지해주세요.</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                    <_.SendCard onClick={()=>navigate("/result/detail")}>
                        <_.Information>
                            <_.Title>코로나주의 해주세요</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-07-10</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>이동욱</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>코로나 확진자가 늘어나고있습니다 방역수칙 유의해주세요.</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                    <_.SendCard onClick={()=>navigate("/result/detail")}>
                        <_.Information>
                            <_.Title>연수 진행합니다.</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-07-9</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>홍길동</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>모두 참여해주세요</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                </_.LastSendList>
            </_.Flex>
        </_.Background>
    );
}