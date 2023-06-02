import { useState } from "react";
import { GroupContent } from "../common/group";
import * as _ from "./style"

export const People = () =>{

    const [groupState, setGroupState] = useState<number>(1);

    return(
        <_.Background>
            <_.Flex>
                <_.GroupChange>
                    <_.Group onClick={()=>{setGroupState(1)}} maincolor={groupState === 1 ? 1 : 0}>공용 그룹</_.Group>
                    <_.Bar/>
                    <_.Group onClick={()=>{setGroupState(2)}} maincolor={groupState === 2 ? 1 : 0} >개인 그룹</_.Group>
                </_.GroupChange>
                <_.Line/>
                <_.BoxFlex>
                    <_.GroupBox>
                        <GroupContent groups={groupState} />
                    </_.GroupBox>
                    <_.DetailBox></_.DetailBox>
                </_.BoxFlex>
                <_.BtnFlex>
                    <_.PeopleBtn>그룹 삭제</_.PeopleBtn>
                    <_.PeopleFlex>
                        <_.PeopleBtn>구성원 삭제</_.PeopleBtn>
                        <_.PeopleBtn>구성원 등록하기</_.PeopleBtn>
                    </_.PeopleFlex>
                </_.BtnFlex>
            </_.Flex>
        </_.Background>
    );
}