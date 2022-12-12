import styled from "styled-components";

export const Container = styled.nav`
    position: fixed; // Trocar por position: sticky
    top: 0;
    width: 100%;
    height: 120px;
    padding: 50px 100px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 99;
    transition: background-color .3s ease;
    
    &.scrolled {
        background-color: #022842;
    }

    @media(max-width: 991px) {
        justify-content: space-between;
    }

    @media(max-width: 575px) {
        padding: 50px;

        & img {
            width: 80px;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 36px;

    @media(max-width: 991px) {
        display: none;
    }
`;

export const Item = styled.li`
    color: #FFF;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
`;

export const RetiringMenuButton = styled.div`
    display: none;
    position: absolute;
    right: 40px;
    cursor: pointer;

    @media(max-width: 991px) {
        display: block;
    }
`;

export const RetiringMenuButtonLine = styled.div`
    width: 30px;
    height: 4px;
    background-color: #20C9AD;
    margin-bottom: 4px;
`;

export const MenuDropdown = styled.div`
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: visibility .3s ease, opacity .3s ease;

    &.-visible {
        visibility: visible;
        opacity: 1;
    }
`;

export const ListDropdown = styled.ul`
    background-color: #022842;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 9;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    gap: 40px;
    margin: 0;
`;