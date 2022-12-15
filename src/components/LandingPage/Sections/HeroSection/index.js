import React, { useEffect, useState } from 'react';
import {
    Container,
    TitleSection,
    TitleText,
    TitleDescription,
    SocialLinksList,
    SocialLinkItem,
    Wave
} from './styles';
import Button from '../../Elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default () => {
    const [isTitleSectionVisible, setIsTitleSectionVisible] = useState(false);
    const [isSocialLinksVisible, setIsSocialLinksVisible] = useState(false);

    useEffect(() => {
        setIsTitleSectionVisible(true);
        setIsSocialLinksVisible(true);
    }, []);

    return (
        <Container>
            <TitleSection className={isTitleSectionVisible ? 'visible' : ''}>
                <TitleText>INSTITUTO DE CIÊNCIA E TECNOLOGIA FARMACÊUTICA</TitleText>
                <TitleDescription>
                    1º Laboratório de Pesquisa e Desenvolvimento em Plataforma Magistral
                </TitleDescription>
                <a href="/sobre">
                    <Button
                        text='saiba mais'
                        category='secondary'
                    />
                </a>
            </TitleSection>

            <SocialLinksList className={isSocialLinksVisible ? 'visible' : ''}>
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
            </SocialLinksList>

            <Wave />
        </Container>
    );
};