import { ReactNode, useState } from "react";
import { styled } from "styled-components";
import { Color } from "../../../styles/theme/color";

type PropsType = {
    children: ReactNode;
    open: boolean;
}

export const Modal = ({children, open}:PropsType) =>{

    const [isOpen, setIsOpen] = useState<boolean>(open);

    const hadleClose = () =>{

    }

    return(
        <>
            {
                isOpen && 
                <Background>
                    <ModalBox>
                        {children}
                    </ModalBox>
                </Background>
            }
        </>        
    );
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(64, 64, 64, 0.50);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
    width: 60%;
    height: 70%;
    background-color: ${Color.white};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;