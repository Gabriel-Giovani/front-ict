import React, { useEffect, useState } from 'react';
import {
    Container,
    Item,
    List,
    ButtonGroup,
    RetiringMenuButton,
    RetiringMenuButtonLine,
    MenuDropdown,
    ListDropdown
} from './styles';
import Logo from '../../../../assets/images/logos/logo.png';
import Button from '../Button';
import { useScrollToTop } from '../../../../contexts/ScrollToTopContext';
import { Link } from 'react-router-dom';

export default () => {
    const scrollToTop = useScrollToTop();
    const { scrollToTopValue } = scrollToTop;

    const [scrolled, setScrolled] = useState(false);
    const [visibleMenuDropdown, setVisibleMenuDropdown] = useState(false);

    useEffect(() => {
        handleHeaderStyleWhenScroll();
    });

    function handleHeaderStyleWhenScroll() {
        (scrollToTopValue > 120 || visibleMenuDropdown) ? setScrolled(true) : setScrolled(false);
    }

    return (
        <Container className={scrolled ? 'scrolled' : ''}>
            <a href='/'>
                <img src={Logo} />
            </a>

            <List>
                <a href='/sobre'><Item>Sobre o ICT</Item></a>
                <a href='/manipulacao-magistral'><Item>Manipulação Magistral</Item></a>
                <a href='/pesquisa-desenvolvimento'><Item>Pesquisa e Desenvolvimento</Item></a>
                <a href='/areas-atuacao'><Item>Áreas de Atuação</Item></a>
                <a href='/contato'><Item>Contato</Item></a>
            </List>

            <RetiringMenuButton onClick={() => {
                setVisibleMenuDropdown(!visibleMenuDropdown);
                setScrolled(!scrolled);
            }}>
                <RetiringMenuButtonLine />
                <RetiringMenuButtonLine />
                <RetiringMenuButtonLine />
            </RetiringMenuButton>

            {
                visibleMenuDropdown &&
                    <MenuDropdown className={visibleMenuDropdown ? '-visible' : ''}>
                        <ListDropdown>
                            <a href='/sobre'><Item>Sobre o ICT</Item></a>
                            <a href='/manipulacao-magistral'><Item>Manipulação Magistral</Item></a>
                            <a href='/pesquisa-desenvolvimento'><Item>Pesquisa e Desenvolvimento</Item></a>
                            <a href='/areas-atuacao'><Item>Áreas de Atuação</Item></a>
                            <a href='/contato'><Item>Contato</Item></a>
                        </ListDropdown>
                    </MenuDropdown>
            }

            {/* <ButtonGroup>
                <Button
                    text='Área do cliente'
                    category='primary'
                />

                <Button
                    text='Login'
                    category='secondary'
                />
            </ButtonGroup> */}
        </Container>
    );
};