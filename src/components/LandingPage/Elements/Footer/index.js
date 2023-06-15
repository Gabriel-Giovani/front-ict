import { Col, Row } from 'antd';
import React from 'react';
import {
    Container,
    SocialLinksContainer,
    SocialLinkItem,
    ButtonGroup
} from './styles';
import Logo from '../../../../assets/images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button';

export default () => {
    return (
        <Container>
            <Row gutter={23}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={24} className='justify-start logo-col'>
                    <img src={Logo} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={24} className='justify-start logo-col'
                    style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}
                >
                    <p>Av. Ireno da Silva Venâncio, 199 - Protestantes</p>
                    <p>Votorantim - SP</p>
                    <p>CNPJ: 41.604.536/0001-01 - ICT FARMACÊUTICA LTDA</p>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={24}>
                    <SocialLinksContainer>
                        <a href="https://www.instagram.com/ictfarmaceutica/" target='_blank'>
                            <SocialLinkItem>
                                <FontAwesomeIcon icon={faInstagram} />
                            </SocialLinkItem>
                        </a>

                        <a href="https://www.facebook.com/ictfarmaceutica" target='_blank'>
                            <SocialLinkItem>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </SocialLinkItem>
                        </a>

                        <a href="#" target='_blank'>
                            <SocialLinkItem>
                                <FontAwesomeIcon icon={faYoutube} />
                            </SocialLinkItem>
                        </a>
                    </SocialLinksContainer>
                </Col>
                {/* <Col span={8}>
                    <ButtonGroup>
                        <Button
                            text='Área do cliente'
                            category='primary'
                        />

                        <Button
                            text='Login'
                            category='secondary'
                        />
                    </ButtonGroup>
                </Col> */}
            </Row>
        </Container>
    );
};