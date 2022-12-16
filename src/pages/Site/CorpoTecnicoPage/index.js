import React from 'react';
import {
    Container,
    ProfessionalList,
    ProfessionalImageBox,
    ProfessionalDetails
} from './styles';
import AboutImageHeader from '../../../assets/images/about-header-image.png';
import HeaderPages from '../../../components/LandingPage/Elements/HeaderPages';
import { Row, Col } from 'antd';
import AiltonImage from '../../../assets/images/ailton-detail-image.png';
import AlexandreImage from '../../../assets/images/alexandre-detail-image.png';
import AndersonImage from '../../../assets/images/anderson-detail-image.png';
import AndreImage from '../../../assets/images/andre-detail-image.png';
import DianaImage from '../../../assets/images/diana-detail-image.png';
import MarcosImage from '../../../assets/images/marcos-detail-image.png';
import MarcoViniciusImage from '../../../assets/images/marco-vinicius-detail-image.png';
import RegianeImage from '../../../assets/images/regiane-detail-image.png';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import ContactFormSection from '../../../components/LandingPage/Sections/ContactFormSection';

export default () => {
    return (
        <>
            <HeaderPages
                title='Sobre o ICT'
                image={AboutImageHeader}
            />

            <Container>
                <ProfessionalList>
                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={AiltonImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Ailton Granja</h3>
                                <h5>Químico</h5>
                                <p>
                                    Formado em Química (UFSCAR) com mestrado em Ciência dos Materiais (UNISO) ele é 
                                    responsável pelo setor de Controle de Qualidade na ICT Farmacêutica. Com vasta 
                                    experiência em gestão e controle de qualidade, auditoria e consultoria ele se 
                                    torna a peça chave no setor de Qualidade.
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={AlexandreImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Dr. Alexandre Winarski</h3>
                                <h5>Farmacêutico</h5>
                                <p>
                                    Formado em Farmácia com Pós Graduação em Gestão Empresarial e Lean Six Sigma na Universidade 
                                    Paulista - UNIP. Possui 24 anos de experiência com empresas farmacêuticas com foco em Desenvolvimento 
                                    de Novos Produtos, Produção Industrial e Produção de Injetáveis.
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={AndersonImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Anderson Begliomini </h3>
                                <h5>Comercial/Marketing</h5>
                                <p>
                                    Formado em Linguagem e Comunicação em Marketing e mais de 20 anos de networking na Indústria 
                                    Farmacêutica com foco no planejamento e disciplina no trabalho de forma ética. Prezando pelo 
                                    comprometimento e resiliência com aprendizado orientado para resultados.
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={AndreImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>André Marcondes</h3>
                                <h5>Sócio</h5>
                                <p>
                                    Diretor de empresas farmacêuticas, com mais de 30 anos de experiência no setor. Possui carreira profissional 
                                    em empresas do segmento de medicamentos de uso humano e veterinário, em posições de liderança e gerenciamento. 
                                    Com experiência em estruturação de equipes de trabalho em produção e controles de processo de linha de produção. 
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={DianaImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Diana Chiozzi</h3>
                                <h5>Atendente de Prescrição Magistral</h5>
                                <p>
                                    Responsável pela realização do processo de faturamento de pedido. Desde a recepção do receituário até o envio para os 
                                    setores responsáveis pela produção e liberação. Realiza o atendimento telefônico voltado aos clientes externos e 
                                    suporte comercial. 
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={MarcosImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Marcos Sanches</h3>
                                <h5>Sócio</h5>
                                <p>
                                    Diretor Comercial com experiência de 20 anos em empresas de segmento oftalmológico com foco em cirurgias oculares, 
                                    lentes intraoculares, lentes de contato e instrumentação cirúrgica. Responsável pela criação e supervisionamento de 
                                    fluxos operacionais de média e grande escala e processos gerenciais. Expert em ações e negociações comerciais com 
                                    clientes B2B e B2C.
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={MarcoViniciusImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Marco Vinicius Chaud</h3>
                                <h5>Consultor Externo</h5>
                                <p>
                                    Graduado em Ciências Farmacêuticas pela Universidade de São Paulo Ribeirão Preto (1980), possui mestrado em Fármaco e Medicamentos pela 
                                    Universidade de São Paulo Ribeirão Preto (1993), doutorado em Fármacos e Medicamentos pela Universidade de São Paulo (1999) e com pós 
                                    doutorado pela Universidade de São Paulo (2002). Experiência de ensino em Nanotecnologia, Farmacotécnica, Tecnologia Farmacêutica, Nanotecnologia, 
                                    Tecnologia de Produção de Vacinas. Sócio Fundador da Sociedade Brasileira de Ciências Farmacêuticas, atualmente Associação Brasileira de Ciências 
                                    Farmacêutica. 
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalImageBox>
                                <img src={RegianeImage} />
                            </ProfessionalImageBox>
                        </Col>
                        <Col xxl={16} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalDetails>
                                <h3>Dra. Regiane Santo</h3>
                                <h5>Farmacêutica</h5>
                                <p>
                                    Formada em Farmácia com pós-graduação em Produção Industrial Farmacêutica e Farmácia Clínica. Ampla experiência na área limpa, manipulação de 
                                    produtos estéreis, Nutrição Parental e Farmácia Clínica Hospitalar. Já realizou acompanhamentos de visitas técnicas: Anvisa, CRF, ONA, ISO 9001.
                                </p>
                            </ProfessionalDetails>
                        </Col>
                    </Row>
                </ProfessionalList>
            </Container>

            <div style={{ marginTop: '-300px' }}>
                <MapSection />
            </div>
            <ContactFormSection />
        </>
    );
};