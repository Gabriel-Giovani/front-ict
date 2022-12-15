import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import {
    Container,
    ImageContainer,
    TextContainer,
    Title,
    Subtitle,
    Description,
    AreasContainer,
    Area,
    Box,
    AreaTitle,
    AreaDescription
} from './styles';
import FrascosAmpolasImage from '../../../../assets/images/frascos-ampolas.png';
import SoroImage from '../../../../assets/images/soro.png';
import Button from '../../Elements/Button';
import { useScrollToTop } from '../../../../contexts/ScrollToTopContext';

export default () => {
    const scrollToTop = useScrollToTop();
    const { scrollToTopValue } = scrollToTop;

    const [isContainerVisible, setIsContainerVisible] = useState(false);
    const [isImageBoxVisible, setIsImageBoxVisible] = useState(false);
    const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
    const [isAreasBoxVisible, setIsAreasBoxVisible] = useState(false);

    useEffect(() => {
        if(window.screen.width < 500 || window.innerWidth < 500) {
            setIsContainerVisible(true);
            setIsImageBoxVisible(true);
            setIsTextBoxVisible(true);
            setIsAreasBoxVisible(true);
        }

        else {
            if(scrollToTopValue >= 2150 && !isContainerVisible)
                setIsContainerVisible(true);
    
            if(scrollToTopValue >= 2450) {
                if(!isImageBoxVisible)
                    setIsImageBoxVisible(true);
    
                if(!isTextBoxVisible)
                    setIsTextBoxVisible(true);
            }
    
            if(scrollToTopValue >= 2450 && !isAreasBoxVisible)
                setIsAreasBoxVisible(true);
        }
    });

    return (
        <>
            <Container className={isContainerVisible ? 'visible' : ''} style={{ marginBottom: '40px' }}>
                <Row gutter={24} className='portfolio-row'>
                    <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                        <ImageContainer className={isImageBoxVisible ? 'visible' : ''}>
                            <img src={FrascosAmpolasImage} className='frascos-ampolas-image' />
                            <img src={SoroImage} className='soro-image' />
                        </ImageContainer>
                    </Col>
                    <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                        <TextContainer className={isTextBoxVisible ? 'visible' : ''}>
                            <Title>Portfólio</Title>
                            <Subtitle>Qualidade Certificada</Subtitle>
                            <Description>
                                Por meio do desenvolvimento de soluções em um ambiente que inspira criatividade e tecnologia, o maior propósito do 
                                ICT Farmacêutica se sustenta na entrega de inovações disruptivas. 
                            </Description>
                            {/* <a href="https://drive.google.com/file/d/1ta0Sh9oSm2oAzry2qJWMDohVHl9TlWBB/view?usp=share_link" target="_blank">
                                <Button
                                    text='veja nosso portfólio' 
                                    category='primary'
                                />
                            </a> */}
                        </TextContainer>
                    </Col>
                </Row>
            </Container>

            {/* TODO - Descomentar quando houver áreas internas do site */}
            {/* <AreasContainer className={isAreasBoxVisible ? 'visible' : ''}>
            <Box>
                <Row gutter={24}>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className='area-col'>
                        <Area className='bordered'>
                            <AreaTitle>Área do Prescritor</AreaTitle>
                            <AreaDescription>
                                Esse espaço foi criado especialmente para facilitar o seu acesso à informações e compartilhar soluções que 
                                auxiliem a sua Prática Clínica.
                            </AreaDescription>
                            <Button
                                text='acesse aqui'
                                category='secondary'
                            />
                        </Area>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className='area-col'>
                        <Area>
                            <AreaTitle>Área do Pesquisador</AreaTitle>
                            <AreaDescription>
                                Esse espaço foi criado especialmente para facilitar o seu acesso à informações e compartilhar soluções que 
                                auxiliem a sua Pesquisa e Desenvolvimento (P&D).
                            </AreaDescription>
                            <Button
                                text='acesse aqui'
                                category='secondary'
                            />
                        </Area>
                    </Col>
                </Row>
            </Box>
            </AreasContainer> */}
        </>
    );
};