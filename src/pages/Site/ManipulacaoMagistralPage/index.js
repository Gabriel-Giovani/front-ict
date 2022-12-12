import React from 'react';
import {
    Container,
    Section,
    SectionTitle,
    SectionDescription,
    DescriptionImage,
    FacilitiesSection,
    ImageAndDescriptionBox
} from '../styles';
import {
    BuyAssetsBox,
    BuyAssetsTitle,
    AssetBox
} from './styles';
import ManipulacaoMagistralHeaderImage from '../../../assets/images/manipulacao-magistral-header-image.png';
import HeaderPages from '../../../components/LandingPage/Elements/HeaderPages';
import GraphicAboutImage from '../../../assets/images/grafico-about-image.png';
import { Col, Row } from 'antd';
import LaboratorioMagistralImage from '../../../assets/images/laboratorio-magistral-image.png';
import LaboratorioMagistralImage2 from '../../../assets/images/laboratorio-magistral-image-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faUserCheck, faFileLines, faFlask } from '@fortawesome/free-solid-svg-icons';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import ContactFormSection from '../../../components/LandingPage/Sections/ContactFormSection';

export default () => {
    return (
        <>
            <HeaderPages
                title='Manipulação Magistral'
                image={ManipulacaoMagistralHeaderImage}
            />

            <Container>
                <Section>
                    <SectionTitle>Uma Plataforma Magistral Inovadora</SectionTitle>
                    <SectionDescription>
                        <p>
                            O ICT Farmacêutica - Instituto de Ciência e Tecnologia Farmacêutica - surge como uma “Plataforma Magistral Inovadora”. 
                            Um conceito único no mercado brasileiro, alicerçado sob dois pilares principais:
                        </p>
                    </SectionDescription>

                    <DescriptionImage className='margin-top d-none-mobile'>
                        <img src={GraphicAboutImage} />
                    </DescriptionImage>

                    <SectionDescription className='margin-top'>
                        <p>
                            Como Laboratório Farmacêutico Especializado na Manipulação de Medicamentos Estéreis e Injetáveis, o ICT Farmacêutica procura alinhar 
                            a necessidade da pesquisa sobre tendências tecnológicas na área da saúde e os desejos de seus consumidores alvo, dentre os quais Hospitais, 
                            Clínicas, Serviços de Saúde, Institutos de Pesquisa, Pesquisadores independentes, Usuários finais, entre outros, com a urgência requerida pelo 
                            mercado atual para o atendimento de novas soluções.
                        </p>
                    </SectionDescription>
                </Section>

                <FacilitiesSection>
                    <h3 className='font-size-20'>Laboratório Magistral especializado na produção de medicamentos estéreis injetáveis</h3>

                    <SectionDescription>
                        <p>
                            O ICT Farmacêutica atua como Laboratório Farmacêutico Magistral Especializado na Manipulação de Medicamentos Estéreis 
                            e Injetáveis para as mais diversas áreas da saúde.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            O ICT Farmacêutica como plataforma magistral trabalha com foco nas seguintes frentes:
                        </p>
                    </SectionDescription>

                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={LaboratorioMagistralImage} />
                                <p>
                                    Atendimento direto às necessidades magistrais de Pacientes, Clínicas e Instituições Médico-hospitalares, 
                                    através da manipulação de receitas médicas.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={LaboratorioMagistralImage2} />
                                <p>
                                    Desenvolvimento de Produtos para necessidades Médico-hospitalares em Plataforma Magistral – 
                                    Clínicas Especializadas e Hospitais.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                </FacilitiesSection>

                <BuyAssetsBox>
                    <BuyAssetsTitle>Como comprar nossos ativos?</BuyAssetsTitle>

                    <Row gutter={24} className='assets-row'>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <AssetBox>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <h6>Contato</h6>
                                <p>
                                    Entre em contato conosco através dos nossos canais de atendimento. Telefone , e-mail, site e redes sociais.
                                </p>
                            </AssetBox>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <AssetBox>
                                <FontAwesomeIcon icon={faUserCheck} />
                                <h6>Cadastro</h6>
                                <p>
                                    Realize seu cadastro em nosso Setor Comercial. Vamos precisar dos seus documentos e registro do seu conselho.
                                </p>
                            </AssetBox>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <AssetBox>
                                <FontAwesomeIcon icon={faFileLines} />
                                <h6>Receita</h6>
                                <p>
                                    Envie sua receita própria dos ativos a serem manipulados. Não esqueça de colocar seu número de conelho e assinatura.
                                </p>
                            </AssetBox>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                            <AssetBox>
                                <FontAwesomeIcon icon={faFlask} />
                                <h6>Manipulação</h6>
                                <p>
                                    Aguarde o recebimento do seu pedido, conforme o prazo informado no ato da sua compra.
                                </p>
                            </AssetBox>
                        </Col>
                    </Row>
                </BuyAssetsBox>
            </Container>

            <MapSection />
            <ContactFormSection />
        </>
    );
};