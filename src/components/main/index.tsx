import axios from "axios";
import { useEffect, useState } from "react";
import * as _ from "./style";

const baseUrl = process.env.REACT_APP_BASEURL

interface ListType{
    userId: number,
    userName: string,
    userDepartment: string,
    noticeID: number,
    noticeHead: string,
    noticeContent: string,
    noticeBy: string,
    noticeAdditional: string,
    createdAt: string, 
}

export const Main = () =>{

    const token = localStorage.getItem("AccessToken");
    const [dataList, setDataList] = useState<ListType>();

    useEffect(()=>{
        axios({
            method: 'get',
            url: `${baseUrl}/main`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then((result)=>{
            console.log(result);
            setDataList(result.data);
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
                    {
                        // dataList.map(data=>{
                        //     <_.SendCard>
                        //         <_.Information>
                        //             <_.Title>{data.notionHead}</_.Title>
                        //             <_.InformationFlex>
                        //                 <_.Days>{data.createdAt}</_.Days>
                        //                 <_.Bar></_.Bar>
                        //                 <_.Name>{data.notionBy}</_.Name>
                        //             </_.InformationFlex>
                        //         </_.Information>
                        //         <_.Contents>
                        //             <_.ContentText>{data.noticeContent}</_.ContentText>
                        //         </_.Contents>
                        //     </_.SendCard>
                        // })
                    }
                </_.LastSendList>
            </_.Flex>
        </_.Background>
    );
}