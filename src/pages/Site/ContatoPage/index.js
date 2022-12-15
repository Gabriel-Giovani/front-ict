import React, { useEffect, useState } from 'react';
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
    TextArea,
    InputMaskContainer,
    InputFileContainer
} from './styles';
import { Col, message, Row } from 'antd';
import TrabalheConoscoImage from '../../../assets/images/trabalhe-conosco-image.png';
import Button from '../../../components/LandingPage/Elements/Button';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const [contactName, setContactName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactFromMessage, setContactFromMessage] = useState('');
    const [contactButtonDisabled, setContactButtonDisabled] = useState(false);

    // const [workName, setWorkName] = useState('');
    // const [workPhone, setWorkPhone] = useState('');
    // const [workEmail, setWorkEmail] = useState('');
    // const [workCurriculo, setWorkCurriculo] = useState('');
    // const [workArea, setWorkArea] = useState('');
    // const [workFromMessage, setWorkFromMessage] = useState('');
    // const [workButtonDisabled, setWorkButtonDisabled] = useState(false);

    // function handleCurriculo(e) {
    //     const labelCurriculoInput = document.querySelector('.curriculo-label');
    //     const fileName = e.target.files[0].name;
    //     const file = e.target.files[0];

    //     labelCurriculoInput.innerText = fileName;
    //     setWorkCurriculo(file);
    // }

    function resetContactForm() {
        setContactName('');
        setContactEmail('');
        setContactPhone('');
        setContactFromMessage('');
    }

    // function resetWorkForm() {
    //     setWorkName('');
    //     setWorkEmail('');
    //     setWorkPhone('');
    //     setWorkArea('');
    //     setWorkCurriculo('');
    //     setWorkFromMessage('');
    // }

    function submitContactForm(e) {
        e.preventDefault();

        if(
            contactName === '' ||
            contactPhone === '' ||
            contactEmail === '' ||
            contactFromMessage === ''
        ) {
            message.error('Preencha os campos corretamente!');
            return;
        }

        setContactButtonDisabled(true);

        const templateParams = {
            from_subject: 'Mensagem "fale conosco"',
            from_name: contactName,
            from_email: contactEmail,
            from_phone: contactPhone,
            message: contactFromMessage
        };

        emailjs.send('service_1v8ay9s', 'template_ce7akdo', templateParams, 'tkquNlcD4l4l5HmyH')
        .then((response) => {
            message.success('Mensagem enviada com sucesso. Lhe retornaremos em breve!');
            resetContactForm();
            setContactButtonDisabled(false);
        })
        .catch((error) => {
            message.error('Houve um erro ao enviar sua mensagem. Tente novamente mais tarde!');
            setContactButtonDisabled(false);
        });
    }

    // function submitWorktForm(e) {
    //     e.preventDefault();

    //     if(
    //         workName === '' ||
    //         workPhone === '' ||
    //         workEmail === '' ||
    //         workCurriculo === '' ||
    //         workArea === '' ||
    //         workFromMessage === ''
    //     ) {
    //         message.error('Preencha os campos corretamente!');
    //         return;
    //     }

    //     setWorkButtonDisabled(true);

    //     const templateParams = {
    //         from_subject: `Currículo: ${workArea}`,
    //         from_name: workName,
    //         from_email: workEmail,
    //         from_phone: workPhone,
    //         message: workFromMessage
    //     };

    //     emailjs.sendForm('service_1v8ay9s', 'template_ce7akdo', templateParams, 'tkquNlcD4l4l5HmyH')
    //     .then((response) => {
    //         message.success('Mensagem enviada com sucesso. Lhe retornaremos em breve!');
    //         resetWorkForm();
    //         setWorkButtonDisabled(false);
    //     })
    //     .catch((error) => {
    //         message.error('Houve um erro ao enviar sua mensagem. Tente novamente mais tarde!');
    //         setWorkButtonDisabled(false);
    //     });
    // }

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
                                <Input
                                    placeholder='NOME'
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                                <InputMaskContainer>
                                    <InputMask
                                        className='input-mask'
                                        placeholder='TELEFONE'
                                        mask='(99) 99999-9999'
                                        value={contactPhone}
                                        onChange={(e) => setContactPhone(e.target.value)}
                                        required
                                    />
                                </InputMaskContainer>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Input
                                    placeholder='E-MAIL'
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                />
                            </Col>
                        </Row>
                        {/* <Row gutter={24}>
                            <Col span={24}>
                                <Select>
                                    <option selected>Selecione uma área</option>
                                </Select>
                            </Col>
                        </Row> */}
                        <Row gutter={24} style={{ marginTop: '12px' }}>
                            <Col span={24}>
                                <TextArea
                                    placeholder='MENSAGEM'
                                    rows='10'
                                    value={contactFromMessage}
                                    onChange={(e) => setContactFromMessage(e.target.value)}
                                ></TextArea>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Button
                                    text='enviar'
                                    category='primary'
                                    disabled={contactButtonDisabled}
                                    onClickFunction={submitContactForm}
                                />
                            </Col>
                        </Row>
                    </FormContact>
                </Section>

                {/* <Section>
                    <DescriptionImage>
                        <img src={TrabalheConoscoImage} className='w-100-mobile' />
                    </DescriptionImage>

                    <FormContact>
                        <Row gutter={24}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} className='input-col-mobile'>
                                <Input
                                    placeholder='NOME'
                                    value={workName}
                                    onChange={(e) => setWorkName(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                                <InputMaskContainer>
                                    <InputMask
                                        className='input-mask'
                                        placeholder='TELEFONE'
                                        mask='(99) 99999-9999'
                                        value={workPhone}
                                        onChange={(e) => setWorkPhone(e.target.value)}
                                        required
                                    />
                                </InputMaskContainer>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Input
                                    placeholder='E-MAIL'
                                    value={workEmail}
                                    onChange={(e) => setWorkEmail(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <InputFileContainer>
                                    <label for='curriculo'>
                                        <span className='curriculo-label'>CURRÍCULO</span>
                                        <FontAwesomeIcon icon={faUpload} />
                                    </label>
                                    <Input
                                        id='curriculo'
                                        placeholder='CURRÍCULO'
                                        type='file'
                                        accept='.pdf, .doc, .docx'
                                        onChange={handleCurriculo}
                                    />
                                </InputFileContainer>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Select
                                    value={workArea}
                                    onChange={(e) => setWorkArea(e.target.value)}
                                >
                                    <option selected value=''>Selecione uma área</option>
                                    <option value='Facilities'>Facilities</option>
                                    <option value='Tecnologia'>Tecnologia</option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <TextArea
                                    placeholder='MENSAGEM'
                                    rows='10'
                                    value={workFromMessage}
                                    onChange={(e) => setWorkFromMessage(e.target.value)}
                                ></TextArea>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Button
                                    text='enviar'
                                    category='primary'
                                    disabled={workButtonDisabled}
                                    onClickFunction={submitWorktForm}
                                />
                            </Col>
                        </Row>
                    </FormContact>
                </Section> */}
            </Container>

            <MapSection />
        </>
    );
};