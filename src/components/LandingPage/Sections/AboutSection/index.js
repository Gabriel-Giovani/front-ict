import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import {
    Container,
    TextContainer,
    Title,
    Subtitle,
    Description,
    ImageContainer
} from './styles';
import Button from '../../Elements/Button';
import AboutBanner from '../../../../assets/images/about-banner.png';
import { useScrollToTop } from '../../../../contexts/ScrollToTopContext';

export default () => {
    const scrollToTop = useScrollToTop();
    const { scrollToTopValue } = scrollToTop;

    const [isContainerVisible, setIsContainerVisible] = useState(false);

    useEffect(() => {
        if(window.screen.width < 500 || window.innerWidth < 500)
            setIsContainerVisible(true);

        else if(scrollToTopValue >= 700 && !isContainerVisible)
            setIsContainerVisible(true);
    });

    return (
        <Container className={isContainerVisible ? 'visible' : ''}>
            <Row gutter={24} className='about-row'>
                <Col xxl={12} xl={12} lg={24}>
                    <TextContainer>
                        <Title>Sobre o ICT</Title>
                        <Subtitle>Inteligência e Tecnologia a serviço da saúde</Subtitle>
                        <Description>
                            No mundo moderno, existe uma grande exigência de rapidez em todas as esferas, e para se obter 
                            um crescimento de mercado nesse mundo, é necessário o uso de uma palavra-chave: INOVACÃO.
                            Os Institutos de Ciência e Tecnologia (ICTs) são organizações que possuem como principal objetivo 
                            a criação e o incentivo a pesquisas científicas e tecnológicas de maneira ágil e objetiva. Eles têm 
                            por finalidade o desenvolvimento de soluções que respondam às necessidades de seus clientes e parceiros 
                            de maneira inovadora, aplicando conceitos de pesquisa e desenvolvimento com agilidade, através de uma equipe 
                            de multiprofissionais, contando com especialistas e consultores nas mais diversas áreas.
                        </Description>
                    </TextContainer>
                </Col>
                <Col xxl={12} xl={12} lg={24}>
                    <ImageContainer>
                        <img src={AboutBanner} className='w-100-mobile' />
                    </ImageContainer>
                </Col>

                <a href='/sobre'>
                    <Button
                        text='ver mais'
                        category='primary'
                    />
                </a>
            </Row>
        </Container>
    );
};