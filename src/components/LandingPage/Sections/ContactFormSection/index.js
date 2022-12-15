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
    InputMaskContainer
} from './styles';
import Button from '../../Elements/Button';
import { useScrollToTop } from '../../../../contexts/ScrollToTopContext';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import InputMask from 'react-input-mask';

export default () => {
    const scrollToTop = useScrollToTop();
    const { scrollToTopValue } = scrollToTop;

    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(true);

    // Form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fromMessage, setMessage] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // useEffect(() => {
    //     if(scrollToTopValue >= 3750) {
    //         if(!isDetailsVisible)
    //             setIsDetailsVisible(true);

    //         if(!isFormVisible)
    //             setIsFormVisible(true);
    //     }
    // });

    function resetForm() {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    function submitForm(e) {
        e.preventDefault();

        if(
            name === '' ||
            email === '' ||
            phone === '' ||
            fromMessage === ''
        ) {
            message.error('Preencha os campos corretamente!');
            return;
        }

        setButtonDisabled(true);

        const templateParams = {
            from_subject: 'Mensagem "fale conosco"',
            from_name: name,
            from_email: email,
            from_phone: phone,
            message: fromMessage
        };

        emailjs.send('service_1v8ay9s', 'template_ce7akdo', templateParams, 'tkquNlcD4l4l5HmyH')
        .then((response) => {
            message.success('Mensagem enviada com sucesso. Lhe retornaremos em breve!');
            resetForm();
            setButtonDisabled(false);
        })
        .catch((error) => {
            message.error('Houve um erro ao enviar sua mensagem. Tente novamente mais tarde!');
            setButtonDisabled(false);
        });
    }

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
                        <form id="contactForm">
                            <Input
                                placeholder="Nome"
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Input
                                placeholder="E-mail"
                                type="email"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <InputMaskContainer>
                                <InputMask
                                    className='input-mask'
                                    placeholder="Telefone"
                                    name='phone'
                                    mask='(99) 99999-9999'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </InputMaskContainer>
                            <TextArea
                                placeholder="Mensagem"
                                rows='8'
                                name='message'
                                value={fromMessage}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />

                            <Button
                                text='enviar'
                                category='primary'
                                disabled={buttonDisabled}
                                onClickFunction={submitForm}
                            />
                        </form>
                    </FormContainer>
                </Col>
            </Row>
        </Container>
    );
};