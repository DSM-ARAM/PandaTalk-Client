import * as _ from "./style"

export const AnotherDetail = () => {
    return(
        <>
            <_.Header>
                <_.LogoFlex>
                    <_.LogoImg src="/assets/img/Logo.svg"/>
                </_.LogoFlex>
            </_.Header>
            <_.ContentFlex>
                <_.Content>
                    <_.Title>오늘 하루도 아프지 않고 지내기!!</_.Title>
                    <_.TitleFlex>
                        <_.SmallTitle>1000분전</_.SmallTitle>
                        <_.SmallTitle>어썸드래곤</_.SmallTitle>
                    </_.TitleFlex>
                    <_.Line/>
                </_.Content>
                <_.FileFlex>
                    <_.FileList>
                        <_.Files>대마고 축제 홍보 포스터.pdf</_.Files>
                    </_.FileList>
                </_.FileFlex>
            </_.ContentFlex>
            
        </>
    );
}