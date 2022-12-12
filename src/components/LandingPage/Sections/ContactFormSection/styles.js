import styled from "styled-components";

export const Container = styled.section`
    margin-top: 110px;
    padding: 0 245px;

    @media(max-width: 991px) {
        padding: 0 100px;
    }

    @media(max-width: 575px) {
        padding: 0 30px;
    }
`;

export const ContactDetailsContainer = styled.div`
    opacity: 0;
    transform: translateX(-700px);
    transition: opacity 1.5s ease, transform 1s ease;
    
    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @media(max-width: 991px) {
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
`;

export const Subtitle = styled.h3`
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    color: #20C9AD;

    @media(max-width: 575px) {
        font-size: 40px;
        line-height: 50px;
    }
`;

export const DetailName = styled.h5`
    font-weight: bold;
    font-size: 18px;

    &.with-margin {
        margin-top: 24px;
    }
`;

export const DetailText = styled.p`
    font-size: 14px;
    margin-bottom: 24px;

    &.without-margin {
        margin-bottom: 0;
    }

    &.font-bold {
        font-weight: bold;
    }
`;

export const FormContainer = styled.div`
    padding-top: 40px;
    opacity: 0;
    transform: translateX(900px);
    transition: opacity 1.5s ease, transform 1s ease;
    
    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    & form {
        height: 100%;
        width: max-content;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        gap: 12px;

        @media(max-width: 991px) {
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width: 991px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Input = styled.input`
    height: 54px;
    width: 415px;
    border-radius: 5px;
    padding: 15px;
    border: none;
    background-color: #E6E6E6;
    color: #022842;
    font-size: 14px;

    @media(max-width: 575px) {
        width: 280px;
    }
`;

export const TextArea = styled.textarea`
    width: 415px;
    border-radius: 5px;
    padding: 15px;
    border: none;
    background-color: #E6E6E6;
    color: #022842;
    font-size: 14px;

    @media(max-width: 575px) {
        width: 280px;
    }
`;