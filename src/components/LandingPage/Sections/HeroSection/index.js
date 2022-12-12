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
                <Button
                    text='saiba mais'
                    category='secondary'
                />
            </TitleSection>

            <SocialLinksList className={isSocialLinksVisible ? 'visible' : ''}>
                <a href="#">
                    <SocialLinkItem>
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialLinkItem>
                </a>
                
                <a href="#">
                    <SocialLinkItem>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </SocialLinkItem>
                </a>

                <a href="#">
                    <SocialLinkItem>
                        <FontAwesomeIcon icon={faYoutube} />
                    </SocialLinkItem>
                </a>
            </SocialLinksList>

            <Wave />
        </Container>
    );
};