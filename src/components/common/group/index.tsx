import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import { isGroupListAtom } from "../../atom";
import * as _ from "./style"

type GroupState = {
    groups?: number;
    id?: number;
    groupName: string;
    groupClass: string[];
}

export const GroupContent = ({groups, groupName, id, groupClass}:GroupState) => {

    const [listGradeState, setListGradeState] = useState<boolean>(true);
    const [peopleViewState, setPeopleViewState] = useRecoilState(isGroupListAtom);

    const GroupListHandling = () =>{
        setListGradeState(listGradeState => !listGradeState);
        setPeopleViewState({group: groupName, class: "", status: true});
    }

    if(groups === 1){
        return(
            <_.GroupFlex>
                <_.GroupListFlex>
                    <_.Group>
                        <_.CheckBoxLabel>
                            <_.CheckBox type="checkbox" />
                        </_.CheckBoxLabel>
                        <_.ListChangeFlex onClick={GroupListHandling}>
                            <_.AddListBtn 
                                src={listGradeState === true ? "/assets/img/AddList.svg" : "/assets/img/List.svg"}
                            />
                            <_.GroupName>{groupName}</_.GroupName>
                        </_.ListChangeFlex>
                    </_.Group>
                    {
                        groupClass.map((data, index)=>{
                            return(
                                    listGradeState === false ? 
                                    <_.PeopleListFlex>
                                        <_.PeopleList>
                                            <_.CheckBoxLabel>
                                                <_.CheckBox type="checkbox" />
                                            </_.CheckBoxLabel>
                                            <_.PeopleGroup 
                                                onClick={()=> setPeopleViewState(
                                                    {group: groupName, class: groupClass[index], status: true}
                                                )}
                                            >{data}</_.PeopleGroup>
                                        </_.PeopleList>
                                </_.PeopleListFlex>
                                :
                                <></>
                        );
                    })}
                </_.GroupListFlex>
            </_.GroupFlex>
        );
    }
    else if(groups === 2){
        return(
            <div>byebye</div>
        );
    }
    else return null;

}