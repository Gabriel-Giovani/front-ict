import styled from "styled-components";
import AreasAtuacaoBackground from '../../../../assets/images/areas-atuacao-background.png';

export const Container = styled.section`
    margin-top: 110px;
    text-align: center;
    background-image: url(${AreasAtuacaoBackground});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    transform: translateY(300px);
    transition: opacity 1.5s ease, transform 1.5s ease;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
`;

export const Subtitle = styled.h3`
    font-weight: bold;
    font-size: 50px;
    color: #20C9AD;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #022842;
    line-height: 28px;
`;

export const AreasContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    & .area-col {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
`;

export const Area = styled.div`
    max-width: 224px;
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #20C9AD;

    & img {
        width: 100%;
    }

    @media(max-width: 575px) {
        
    }
`;

export const AreaText = styled.div`
    padding: 0 10px;
`;

export const AreaTitle = styled.h4`
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 10px;
`;

export const AreaDescription = styled.p`
    font-size: 12px;
`;