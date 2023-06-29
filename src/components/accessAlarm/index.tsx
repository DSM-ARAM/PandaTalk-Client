import * as _ from "./style";

export const AccessAlarm = () => {
    return(
       <_.Background>
        <_.BackgroundColor>
            <_.LogoFlex>
                <_.LogoBox>
                    <_.LogoImg src="/assets/img/Logo.svg" />
                </_.LogoBox>
            </_.LogoFlex>
        </_.BackgroundColor>
        <_.Flex>
            <_.ContentFlex>
                <_.BlackContent>총</_.BlackContent>
                <_.MainContent>1000</_.MainContent>
                <_.BlackContent>건의 알림이 발송 되었다.</_.BlackContent>
            </_.ContentFlex>
            <_.ResultGo to="/result">발송내역 보러가기</_.ResultGo>
        </_.Flex>
       </_.Background>
    );
}