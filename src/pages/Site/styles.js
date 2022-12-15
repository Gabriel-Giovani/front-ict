import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Section = styled.section`
    margin-bottom: 150px;
    padding: 0 246px;
    width: 100%;

    &.fix-margin-top-mobile {
        @media(max-width: 991px) {
            margin-top: -90px !important;
        }
    }

    &.whithout-margin-bottom-mobile {
        @media(max-width: 575px) {
            margin-bottom: 0;
        }
    }

    h2 {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;

        &.margin-bottom-20 {
            margin-bottom: 20px;
        }

        &.margin-top-20 {
            margin-top: 20px;
        }

        &.whitout-uppercase {
            text-transform: none;
        }
    }

    h3 {
        font-weight: bold;
        font-size: 50px;
        line-height: 60px;
        color: #20C9AD;
        text-align: center;
        margin-bottom: 60px;

        @media(max-width: 575px) {
            font-size: 30px;
            line-height: 50px;
        }
    }

    p {
        &.text-align-center {
            text-align: center;
        }

        &.margin-bottom-40 {
            margin-bottom: 40px;
        }

        @media(max-width: 575px) {
            text-align: justify;
        }
    }

    @media(max-width: 1199px) {
        padding: 0 150px;
    }

    @media(max-width: 767px) {
        padding: 0 50px;
    }

    @media(max-width: 575px) {
        padding: 0 20px;
    }
`;

export const FacilitiesSection = styled.section`
    margin-bottom: 150px;
    background-color: #20C9AD;
    width: 100%;
    padding: 45px 250px 280px 250px;
    border-radius: 25px;

    &.background-dark {
        background-color: #022842;
    }

    &.padding-bottom-default {
        padding-bottom: 45px;
    }

    h2 {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;

        &.text-align-left {
            text-align: left;
        }

        &.text-uppercase {
            text-transform: uppercase;
        }

        @media(max-width: 991px) {
            text-align: center !important;
        }
    }

    h3 {
        font-weight: bold;
        font-size: 50px;
        line-height: 60px;
        color: #FFF;
        text-align: center;
        margin-bottom: 60px;

        &.font-size-36 {
            font-size: 36px;
            line-height: 44px;
        }

        &.font-size-20 {
            font-size: 20px;
            line-height: 22px;
        }

        &.text-align-left {
            text-align: left;
        }

        &.margin-bottom-20 {
            margin-bottom: 20px;
        }

        @media(max-width: 991px) {
            text-align: center !important;
        }

        @media(max-width: 575px) {
            font-size: 40px;
            line-height: 50px;
        }
    }

    h4 {
        font-weight: bold;
        font-size: 20px;
        line-height: 22px;
        color: #FFF;
        text-align: center;
        margin-bottom: 30px;
    }

    ul {
        padding-left: 20px;
        margin-top: 15px;
    }

    p {
        @media(max-width: 575px) {
            text-align: justify;
        }
    }

    & .font-size-30-mobile {
        @media(max-width: 575px) {
            font-size: 30px;
        }
    }

    & .ant-row {
        @media(max-width: 1199px) {
            width: 100%;
        }
    }

    & .inovation-col {
        @media(max-width: 1199px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 30px;
        }
    }

    @media(max-width: 1199px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    @media(max-width: 991px) {
        padding: 45px 50px;
    }

    @media(max-width: 575px) {
        padding: 45px 20px;
    }
`;

export const SectionTitle = styled.h3`
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    color: #20C9AD;
    text-align: center;
    margin-bottom: 40px;

    &.font-size-25 {
        font-size: 25px;
    }

    &.margin-bottom {
        margin-bottom: 40px;
    }

    &.font-size-28-mobile {
        @media(max-width: 575px) {
            font-size: 28px !important;
            line-height: 38px !important;
        }
    }

    @media(max-width: 575px) {
        font-size: 32px !important;
        line-height: 40px !important;
    }
`;

export const SectionDescription = styled.div`
    & .text-bold {
        font-weight: bold;
    }

    &.margin-top {
        margin-top: 40px;
    }

    &.margin-bottom {
        margin-bottom: 40px;
    }

    &.color-white {
        color: #FFF;
    }

    &.xl-margin-bottom {
        @media(max-width: 1599px) {
            margin-bottom: 40px;
        }
    }

    @media(max-width: 575px) {
        text-align: center;
    }
`;

export const DescriptionImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        border-radius: 20px;

        &.w-100-mobile {
            @media(max-width: 991px) {
                width: 100%;
            }
        }
    }

    &.d-none-mobile {
        @media(max-width: 991px) {
            display: none;
        }
    }

    &.margin-bottom-mobile {
        @media(max-width: 1599px) {
            margin-bottom: 30px;
        }
    }

    &.margin-top {
        margin-top: 40px;
    }

    &.background-white {
        background-color: #FFF;
        padding: 35px;
        border-radius: 20px;
        max-width: 860px;
    }

    &.background-dark {
        background-color: #17283F;
        padding: 35px;
        border-radius: 20px;
    }

    &.position-absolute {
        position: relative;
        top: -350px;
    }
`;

export const ImageAndDescriptionBox = styled.div`
    & img {
        border-radius: 20px;
        width: 100%;
        object-fit: cover;
        height: 260px;
        margin-bottom: 15px;

        &.height-146 {
            height: 146px;
        }

        @media(max-width: 991px) {
            width: 70%;
        }

        @media(max-width: 575px) {
            width: 100%;
        }
    }

    & h2 {
        font-weight: bold;
        font-size: 20px;
        text-transform: uppercase;
        text-align: left;

        @media(max-width: 1199px) {
            text-align: center !important;
        }
    }

    & h4 {
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 10px;

        @media(max-width: 1199px) {
            text-align: center !important;
        }
    }

    & h6 {
        font-weight: bold;
        font-size: 14px;
        color: #20C9AD;
        text-transform: uppercase;

        @media(max-width: 1199px) {
            text-align: center !important;
        }
    }

    @media(max-width: 1199px) {
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const ProfessionalBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 75px;

    & img {
        margin-bottom: 20px;
        border-radius: 100%;
    }
`;

export const ProfessionalName = styled.h6`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
`;

export const ProfessionalArea = styled.h6`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    margin-bottom: 15px;
`;