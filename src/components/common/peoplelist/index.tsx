import { useRecoilValue } from "recoil";
import { isGroupListAtom } from "../../atom";
import * as _ from "./style"

export const DetailPeopleList = () => {

    const getDetailList = useRecoilValue(isGroupListAtom);

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
                    <_.CheckBoxLabelMove>
                        <_.CheckBoxMove type="checkbox"></_.CheckBoxMove>
                    </_.CheckBoxLabelMove>
                    <_.Classification>학생</_.Classification>
                    <_.StudentId>2102</_.StudentId>
                    <_.StudentName>강진현</_.StudentName>
                    <_.StudentNumber>010-4884-4942</_.StudentNumber>
                </_.DetailPeopleList>
            </_.Flex>
            }
        </>
    );
}