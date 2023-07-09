import { useState } from "react";
import { Button } from "../common/button";
import { Calender } from "../common/calender";
import * as _ from "./style";
import 'react-quill/dist/quill.snow.css';
import { Route, useNavigate } from "react-router-dom";

interface FileType{
    name: string,
    order: number,
}

export const Alarm = () =>{

    const navigate = useNavigate();
    const [radio, setRadiop] = useState<string>();
    const [editerValue, setEditerValue] = useState<string>("");
    const [fileValue, setFileValue] = useState<File[]>();
    const [viewValue, setViewValue] = useState<FileType[]>([]);

    const handleClickRadioBtn = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setRadiop(e.target.value);
    }

    const hadleClickFile=(e: any)=>{
        const fileList = e.target.files;
        if(fileList){
            const newFileList = fileList.map((file: File, idx: number) => ({
                name: file.name,
                order: idx,
            }))
            
            setViewValue(newFileList);
        }
        console.log(fileValue);
    }

    const hadleClickSend = () => {
        navigate("/alarm/access");
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
                <_.Editer theme="snow" value={editerValue} onChange={setEditerValue}/>
                <_.AddFileFlex>
                    <div>첨부 파일</div>
                    <_.LabelFlex>
                        <_.FileLabel htmlFor="fileUpload">파일 첨부하기</_.FileLabel>
                        <_.FileInput 
                            type="file" 
                            multiple
                            id="fileUpload"
                            onChange={hadleClickFile}
                        />
                    </_.LabelFlex>
                </_.AddFileFlex>
                <_.FileNameFlex>
                    {
                        viewValue.map(data=>(
                            <_.FileName key={data.order}>{data.name}</_.FileName>
                        ))
                    }
                </_.FileNameFlex>
                <_.BtnFlex>
                    <_.SendBtn onClick={hadleClickSend}>보내기</_.SendBtn>
                </_.BtnFlex>
            </_.Box>
        </_.Background>
    );
}