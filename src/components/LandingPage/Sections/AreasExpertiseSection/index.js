import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import {
    Container,
    Title,
    Subtitle,
    Description,
    AreasContainer,
    Area,
    AreaText,
    AreaTitle,
    AreaDescription
} from './styles';
import Button from '../../Elements/Button';
import AreaOrtomolecularImage from '../../../../assets/images/area-ortomolecular.png';
import AreaEsteticaImage from '../../../../assets/images/area-medicina-estetica.png';
import AreaHospitalarImage from '../../../../assets/images/area-medicina-hospitalar.png';
import AreaEsportivaImage from '../../../../assets/images/area-medicina-esportiva.png';
import { useScrollToTop } from '../../../../contexts/ScrollToTopContext';

export default () => {
    const scrollToTop = useScrollToTop();
    const { scrollToTopValue } = scrollToTop;

    const [isContainerVisible, setIsContainerVisible] = useState(false);

    useEffect(() => {
        if(
            ((window.innerWidth > 500 && scrollToTopValue >= 1600) || (window.innerWidth <= 500 && scrollToTopValue >= 2300)) &&
            !isContainerVisible
        )
            setIsContainerVisible(true);
    });

    return (
        <Container className={isContainerVisible ? 'visible' : ''}>
            <Title>Serviços</Title>
            <Subtitle>Nossas áreas de atuação</Subtitle>
            <Description>
                Com foco em desenvolvimento e manipulação, somos especializados em múltiplas 
                áreas, trabalhando dentro das seguintes unidades de negócio:
            </Description>

            <AreasContainer>
                <Row gutter={24} className='area-row'>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24} className='area-col'>
                        <Area>
                            <img src={AreaOrtomolecularImage} />

                            <AreaText>
                                <AreaTitle>Medicina Integrativa / Ortomolecular</AreaTitle>
                                <AreaDescription>
                                    Produtos que apoiam a relação integrativa entre o 
                                    médico e o paciente para o cuidado da saúde.
                                </AreaDescription>
                            </AreaText>
                        </Area>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24} className='area-col'>
                        <Area>
                            <img src={AreaEsteticaImage} />

                            <AreaText>
                                <AreaTitle>Medicina Estética</AreaTitle>
                                <AreaDescription>
                                    Produtos que apoiam a relação integrativa entre o 
                                    médico e o paciente para o cuidado da saúde.
                                </AreaDescription>
                            </AreaText>
                        </Area>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24} className='area-col'>
                        <Area>
                            <img src={AreaHospitalarImage} />

                            <AreaText>
                                <AreaTitle>Medicina Hospitalar</AreaTitle>
                                <AreaDescription>
                                    Produtos que apoiam a relação integrativa entre o 
                                    médico e o paciente para o cuidado da saúde.
                                </AreaDescription>
                            </AreaText>
                        </Area>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24} className='area-col'>
                        <Area>
                            <img src={AreaEsportivaImage} />

                            <AreaText>
                                <AreaTitle>Medicina Esportiva</AreaTitle>
                                <AreaDescription>
                                    Produtos que apoiam a relação integrativa entre o 
                                    médico e o paciente para o cuidado da saúde.
                                </AreaDescription>
                            </AreaText>
                        </Area>
                    </Col>
                </Row>
            </AreasContainer>

            <Button
                text='Conheça todas as áreas'
                category='primary'
                width='264px'
            />
        </Container>
    );
};