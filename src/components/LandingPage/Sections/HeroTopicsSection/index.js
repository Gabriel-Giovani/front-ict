import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import {
    Container,
    TopicsContainer,
    TopicItem
} from './styles';
import FacilitiesIcon from '../../../../assets/images/icons/facilities-icon.png';
import InstalationsIcon from '../../../../assets/images/icons/instalations-icon.png';
import TeamIcon from '../../../../assets/images/icons/team-icon.png';

export default () => {
    const [isContainerVisible, setIsContainerVisible] = useState(false);

    useEffect(() => {
        setIsContainerVisible(true);
    }, []);

    return (
        <Container>
            <TopicsContainer className={isContainerVisible ? 'visible' : ''}>
                <Row gutter={24} className='topics-row'>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                        <TopicItem>
                            <img src={FacilitiesIcon} />
                            <h5>Facilidades</h5>
                            <span>
                                Expertise em desenvolvimento e viabilização de projetos e produtos.
                            </span>
                        </TopicItem>
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                        <TopicItem>
                            <img src={InstalationsIcon} />
                            <h5>Modernas Instalações</h5>
                            <span>
                                Um Laboratório Farmacêutico que se destaca pela sua moderna estrutura, 
                                a frente do seu tempo.
                            </span>
                        </TopicItem>
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                        <TopicItem style={{ border: 'none' }}>
                            <img src={TeamIcon} />
                            <h5 className='font-size-30-mobile'>Equipe Multi-profissional</h5>
                            <span>
                                Profissionais com larga experiência na Produção de Produtos Estéreis e Injetáveis.
                            </span>
                        </TopicItem>
                    </Col>
                </Row>
            </TopicsContainer>
        </Container>
    );
};