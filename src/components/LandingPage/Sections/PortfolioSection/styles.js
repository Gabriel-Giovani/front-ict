import styled from "styled-components";
import PortfolioBackground from '../../../../assets/images/portfolio-background.png';

export const Container = styled.section`
    margin-top: 110px;
    border-radius: 50px 50px 0px 0px;
    background-image: url(${PortfolioBackground});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0;
    transition: opacity 1.5s ease;

    &.visible {
        opacity: 1;
    }

    & .ant-col {
        padding: 0 !important;
    }

    @media(max-width: 1199px) {
        padding: 40px 0;
    }

    @media(max-width: 767px) {
        border-radius: 50px;
        margin-bottom: 30px;
    }

    @media(max-width: 575px) {
        padding: 40px 20px;
    }

    & .portfolio-row {
        @media(max-width: 1199px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column-reverse;
            gap: 30px;
        }
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    opacity: 0;
    transform: translateX(-850px);
    transition: opacity 1.5s ease, transform 1s ease;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    & .frascos-ampolas-image {
        transform: rotate(-10.98deg);
        z-index: 9;

        @media(max-width: 1199px) {
            position: relative;
            left: 10%;
            width: 70%;
        }
    }

    & .soro-image {
        transform: rotate(13.85deg);
        position: relative;
        left: -300px;
        z-index: 8;

        @media(max-width: 1199px) {
            left: -15%;
            width: 70%;
        }
    }

    @media(max-width: 1199px) {
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 767px) {
        display: none;
    }
`;

export const TextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    opacity: 0;
    transform: translateX(950px);
    transition: opacity 1.5s ease, transform 1s ease;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @media(max-width: 1599px) {
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
    color: #20C9AD;
`;

export const Subtitle = styled.h3`
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    color: #FFF;

    @media(max-width: 575px) {
        font-size: 40px;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    color: #FFF;
    line-height: 28px;
    max-width: 395px;
`;

export const AreasContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -120px;
    opacity: 0;
    transform: translateY(300px);
    transition: opacity 1.5s ease, transform 1s ease;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    & .area-col {
        @media(max-width: 767px) {
            margin-bottom: 30px;
        }
    }

    @media(max-width: 767px) {
        top: 20px;
        margin-bottom: 50px;
    }
`;

export const Box = styled.div`
    max-width: 946px;
    padding: 44px 0;
    background-color: #20C9AD;
    border-radius: 25px;
`;

export const Area = styled.div`
    padding: 0 55px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &.bordered {
        border-right: 2px solid #FFF;

        @media(max-width: 767px) {
            border: none;
        }
    }

    @media(max-width: 767px) {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

export const AreaTitle = styled.h3`
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    color: #FFF;
`;

export const AreaDescription = styled.p`
    font-size: 14px;
    line-height: 28px;
    color: #FFF;
    max-width: 355px;
`;