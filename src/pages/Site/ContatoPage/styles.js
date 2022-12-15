import styled from 'styled-components';

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 45px;

    & .input-col-mobile {
        @media(max-width: 575px) {
            margin-bottom: 12px;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
    border: 1px solid #C4C4C4;
    background-color: #F5F5F5;
    font-size: 12px;
`;

export const Select = styled.select`
    width: 100%;
    border-radius: 20px 20px 0 0;
    height: 40px;
    padding-left: 20px;
    border: 1px solid #C4C4C4;
    background-color: #F5F5F5;
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    border-radius: 0 0 50px 50px;
    padding-left: 20px;
    padding-top: 20px;
    border: 1px solid #C4C4C4;
    background-color: #E9E9E9;
    color: #000;
    font-size: 12px;
    position: relative;
    top: -12px;
`;

export const InputMaskContainer = styled.div`
    & .input-mask {
        width: 100%;
        border-radius: 50px;
        height: 40px;
        padding-left: 20px;
        border: 1px solid #C4C4C4;
        background-color: #F5F5F5;
        font-size: 12px;
    }
`;

export const InputFileContainer = styled.div`
    & input {
        display: none;
    }

    & label {
        width: 100%;
        border-radius: 50px;
        height: 40px;
        padding: 5px 20px;
        border: 1px solid #C4C4C4;
        background-color: #F5F5F5;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
`;