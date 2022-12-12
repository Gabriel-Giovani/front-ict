import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

// Components
import HeaderMenu from '../components/LandingPage/Elements/HeaderMenu';
import Footer from '../components/LandingPage/Elements/Footer';

// Pages
import HomeLandingPage from './Site/HomeLandingPage';
import AboutPage from './Site/AboutPage';
import ManipulacaoMagistralPage from './Site/ManipulacaoMagistralPage';
import PesquisaDesenvolvimentoPage from './Site/PesquisaDesenvolvimentoPage';
import AreasAtuacaoPage from './Site/AreasAtuacaoPage';
import ContatoPage from './Site/ContatoPage';

// Contexts
import { ScrollToTopProvider } from '../contexts/ScrollToTopContext';

const Routes = () => {
    return (
        <BrowserRouter forceRefresh={false}>
            <Switch>
                <ScrollToTopProvider>
                    <HeaderMenu />
                    <Route exact path='/' component={HomeLandingPage} />
                    <Route exact path='/sobre' component={AboutPage} />
                    <Route exact path='/manipulacao-magistral' component={ManipulacaoMagistralPage} />
                    <Route exact path='/pesquisa-desenvolvimento' component={PesquisaDesenvolvimentoPage} />
                    <Route exact path='/areas-atuacao' component={AreasAtuacaoPage} />
                    <Route exact path='/contato' component={ContatoPage} />
                    <Footer />
                </ScrollToTopProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;