import styled from 'styled-components';

export const SumaryTitle = styled.h4`
    padding: 15px 0 15px 50px;
    font-weight: bold;
    font-size: 25px;
    background-color: #20C9AD;
    width: 100%;

    @media(max-width: 575px) {
        text-align: center;
        padding: 15px;
    }
`;

export const SumarySubtitle = styled.h5`
    font-weight: bold;
    font-size: 14px;
    margin-top: 26px;
    margin-bottom: 15px;

    @media(max-width: 575px) {
        text-align: center;
    }
`;