import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isGroupListAtom } from "../atom";
import { GroupContent } from "../common/group";
import {DetailPeopleList} from "../common/peoplelist";
import * as _ from "./style"

export const People = () =>{

    const [groupState, setGroupState] = useState<number>(1);

    const [datas, setDatas] = useState([
        {id: 1, group: "1학년", class: ["1반", "2반", "3반", "4반"]},
        {id: 2, group: "2학년", class: ["1반", "2반"]},
        {id: 3, group: "3학년", class: ["1반", "2반", "4반"] },
    ])

    const groupListState = useRecoilValue(isGroupListAtom);
    
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
                        {
                            datas.map(data=>(
                                <GroupContent 
                                    groups={groupState} 
                                    groupName={data.group}
                                    groupClass={data.class}
                                    key={data.id}
                                />
                            ))
                        }
                        
                    </_.GroupBox>
                    <_.DetailBox>
                        <DetailPeopleList/>
                    </_.DetailBox>
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