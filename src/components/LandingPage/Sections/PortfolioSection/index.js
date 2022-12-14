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
                            <Title>Portf??lio</Title>
                            <Subtitle>Qualidade Certificada</Subtitle>
                            <Description>
                                Por meio do desenvolvimento de solu????es em um ambiente que inspira criatividade e tecnologia, o maior prop??sito do 
                                ICT Farmac??utica se sustenta na entrega de inova????es disruptivas. 
                            </Description>
                            {/* <a href="https://drive.google.com/file/d/1ta0Sh9oSm2oAzry2qJWMDohVHl9TlWBB/view?usp=share_link" target="_blank">
                                <Button
                                    text='veja nosso portf??lio' 
                                    category='primary'
                                />
                            </a> */}
                        </TextContainer>
                    </Col>
                </Row>
            </Container>

            {/* TODO - Descomentar quando houver ??reas internas do site */}
            {/* <AreasContainer className={isAreasBoxVisible ? 'visible' : ''}>
            <Box>
                <Row gutter={24}>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className='area-col'>
                        <Area className='bordered'>
                            <AreaTitle>??rea do Prescritor</AreaTitle>
                            <AreaDescription>
                                Esse espa??o foi criado especialmente para facilitar o seu acesso ?? informa????es e compartilhar solu????es que 
                                auxiliem a sua Pr??tica Cl??nica.
                            </AreaDescription>
                            <Button
                                text='acesse aqui'
                                category='secondary'
                            />
                        </Area>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className='area-col'>
                        <Area>
                            <AreaTitle>??rea do Pesquisador</AreaTitle>
                            <AreaDescription>
                                Esse espa??o foi criado especialmente para facilitar o seu acesso ?? informa????es e compartilhar solu????es que 
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