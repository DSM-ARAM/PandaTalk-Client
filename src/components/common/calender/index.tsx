import * as _ from "./style"
import { Korean } from "flatpickr/dist/l10n/ko.js"

export const Calender = () =>{

    return(
       <_.CalenderComponent
       placeholder="예약시간을 설정해주세요" 
       options={{
        time_24hr: true,
        enableTime: true,
        minDate: "today",
        locale: Korean,
       }}/>
    );
}