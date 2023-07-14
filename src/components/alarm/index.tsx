import { useEffect, useState } from "react";
import { Button } from "../common/button";
import * as _ from "./style";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Korean } from "flatpickr/dist/l10n/ko.js"
import { Modal } from "../common/modal";
import { Group } from "../People/style";

const baseUrl = process.env.REACT_APP_BASEURL

interface FileType{
    name: string,
    order: number,
}

export const Alarm = () =>{

    const token = localStorage.getItem("AccessToken");
    const navigate = useNavigate();
    const [radio, setRadiop] = useState<string>("");
    const [titleValue, setTitleValue] = useState<string>("");
    const [editerValue, setEditerValue] = useState<string>("");
    const [fileValue, setFileValue] = useState<string | Blob>("");
    const [viewValue, setViewValue] = useState<FileType[]>([]);
    const [dateValue, setDateValue] = useState<React.SetStateAction<Date>>(new Date());
    const [modal, setModal] = useState<boolean>(false);
    const [groupState, setGroupState] = useState<number>(1);
    const [groupList, setGroupList] = useState<string[]>(["1학년", "2학년", "3학년"]);

    const handleClickRadioBtn = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setRadiop(e.target.value);
    }

    const hadleClickFile=(e: any)=>{
        const fileList = e.target.files;
        if (fileList) {
        const newSelectedFiles: FileType[] = []
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i]
            newSelectedFiles.push({
            name: file.name,
            order: i,
            })
        }
        setFileValue(fileList)
        setViewValue(newSelectedFiles)
        }
    }

    const hadleClickSend = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('noticeAdditional', fileValue);
        formData.append('noticeHead', titleValue);
        formData.append('noticeContent', editerValue);
        if(radio === "1"){
            let now = new Date();
            formData.append("noticeTime", now.toLocaleString());
        }else{
            formData.append("noticeTime", dateValue.toLocaleString());
        }
        navigate("/alarm/access");
    }

    const handleRemove = (order:number) =>{
        console.log(order);
        setViewValue((viewValue) => viewValue.filter((view:any) => view.order !== order));
    }

    useEffect(()=>{
        // axios({
        //     method: 'get',
        //     url: `${baseUrl}/person/`,
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     },
        //     params: {
        //         group: groupState === 1 ? "common" : "personal"
        //     }
        // }).then((result)=>{
        //     console.log(result);
        //     setGroupList(result.data);
        // }).catch((error)=>{
        //     console.error(error);
        // })
    },[])

    const handlePublicGroup = () =>{
        setGroupState(1);
    }

    const handlePrivateGroup = () =>{
        setGroupState(2);
    }

    return(
        <_.Background>
            {
                modal && 
                <Modal open>
                    <_.ModalFlex>
                        <_.ImgFlex>
                            <_.ModalTitle>구성원 선택하기</_.ModalTitle>
                            <_.ModalCancel onClick={()=>setModal(false)} src="/assets/img/Cancel.svg"/>
                        </_.ImgFlex>
                        <_.ModalLine/>
                        <_.BoxFlex>
                            <_.GroupBoxFlex>
                                <_.SelectGroupFlex>
                                    <_.SelectGroup onClick={handlePublicGroup} maincolor={groupState === 1 ? 1 : 0}>공용그룹</_.SelectGroup>
                                    <_.SelectGroup onClick={handlePrivateGroup} maincolor={groupState === 2 ? 1 : 0}>개인그룹</_.SelectGroup>
                                </_.SelectGroupFlex>
                                <_.GroupBox>
                                    <_.AllFlex>
                                        <_.PickBoxLabel>
                                            <_.PickBox type="checkbox"></_.PickBox>
                                        </_.PickBoxLabel>
                                        <_.AllContent>전체</_.AllContent>
                                    </_.AllFlex>
                                    <_.ModalLine/>
                                    <_.GroupList>
                                    {
                                        groupList.map((data)=>(
                                            <_.GroupFlex>
                                                <_.PickBoxLabel>
                                                    <_.PickBox type="checkbox"></_.PickBox>
                                                </_.PickBoxLabel>
                                                <_.GroupName>{data}</_.GroupName>
                                            </_.GroupFlex>
                                        ))
                                    }    
                                    </_.GroupList>
                                </_.GroupBox>
                            </_.GroupBoxFlex>
                            <_.SelectPeopleFlex>
                                <div>인원 선택</div>
                                <_.SelectPeopleBox></_.SelectPeopleBox>
                            </_.SelectPeopleFlex>
                            <_.PeopleCheckFlex>
                                <div>알림 받을 인원</div>
                                <_.PeopleCheckBox></_.PeopleCheckBox>
                            </_.PeopleCheckFlex>
                        </_.BoxFlex>
                        <_.BtnFlex>
                            <_.SelectBtn>선택하기</_.SelectBtn>
                        </_.BtnFlex>
                    </_.ModalFlex>
                </Modal>
            }
            <_.Box>
                <_.PeopleFlex>
                    <_.EssentialFlex>
                        <_.ReceivePeople>받는 사람</_.ReceivePeople>
                        <_.Essential>(필수)</_.Essential>
                    </_.EssentialFlex>
                    <_.People>0명</_.People>
                    <Button weight="normal" onClick={()=>setModal(true)}>구성원 선택</Button>
                </_.PeopleFlex>
                <_.Bar/>
                <_.PeopleFlex>
                    <_.EssentialFlex>
                        <_.ReceivePeople>발송 시간</_.ReceivePeople>
                        <_.Essential>(필수)</_.Essential>
                    </_.EssentialFlex>
                    <_.CheckBoxLabel><_.CheckBox type="radio" checked={radio === "1"} value="1" onChange={handleClickRadioBtn}/>즉시 발송</_.CheckBoxLabel>
                    <_.CheckBoxLabel><_.CheckBox type="radio" checked={radio === "2"} value="2" onChange={handleClickRadioBtn}/>예약 발송</_.CheckBoxLabel>
                    {radio === "2" ? 
                    <_.Calender
                        placeholder="예약시간을 설정해주세요" 
                        options={{
                        time_24hr: true,
                        enableTime: true,
                        minDate: "today",
                        locale: Korean,
                        }}
                        onChange={()=>setDateValue}
                    />
                    : ""}
                </_.PeopleFlex>
                <_.Bar/>
                <_.PeopleFlex>
                    <_.EssentialFlex>
                        <_.ReceivePeople>글작성 하기</_.ReceivePeople>
                        <_.Essential>(필수)</_.Essential>
                    </_.EssentialFlex>
                </_.PeopleFlex>
                <_.TitleInput placeholder="제목을 작성해주세요" onChange={(e)=>setTitleValue(e.target.value)}/>
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
                            <_.FileName key={data.order}>
                                {data.name}
                                <_.Cancel onClick={()=>handleRemove(data.order)} src="/assets/img/Cancel.svg"/>
                            </_.FileName>
                        ))
                    }
                </_.FileNameFlex>
                <_.BtnFlex>
                    <_.SendBtn type="submit" onClick={hadleClickSend}>보내기</_.SendBtn>
                </_.BtnFlex>
            </_.Box>
        </_.Background>
    );
}