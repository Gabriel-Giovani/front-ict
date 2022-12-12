import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 490px;
    border-radius: 0 0 50px 50px;
    background-color: #022842;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
    opacity: 0;
    transition: opacity 1.5s ease;

    &.visible {
        opacity: 1;
    }

    @media(max-width: 991px) {
        height: 40vh;
    }

    @media(max-width: 575px) {
        margin-bottom: 150px;
    }

    & img {
        position: absolute;
        top: 300px;

        @media(max-width: 991px) {
            width: 90%;
        }
    }
`;

export const PageTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    color: #20C9AD;

    @media(max-width: 767px) {
        font-size: 40px;
    }

    @media(max-width: 575px) {
        text-align: center;
        font-size: 30px;
    }
`;