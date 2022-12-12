import styled from 'styled-components';

export const Container = styled.section`

`;

export const BuyAssetsBox = styled.div`
    position: relative;
    top: -320px;
    background-color: #022842;
    padding: 35px;
    border-radius: 25px;
    max-width: 950px;
    margin-bottom: -200px;

    @media(max-width: 991px) {
        top: -200px;
        max-width: 90%;
        margin-bottom: -130px;
    }

    & .assets-row {
        @media(max-width: 767px) {
            display: flex;
            gap: 30px;
        }
    }
`;

export const BuyAssetsTitle = styled.h4`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    margin-bottom: 45px;
`;

export const AssetBox = styled.div`
    & svg {
        color: #FFF;
        font-size: 34px;
        margin-bottom: 10px;
    }

    & h6 {
        font-weight: bold;
        font-size: 14px;
        color: #20C9AD;
    }

    & p {
        color: #FFF;
    }

    @media(max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;