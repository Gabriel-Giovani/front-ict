import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TopicsContainer = styled.div`
    position: absolute;
    background-color: #20C9AD;
    max-width: 724px;
    padding: 35px 40px;
    border-radius: 25px;
    opacity: 0;
    transform: translateY(150px);
    transition: opacity 1.5s ease, transform 1.5s ease;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    & .topics-row {
        @media(max-width: 767px) {
            display: flex;
            gap: 20px;
        }
    }

    @media(max-width: 767px) {
        position: relative;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export const TopicItem = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 2px solid #FFF;
    height: 100%;

    & img {
        height: 52px;
        width: 40px;
        margin-bottom: 10px;
    }

    & h5 {
        font-weight: bold;
        font-size: 16px;
        color: #000;
        margin-bottom: 14px;
    }

    & span {
        font-size: 15px;
    }

    @media(max-width: 767px) {
        align-items: center;
        text-align: center;
        border-right: none;
    } 
`;