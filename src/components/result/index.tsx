import * as _ from "./style";

export const Result = () =>{
    return(
        <_.Background>
            <_.Flex>
                <_.Head>결과 조회</_.Head>
                <_.FilterFlex>
                    <_.Select>
                        <option>전체(최근순)</option>
                        <option>발송 완료</option>
                        <option>발송 예약</option>
                        <option>전체(지난순)</option>
                    </_.Select>
                </_.FilterFlex>
                <_.InfoBar>
                    <_.Time>발송 / 예약 시간</_.Time>
                    <_.Content>내용</_.Content>
                    <_.ResultState>상태</_.ResultState>
                    <_.Send>발송</_.Send>
                </_.InfoBar>
                <_.ResultList>
                    <_.ListFlex>
                        <_.Time>2023-04-06 17:10</_.Time>
                        <_.Content>오늘부로 이 학교는 제껍니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</_.Content>
                        <_.ResultState>발송예약</_.ResultState>
                        <_.Send>999</_.Send>
                    </_.ListFlex>
                    <_.ListFlex>
                        <_.Time>2023-04-06 17:10</_.Time>
                        <_.Content>오늘부로 이 학교는 제껍니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</_.Content>
                        <_.ResultState>발송예약</_.ResultState>
                        <_.Send>999</_.Send>
                    </_.ListFlex>
                    <_.ListFlex>
                        <_.Time>2023-04-06 17:10</_.Time>
                        <_.Content>오늘부로 이 학교는 제껍니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</_.Content>
                        <_.ResultState>발송예약</_.ResultState>
                        <_.Send>999</_.Send>
                    </_.ListFlex>
                </_.ResultList>
            </_.Flex>
        </_.Background>
    );
}