import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import {
    Container,
    ContactDetailsContainer,
    Title,
    Subtitle,
    DetailName,
    DetailText,
    FormContainer,
    Input,
    TextArea,
} from './styles';
import Button from '../../Elements/Button';
import { useScrollToTop } from '../../../../contexts/ScrollToTopContext';

export default () => {
    const scrollToTop = useScrollToTop();
    const { scrollToTopValue } = scrollToTop;

    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(true);

    // useEffect(() => {
    //     if(scrollToTopValue >= 3750) {
    //         if(!isDetailsVisible)
    //             setIsDetailsVisible(true);

    //         if(!isFormVisible)
    //             setIsFormVisible(true);
    //     }
    // });

    return (
        <Container>
            <Row gutter={24}>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <ContactDetailsContainer className={isDetailsVisible ? 'visible' : ''}>
                        <Title>Fale Conosco</Title>
                        <Subtitle>Entre em contato com o ICT</Subtitle>

                        <DetailName>E-mail</DetailName>
                        <DetailText>contato@ictfarmaceutica.com.br</DetailText>

                        <DetailName>Telefone</DetailName>
                        <DetailText>(15) 3321.9409</DetailText>

                        <a href="https://api.whatsapp.com/send?phone=5515981111314" target="_blank">
                            <Button
                                text='chame no whatsapp'
                                category='whatsapp'
                                width='250px'
                            />
                        </a>

                        <DetailName className='with-margin'>Trabalhe Conosco</DetailName>
                        <DetailText className='without-margin'>Envie seu currículo para o e-mail</DetailText>
                        <DetailText className='font-bold'>vagas@ictfarmaceutica.com.br</DetailText>
                    </ContactDetailsContainer>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <FormContainer className={isDetailsVisible ? 'visible' : ''}>
                        <form>
                            <Input placeholder="Nome" />
                            <Input placeholder="E-mail" type="email" />
                            <Input placeholder="Telefone" />
                            <TextArea placeholder="Mensagem" rows='8' />

                            <Button
                                text='enviar'
                                category='primary'
                            />
                        </form>
                    </FormContainer>
                </Col>
            </Row>
        </Container>
    );
};