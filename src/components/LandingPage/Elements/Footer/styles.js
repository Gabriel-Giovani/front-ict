import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 110px;
    padding: 40px 130px;
    background: #022842;

    & .ant-col {
        display: flex;
        align-items: center;
        justify-content: center;

        &.justify-start {
            justify-content: flex-start;
        }

        &.logo-col {
            @media(max-width: 575px) {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
            }
        }
    }
`;

export const SocialLinksContainer = styled.div`
    display: flex;
    gap: 50px;
`;

export const SocialLinkItem = styled.div`
    background-color: #FFF;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .3s ease, color .3s ease; 

    &:hover {
        background-color: #000;
        color: #FFF;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
`;