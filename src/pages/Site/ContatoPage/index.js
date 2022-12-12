import React from 'react';
import HeaderPages from '../../../components/LandingPage/Elements/HeaderPages';
import ContactHeaderImage from '../../../assets/images/contact-header-image.png';
import {
    Container,
    DescriptionImage,
    Section,
    SectionDescription,
} from '../styles';
import {
    FormContact,
    Input,
    Select,
    TextArea
} from './styles';
import { Col, Row } from 'antd';
import TrabalheConoscoImage from '../../../assets/images/trabalhe-conosco-image.png';
import Button from '../../../components/LandingPage/Elements/Button';
import MapSection from '../../../components/LandingPage/Sections/MapSection';

export default () => {
    return (
        <>
            <HeaderPages
                title='Fale Conosco'
                image={ContactHeaderImage}
            />

            <Container>
                <Section>
                    <SectionDescription>
                        <p>
                            Entre em contato com nossa equipe de atendimento e tire suas dúvidas, envie sugestões ou faça 
                            sua reclamação utilizando nosso formulário.
                        </p>
                    </SectionDescription>

                    <FormContact>
                        <Row gutter={24}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} className='input-col-mobile'>
                                <Input placeholder='NOME' />
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                                <Input placeholder='TELEFONE' />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Input placeholder='E-MAIL' />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Input placeholder='ASSUNTO' />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Select>
                                    <option selected>Selecione uma área</option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <TextArea placeholder='MENSAGEM' rows='10'></TextArea>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Button
                                    text='enviar'
                                    category='primary'
                                />
                            </Col>
                        </Row>
                    </FormContact>
                </Section>

                <Section>
                    <DescriptionImage>
                        <img src={TrabalheConoscoImage} className='w-100-mobile' />
                    </DescriptionImage>

                    <FormContact>
                        <Row gutter={24}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} className='input-col-mobile'>
                                <Input placeholder='NOME' />
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                                <Input placeholder='TELEFONE' />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Input placeholder='E-MAIL' />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Input placeholder='CURRÍCULO' />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Select>
                                    <option selected>Selecione uma área</option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <TextArea placeholder='MENSAGEM' rows='10'></TextArea>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Button
                                    text='enviar'
                                    category='primary'
                                />
                            </Col>
                        </Row>
                    </FormContact>
                </Section>
            </Container>

            <MapSection />
        </>
    );
};