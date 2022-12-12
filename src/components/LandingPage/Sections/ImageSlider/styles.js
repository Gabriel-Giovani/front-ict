import styled from "styled-components";

export const Container = styled.div`
    margin-top: 110px;
    padding: 0 270px;

    @media(max-width: 1429px) {
        padding: 0 150px;
    }

    @media(max-width: 1199px) {
        padding: 0 50px;
    }

    @media(max-width: 991px) {
        padding: 0;
    }

    & .swiper {
        max-width: 900px;

        & .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .swiper-button-next, & .swiper-button-prev {
            color: #20C9AD;
            font-weight: bold;
        }

        @media(max-width: 1429px) {
            max-width: 100%;
        }
    }
`;