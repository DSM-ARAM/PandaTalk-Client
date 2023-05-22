import * as _ from "./style";

export const Main = () =>{
    return(
        <_.Background>
            <_.Flex>
                <p>최근 발송내역</p>
                <_.AllSendResultFlex>
                    <_.AllSendResult to="/result">더보기</_.AllSendResult>
                </_.AllSendResultFlex>
                <_.LastSendList>
                    <_.SendCard>
                        <_.Information>
                            <_.Title>오늘도 망했네 망했어...</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-05-21 일요일</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>니시노 카나</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>끼얏호 어떻하지 진짜 클났다!! 정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                    <_.SendCard>
                        <_.Information>
                            <_.Title>오늘도 망했네 망했어...</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-05-21 일요일</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>니시노 카나</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>끼얏호 어떻하지 진짜 클났다!! 정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                    <_.SendCard>
                        <_.Information>
                            <_.Title>오늘도 망했네 망했어...</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-05-21 일요일</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>니시노 카나</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>끼얏호 어떻하지 진짜 클났다!! 정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                    <_.SendCard>
                        <_.Information>
                            <_.Title>오늘도 망했네 망했어...</_.Title>
                            <_.InformationFlex>
                                <_.Days>2023-05-21 일요일</_.Days>
                                <_.Bar></_.Bar>
                                <_.Name>니시노 카나</_.Name>
                            </_.InformationFlex>
                        </_.Information>
                        <_.Contents>
                            <_.ContentText>끼얏호 어떻하지 진짜 클났다!! 정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애</_.ContentText>
                        </_.Contents>
                    </_.SendCard>
                </_.LastSendList>
            </_.Flex>
        </_.Background>
    );
}