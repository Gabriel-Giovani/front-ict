import styled from "styled-components";

export const Container = styled.section`
    margin-top: 290px;
    padding: 0 240px;
    opacity: 0;
    transform: translateY(300px);
    transition: opacity 1.5s ease, transform 1.5s ease;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @media(max-width: 1419px) {
        padding: 0 150px;
    }

    & .about-row {
        @media(max-width: 1199px) {
            display: flex;
            align-items: center;
            justify-content: center;

            & button {
                margin-top: 50px;
            }
        }
    }

    @media(max-width: 767px) {
        margin-top: 100px;
        padding: 0 70px;
    }

    @media(max-width: 575px) {
        padding: 0 30px;
    }
`;

export const TextContainer = styled.div`
    height: 100%;

    @media(max-width: 1199px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
    font-weight: bold;
    font-size: 45px;
    color: #20C9AD;
    line-height: 55px;
    margin-bottom: 16px;

    @media(max-width: 575px) {
        font-size: 35px;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    color: #022842;
    max-width: 420px;

    @media(max-width: 1199px) {
        max-width: 100%;
    }
`;

export const ImageContainer = styled.div`
    height: 100%;

    & img {
        position: relative;
        top: -50px;

        @media(max-width: 1199px) {
            top: 0;
        }

        &.w-100-mobile {
            @media(max-width: 991px) {
                width: 100%;
            }
        }
    }

    @media(max-width: 1199px) {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;