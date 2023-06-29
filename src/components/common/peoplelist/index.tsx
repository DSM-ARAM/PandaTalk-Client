import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isGroupListAtom } from "../../atom";
import * as _ from "./style"

export const DetailPeopleList = () => {

    const getDetailList = useRecoilValue(isGroupListAtom);
    const [listData, setListData] = useState([
        { id: 1, kind: "학생", studentId: 2102, name: "강진현", phoneNumber: "010-4884-4942"},
        { id: 2, kind: "학생", studentId: 2102, name: "강진현", phoneNumber: "010-4884-4942"},
        { id: 3, kind: "학생", studentId: 2102, name: "강진현", phoneNumber: "010-4884-4942"},
        { id: 4,kind: "학생", studentId: 2102, name: "강진현", phoneNumber: "010-4884-4942"},
    ]); 


    return(
        <>
           { 
            getDetailList.status && 
            <_.Flex>
                <_.Title>{getDetailList.group} {getDetailList.class}</_.Title>
                <_.Bar/>
                <_.InfoFlex>
                    <_.CheckBoxLabel>
                        <_.CheckBox type="checkbox"></_.CheckBox>
                    </_.CheckBoxLabel>
                    <div>분류</div>
                    <_.StudentIdFlex>
                        <img src="/assets/img/blackdownarrow.svg" />
                        <div>학번</div>
                    </_.StudentIdFlex>
                    <div>이름</div>
                    <div>전화번호</div>
                </_.InfoFlex>
                <_.DetailPeopleList>
                    {listData.map(data => (
                        <_.DetailPeopleListFlex key={data.id}>
                            <_.CheckBoxLabelMove>
                                <_.CheckBoxMove type="checkbox"></_.CheckBoxMove>
                            </_.CheckBoxLabelMove>
                            <_.Classification>{data.kind}</_.Classification>
                            <_.StudentId>{data.studentId}</_.StudentId>
                            <_.StudentName>{data.name}</_.StudentName>
                            <_.StudentNumber>{data.studentId}</_.StudentNumber>
                        </_.DetailPeopleListFlex>
                    ))}
                </_.DetailPeopleList>
            </_.Flex>
            }
        </>
    );
}