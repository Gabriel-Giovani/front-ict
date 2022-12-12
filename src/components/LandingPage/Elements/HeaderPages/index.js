import React, { useEffect, useState } from 'react';
import { Container, PageTitle } from './styles';

export default (props) => {
    const { title, image } = props;

    const [isContainerVisible, setIsContainerVisible] = useState(false);

    useEffect(() => {
        setIsContainerVisible(true);
    }, []);

    return (
        <Container className={isContainerVisible ? 'visible' : ''}>
            <PageTitle>{ title }</PageTitle>
            <img src={image} />
        </Container>
    );
}