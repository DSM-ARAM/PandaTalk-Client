import { useState } from "react";
import { Button } from "../common/button";
import { Calender } from "../common/calender";
import * as _ from "./style";

export const Alarm = () =>{

    const [radio, setRadiop] = useState<string>();

    const handleClickRadioBtn = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setRadiop(e.target.value);
    }

    return(
        <_.Background>
            <_.Box>
                <_.PeopleFlex>
                    <_.EssentialFlex>
                        <_.ReceivePeople>받는 사람</_.ReceivePeople>
                        <_.Essential>(필수)</_.Essential>
                    </_.EssentialFlex>
                    <_.People>6974명</_.People>
                    <Button weight="normal">구성원 선택</Button>
                </_.PeopleFlex>
                <_.Bar/>
                <_.PeopleFlex>
                    <_.EssentialFlex>
                        <_.ReceivePeople>발송 시간</_.ReceivePeople>
                        <_.Essential>(필수)</_.Essential>
                    </_.EssentialFlex>
                    <_.CheckBoxLabel><_.CheckBox type="radio" checked={radio === "1"} value="1" onChange={handleClickRadioBtn}/>즉시 발송</_.CheckBoxLabel>
                    <_.CheckBoxLabel><_.CheckBox type="radio" checked={radio === "2"} value="2" onChange={handleClickRadioBtn}/>예약 발송</_.CheckBoxLabel>
                    {radio === "2" ? <Calender/> : ""}
                </_.PeopleFlex>
                <_.Bar/>
                <_.PeopleFlex>
                    <_.EssentialFlex>
                        <_.ReceivePeople>글작성 하기</_.ReceivePeople>
                        <_.Essential>(필수)</_.Essential>
                    </_.EssentialFlex>
                </_.PeopleFlex>
                <_.TitleInput placeholder="제목을 작성해주세요" />
            </_.Box>
        </_.Background>
    );
}