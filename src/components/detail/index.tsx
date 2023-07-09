import { useNavigate } from "react-router-dom";
import * as _ from "./style";

export const Detail = () =>{

    const navigate = useNavigate();

    return(
        <_.ContentFlex>
            <_.ReturnResult>
                <_.RetrunFlex onClick={()=>navigate("/result")}>
                    <_.ReturnBtn src="/assets/img/ReturnBtn.svg"/>
                    <div>결과 상세 조회</div>
                </_.RetrunFlex>
            </_.ReturnResult>
            <_.Content>
                <_.Title>오늘 하루도 아프지 않고 지내기!!</_.Title>
                <_.TitleFlex>
                    <_.SmallTitle>1000분전</_.SmallTitle>
                    <_.SmallTitle>어썸드래곤</_.SmallTitle>
                </_.TitleFlex>
                <_.Line/>
                <_.MainContents>safafsfsafasfsasafasfsafasf</_.MainContents>
            </_.Content>
            <_.FileFlex>
                <_.FileList>
                    <_.Files>대마고 축제 홍보 포스터.pdf</_.Files>
                </_.FileList>
            </_.FileFlex>
        </_.ContentFlex>
    );
}