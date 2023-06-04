import { useState } from "react";
import * as _ from "./style"

type GroupState = {
    groups?: number;
}

export const GroupContent = ({groups}:GroupState) => {

    const [listState, setListState] = useState<boolean>(true);
    const [peopleViewState, setPeopleViewState] = useState<string>("");

    const AddListHandling = () =>{
        if(listState){
            setListState(false);
        }else{
            setListState(true);
        }
    }

    if(groups === 1){
        return(
            <_.GroupFlex>
                <_.GroupListFlex>
                    <_.Group>
                        <_.CheckBoxLabel>
                            <_.CheckBox type="checkbox" />
                        </_.CheckBoxLabel>
                        <_.ListChangeFlex onClick={AddListHandling}>
                            <_.AddListBtn 
                                src={listState === true ? "/assets/img/AddList.svg" : "/assets/img/List.svg"}
                            />
                            <_.GroupName>1학년</_.GroupName>
                        </_.ListChangeFlex>
                    </_.Group>
                    {
                        listState === false ? 
                        <_.PeopleListFlex>
                            <_.PeopleList>
                                <_.CheckBoxLabel>
                                    <_.CheckBox type="checkbox" />
                                </_.CheckBoxLabel>
                                <_.PeopleGroup>1반</_.PeopleGroup>
                            </_.PeopleList>
                    </_.PeopleListFlex>
                    :
                    <div></div>
                    }
                    
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