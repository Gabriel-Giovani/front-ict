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
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24} className='justify-start logo-col'>
                    <img src={Logo} />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
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