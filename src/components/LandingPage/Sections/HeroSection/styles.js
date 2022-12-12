import styled from "styled-components";
import HeroBanner from '../../../../assets/images/hero-banner.png';
import WaveImage from '../../../../assets/images/wave.png';

export const Container = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${HeroBanner});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 200px;

    @media(max-width: 1115px) {
        flex-direction: column;
        justify-content: center;
        gap: 60px;
    }

    @media(max-width: 991px) {
        padding: 0 100px;
    }

    @media(max-width: 575px) {
        height: 80vh;
    }
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    opacity: 0;
    transform: translateX(-800px);
    transition: opacity 1.5s ease, transform 1.5s ease;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @media(max-width: 1115px) {
        align-items: center;
        text-align: center;
    }
`;

export const TitleText = styled.h4`
    font-weight: bold;
    font-size: 17px;
    color: #FFF;
    text-transform: uppercase;
`;

export const TitleDescription = styled.h2`
    font-weight: bold;
    font-size: 45px;
    color: #20C9AD;
    line-height: 55px;
    max-width: 584px;

    @media(max-width: 991px) {
        font-size: 40px;
    }

    @media(max-width: 767px) {
        font-size: 35px;
    }

    @media(max-width: 575px) {
        font-size: 25px;
        line-height: 40px;
    }
`;

export const SocialLinksList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 0;
    transform: translateX(300px);
    transition: opacity 1.5s ease, transform 1.5s ease;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @media(max-width: 1115px) {
        flex-direction: row;
    }
`;

export const SocialLinkItem = styled.li`
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

export const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url(${WaveImage});

    @media(max-width: 575px) {
        display: none;
    }
`;