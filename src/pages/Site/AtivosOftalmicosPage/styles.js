import styled from "styled-components";

export const HeaderAtivosOftalmicos = styled.div`
    width: 100%;
    max-height: 490px;

    img {
        width: 100%;
    }

    .header-desktop {
        display: block;
    }

    .header-mobile {
        display: none;
    }

    @media(max-width: 608px) {
        max-height: 650px;

        .header-desktop {
            display: none;
        }

        .header-mobile {
            display: block;
        }
    }
`;

export const Container = styled.section`
    
`;

export const PageTitle = styled.div`
    margin-bottom: 80px;

    @media(min-width: 1460px) {
        margin-top: 200px;
    }

    @media(max-width: 575px) {
        margin-top: 90px;
        margin-bottom: 20px;
    }
`;

export const TitleAtivos = styled.h2`
    color: #40BDA8;
    text-transform: uppercase;
    font-weight: normal !important;
    margin-bottom: -5px !important;
    font-size: 76px !important;
    text-align: left !important;

    @media(max-width: 575px) {
        text-align: center !important;
        font-size: 60px !important;
    }

    @media(max-width: 475px) {
        font-size: 40px !important;
    }
`;

export const TitleOftalmicos = styled.h2`
    color: #40BDA8;
    text-transform: uppercase;
    font-size: 76px !important;
    text-align: left !important;

    @media(max-width: 575px) {
        text-align: center !important;
        font-size: 60px !important;
    }

    @media(max-width: 475px) {
        font-size: 40px !important;
    }
`;

export const Paragraph = styled.p`
    text-align: justify;
`;

export const InjetaveisSection = styled.div`
    margin-top: 30px;

    .ant-col {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
    }

    @media(max-width: 767px) {
        position: relative;
        margin-top: -80%;

        .img-objeto {
            position: relative;
            top: 40%;
            right: 26%;
        }
    }
`;

export const UsoTopicoSection = styled.div`
    margin-top: 30px;

    .row-desktop {
        display: block;
    }

    .row-mobile {
        display: none;
    }

    .ant-col {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
    }

    @media(max-width: 767px) {
        position: relative;
        margin-top: -58%;
        margin-bottom: 90px;

        .row-desktop {
            display: none;
        }

        .row-mobile {
            display: block;
        }

        .img-objeto {
            position: relative;
            top: 35%;
            left: 20%;
        }
    }
`;

export const ContainerLogoAtivoOftalmico = styled.div`
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    display: none;

    @media(max-width: 575px) {
        display: flex;
    }
`;