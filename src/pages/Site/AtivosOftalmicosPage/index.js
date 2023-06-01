import React from 'react';
import {
    HeaderAtivosOftalmicos,
    PageTitle,
    TitleAtivos,
    TitleOftalmicos,
    Paragraph,
    InjetaveisSection,
    UsoTopicoSection,
    ContainerLogoAtivoOftalmico
} from './styles';
import {
    Container,
    Section,
} from '../styles';
import { Col, Row } from 'antd';
import Button from '../../../components/LandingPage/Elements/Button';
import HeaderAtivosOftalmicosImage from '../../../assets/images/header-ativos-oftalmicos.png';
import HeaderAtivosOftalmicosMobileImage from '../../../assets/images/header-ativos-oftalmicos-mobile.png';
import AmpolaImage from '../../../assets/images/ampola-image.png';
import ColirioImage from '../../../assets/images/colirio.png';
import TabelaAmpolaImage from '../../../assets/images/tabela-ampola.png';
import TabelaColirioImage from '../../../assets/images/tabela-colirio.png';
import LogoAtivoOftalmico from '../../../assets/images/logo-ativo-oftalmico.png';

export default () => {
    return (
        <>
            <HeaderAtivosOftalmicos>
                <img className='header-desktop' src={HeaderAtivosOftalmicosImage} />
                <img className='header-mobile' src={HeaderAtivosOftalmicosMobileImage} />
            </HeaderAtivosOftalmicos>

            <Container>
                <Section style={{
                    position: 'relative',
                    top: '-135px',
                    marginBottom: 0,
                    padding: '0 5%'
                }}>
                    <PageTitle>
                        <TitleAtivos>Ativos</TitleAtivos>
                        <TitleOftalmicos>Oftálmicos</TitleOftalmicos>
                    </PageTitle>

                    <ContainerLogoAtivoOftalmico>
                        <img src={LogoAtivoOftalmico} />
                    </ContainerLogoAtivoOftalmico>

                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur.
                    </Paragraph>

                    <InjetaveisSection>
                        <Row gutter={24}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <img className='img-objeto' src={AmpolaImage} style={{ width: '130%' }} />
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <img className='img-tabela' src={TabelaAmpolaImage} />
                            </Col>
                        </Row>
                    </InjetaveisSection>

                    <UsoTopicoSection>
                        <div className='row-desktop'>
                            <Row gutter={24}>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <img className='img-tabela' src={TabelaColirioImage} />
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <img className='img-objeto' src={ColirioImage} style={{ width: '130%' }} />
                                </Col>
                            </Row>
                        </div>
                        <div className='row-mobile'>
                            <Row gutter={24}>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <img className='img-objeto' src={ColirioImage} style={{ width: '130%' }} />
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <img className='img-tabela' src={TabelaColirioImage} />
                                </Col>
                            </Row>
                        </div>
                    </UsoTopicoSection>

                    <Paragraph style={{ textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur.
                    </Paragraph>

                    <a
                        href="#"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '60px'
                        }}
                    >
                        <Button
                            text='FALE COM UM REPRESENTANTE'
                            category='primary'
                            width='745px'
                        />
                    </a>
                </Section>
            </Container>
        </>
    );
};