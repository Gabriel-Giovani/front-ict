import styled from 'styled-components';

export const Container = styled.section`
    background-color: #20C9AD;
    position: relative;
    top: -342px;
    padding-top: 400px;
    padding-bottom: 80px;
    z-index: 1;
`;

export const ProfessionalList = styled.div`
    width: 100%;
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media(max-width: 767px) {
        padding: 0 50px;
    }

    @media(max-width: 575px) {
        padding: 0 20px;
    }
`;

export const ProfessionalImageBox = styled.div`
    @media(max-width: 1199px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & img {
        max-width: 350px;
        border-radius: 25px;

        @media(max-width: 575px) {
            max-width: 100%;
        }
    }
`;

export const ProfessionalDetails = styled.div`
    @media(max-width: 1199px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    & h3 {
        font-weight: bold;
        font-size: 30px;
    }
    
    & h5 {
        font-weight: bold;
        font-size: 20px;
        color: #FFF;
        margin-bottom: 25px;
    }

    & p {
        font-size: 14px;
    }
`;