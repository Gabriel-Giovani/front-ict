import styled from "styled-components";

const handleCategoryButton = (category, hover) => {
    switch(category) {
        case 'primary':
            return `
                background-color: ${hover ? '#FFF' : '#20C9AD'};
                color: ${hover ? '#20C9AD' : '#FFF'};
                border: ${hover ? '2px solid #20C9AD' : 'none'};
                height: 40px;
            `;

        case 'secondary':
            return `
                background-color: ${hover ? '#000' : '#FFF'};
                color: ${hover ? '#FFF' : '#000'};
                height: 40px;
            `;

        case 'whatsapp':
            return `
                background-color: ${hover ? '#FFF' : '#20C9AD'};
                color: ${hover ? '#20C9AD' : '#FFF'};
                border: ${hover ? '2px solid #20C9AD' : 'none'};
                height: 54px;
            `;
    }
};

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width ? width : '160px' };
    border-radius: 50px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: background-color .3s ease, color .3s ease;
    
    ${({ category }) => handleCategoryButton(category) };

    & svg {
        font-size: 32px;
        margin-right: 10px;
    }

    &:disabled {
        background-color: #E6E6E6;
        color: #022842;
        border: 1px solid #E6E6E6;
        pointer-events: none;
    }

    &:hover {
        ${({ category }) => handleCategoryButton(category, true) };
    }

`;