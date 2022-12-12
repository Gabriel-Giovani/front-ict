import React from 'react';
import {
    Container,
    Section,
    FacilitiesSection,
    SectionTitle,
    SectionDescription,
    DescriptionImage,
    ImageAndDescriptionBox,
    ProfessionalBox,
    ProfessionalName,
    ProfessionalArea
} from '../styles';
import HeaderPages from '../../../components/LandingPage/Elements/HeaderPages';
import AboutImageHeader from '../../../assets/images/about-header-image.png';
import { Col, Row } from 'antd';
import InteligenciaTecnlogiaImage from '../../../assets/images/inteligencia-tecnologia-mage.png';
import GraphicAboutImage from '../../../assets/images/grafico-about-image.png';
import GraphicAboutImage2 from '../../../assets/images/grafico-about-image-2.png';
import GraphicAboutImage3 from '../../../assets/images/grafico-about-image-3.png';
import FacilitiesImage from '../../../assets/images/facilities-image-about.png';
import SquadImage from '../../../assets/images/squad-image.png';
import ScrumImage from '../../../assets/images/scrum-image.png';
import WaterImage from '../../../assets/images/water-image-about.png';
import TrioImage from '../../../assets/images/trio-image-about.png';
import TrioImage2 from '../../../assets/images/trio-image-about-2.png';
import TrioImage3 from '../../../assets/images/trio-image-about-3.png';
import TrioImage4 from '../../../assets/images/trio-image-about-4.png';
import TrioImage5 from '../../../assets/images/trio-image-about-5.png';
import SistemaArClassificadoImage from '../../../assets/images/sistema-ar-classificado-image.png';
import MonitoramentoAmbientalImage from '../../../assets/images/monitoramento-ambiental-image.png';
import LaboratoiosEnvaseImage from '../../../assets/images/laboratorios-envase-image.png';
import LaboratoiosEnvaseImage2 from '../../../assets/images/laboratorios-envase-image-2.png';
import CentralPesagemImage from '../../../assets/images/central-pescagem-image.png';
import CentralAmostragemImage from '../../../assets/images/central-amostragem-image.png';
import EsterilizacaoCalorImage from '../../../assets/images/esterilizacao-calor-image.png';
import EsterilizacaoCalorImage2 from '../../../assets/images/esterilizacao-calor-image-2.png';
import SistemaAguaImage from '../../../assets/images/sistema-agua-image.png';
import RevisaoOpticaImage from '../../../assets/images/revisao-optica-image.png';
import AlmoxarifadoMateriaPrimaImage from '../../../assets/images/almoxarifado-materia-prima-image.png';
import AlmoxarifadoEmbalagensImage from '../../../assets/images/almoxarifado-embalagens-image.png';
import SalaQuaretenaImage from '../../../assets/images/sala-quarentena-image.png';
import CentralGasesNobresImage from '../../../assets/images/central-gases-nobres-image.png';
import CentralArComprimidoImage from '../../../assets/images/central-ar-comprimido.png';
import AreaFinalizacaoImage from '../../../assets/images/area-finalizacao-image.png';
import DmlImage from '../../../assets/images/dml-image.png';
import DocaImage from '../../../assets/images/doca-image.png';
import VestiariosImage from '../../../assets/images/vestiarios-image.png';
import ProfessionalExampleImage from '../../../assets/images/professional-example-image.png';
import ProfessionalExampleImage2 from '../../../assets/images/professional-example-image-2.png';
import ProfessionalExampleImage3 from '../../../assets/images/professional-example-image-3.png';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import ContactFormSection from '../../../components/LandingPage/Sections/ContactFormSection';

export default () => {
    return (
        <>
            <HeaderPages
                title='Sobre o ICT'
                image={AboutImageHeader}
            />

            <Container>
                <Section>
                    <SectionTitle>Inteligência e Tecnologia a serviço da saúde</SectionTitle>

                    <Row gutter={24}>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <SectionDescription className='xl-margin-bottom'>
                                <span className='text-bold'>O que é um ICT?</span>
                                <p>
                                    Os ICTs, ou Institutos de Ciência e Tecnologia, são organizações que possuem como principal objetivo a 
                                    criação e o incentivo a pesquisas científicas e tecnológicas de maneira ágil e objetiva. Os ICTs tem por 
                                    finalidade o desenvolvimento de soluções que respondam às necessidades de seus clientes e parceiros de maneira 
                                    inovadora, aplicando conceitos de Pesquisa e Desenvolvimento alicerçada em uma Plataforma Magistral inovadora, com 
                                    agilidade, através de uma equipe de multi-profissionais, contando com especialistas e consultores nas mais diversas 
                                    áreas.
                                </p>
                            </SectionDescription>
                        </Col>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <DescriptionImage>
                                <img src={InteligenciaTecnlogiaImage} />
                            </DescriptionImage>
                        </Col>
                    </Row>
                </Section>

                <Section>
                    <SectionTitle>Uma Plataforma Magistral inovadora</SectionTitle>

                    <p>
                        O ICT Farmacêutica - Instituto de Ciência e Tecnologia Farmacêutica - surge como uma “Plataforma Magistral Inovadora”. 
                        Um conceito único no mercado brasileiro, alicerçado sob dois pilares principais:
                    </p>

                    <DescriptionImage className='margin-top d-none-mobile'>
                        <img src={GraphicAboutImage} />
                    </DescriptionImage>

                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                            <SectionDescription className='margin-top'>
                                <p>
                                    Como Laboratório Farmacêutico Especializado na Manipulação de Medicamentos Estéreis e Injetáveis, o ICT 
                                    Farmacêutica procura alinhar a necessidade da pesquisa sobre tendências tecnológicas na área da saúde e os 
                                    desejos de seus consumidores alvo, dentre os quais Hospitais, Clínicas, Serviços de Saúde, Institutos de Pesquisa, 
                                    Pesquisadores independentes, Usuários finais, entre outros, com a urgência requerida pelo mercado atual para o 
                                    atendimento de novas soluções.
                                </p>
                            </SectionDescription>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                            <SectionDescription className='margin-top'>
                                <p>
                                    Como Laboratório de Pesquisa e Desenvolvimento (P&D) de Projetos para a Área da Saúde, o ICT Farmacêutica realiza 
                                    testes de bancada para produtos das mais diversas áreas da saúde, possibilitando o desenvolvimento de soluções que 
                                    respondam às necessidades de seus clientes e parceiros de maneira inovadora, aplicando conceitos de Pesquisa e 
                                    Desenvolvimento alicerçados em uma Plataforma Magistral inovadora, trazendo maior agilidade, através de uma equipe 
                                    de multi-profissional, contando com especialistas e consultores nas mais diversas áreas.
                                </p>
                            </SectionDescription>
                        </Col>

                        <SectionDescription className='margin-top'>
                            <p>
                                Um laboratório alinhado com projetos da Farmácia e da Indústria Farmacêutica moderna, realizando desde a elaboração 
                                até a concepção da formulação, sugerindo inclusão e exclusão de componentes e suas possíveis interações, estimativa 
                                de Shelf-life e Estudo de Estabilidade Acelerado. 
                            </p>
                        </SectionDescription>
                        <SectionDescription className='margin-top'>
                            <p>
                                Um conceito inédito que o ICT Farmacêutica traz ao mercado magistral brasileiro, proporcionando garantia total a 
                                suas formulações e, consequentemente, aos usuários de seus produtos, além de todo um expertise aplicado por uma 
                                equipe de profissionais especializados em produção, pesquisa e desenvolvimento de produtos.
                            </p>
                        </SectionDescription>
                    </Row>
                </Section>

                <FacilitiesSection>
                    <h2>Facilidades</h2>
                    <h3>Saiba o que o ICT Farmacêutica pode realizar</h3>

                    <Row gutter={24} style={{ marginBottom: '85px' }}>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <DescriptionImage className='margin-bottom-mobile'>
                                <img src={FacilitiesImage} />
                            </DescriptionImage>
                        </Col>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <SectionDescription>
                                <p>
                                    Conhecer as particularidades das necessidades é fundamental para o bom andamento de um projeto entre o ICT 
                                    Farmacêutica e seus parceiros ou usuários. A chave do nosso sucesso é a interação e, por isso, é necessário que 
                                    haja uma troca de informações transparente, acordos bem definidos e comprometimento de ambas as partes. O ICT 
                                    Farmacêutica atua conceitualmente numa Plataforma Magistral, inovadora e ágil. Um Laboratório Farmacêutico 
                                    Especializado na Manipulação, Pesquisa e Desenvolvimento de Produtos Estéreis e Injetáveis, alicerçado sob duas 
                                    plataformas:
                                </p>
                            </SectionDescription>
                        </Col>
                    </Row>

                    <h4>Laboratório Farmacêutico Magistral especializado na produção de medicamentos estéreis injetáveis</h4>

                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmacêutica atua como Laboratório Farmacêutico Magistral Especializado na Manipulação de Medicamentos Estéreis e 
                            Injetáveis para as mais diversas áreas da saúde.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            O ICT Farmacêutica como plataforma magistral trabalha com foco nas seguintes frentes:

                            <ul>
                                <li>
                                    Atendimento direto às necessidades magistrais de Pacientes, Clínicas e Instituições Médico-hospitalares, 
                                    através da manipulação de receitas médicas.
                                </li>
                                <li>
                                    Desenvolvimento de Produtos para necessidades Médico-hospitalares em Plataforma Magistral – Clínicas 
                                    Especializadas e Hospitais.
                                </li>
                            </ul>
                        </p>
                    </SectionDescription>

                    <h4>Laboratório de Pesquisa e Desenvolvimento de Projetos</h4>

                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmacêutica atua também como Laboratório de Pesquisa & Desenvolvimento de projetos para empresas e indústrias 
                            farmacêuticas na fase da ideação de soluções, concepção, desenvolvimento de MVPs (Minimum Viable Products), validação 
                            com o público-alvo e execução.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Atua como um acelerador de Projetos para a área da Saúde, com expertise necessária para a viabilização de projetos e 
                            produtos, desde o desenvolvimento de bancada até o direcionamento para Registro definitivo na Anvisa. 
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Podemos citar o “desenvolvimento em bancada” como um dos inúmeros serviços prestados pelo ICT Farmacêutica, para 
                            inúmeros produtos solicitados por nossos clientes, a fim de que estes, após definidos e consagrados, possam ser 
                            viabilizados, seja para utilização na Instituição Médico-hospitalar solicitante, seja para um público alvo específico 
                            (pacientes), ou ainda para projetos com a finalidade de industrialização e Registro na Anvisa.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmacêutica, em parceria com empresas, profissionais e pesquisadores das mais diversas áreas, realiza pesquisas e 
                            discute propostas, viabilizando etapas para que, juntos, possam desenvolver soluções para as demandas apresentadas.
                        </p>
                    </SectionDescription>
                </FacilitiesSection>

                <DescriptionImage className='background-white position-absolute d-none-mobile'>
                    <img src={GraphicAboutImage2} />
                </DescriptionImage>

                <Section className='fix-margin-top-mobile' style={{ marginTop: '-300px' }}>
                    <SectionDescription className='margin-top'>
                        <p>
                            Ainda no contexto da Pesquisa e Desenvolvimento (P&D), o ICT Farmacêutica trabalha com foco nas seguintes frentes:
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            <srtong>
                                Planta-piloto para Desenvolvimentos em Bancada de produtos para a Indústria Farmacêutica (Medicamentos, Produtos para Saúde, 
                                Cosméticos, etc.)
                            </srtong>
                            – Desenvolvimento de Formulações, Adequações de Formas Farmacêuticas, Estudos de Estabilidade, Planejamento e Estratégias de 
                            Produtos de interesse, Análise de Viabilidade de Mercado, Análise de viabilidade de Registro de Produto (ANVISA, MAPA), 
                            entre outros.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            <strong>P&D</strong> - Pesquisa e Desenvolvimento em parceria com Universidades, Instituições de Ensino, Centros de Pesquisa 
                            e Pesquisadores independentes, entre outros.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Cada uma dessas vertentes possui sua equipe própria, denominada SQUAD, que é 
                            formada por profissionais multidisciplinares e especializados, que desenvolvem soluções personalizadas, utilizando a 
                            metodologia SCRUM. 
                        </p>
                    </SectionDescription>
                </Section>

                <Section>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SquadImage} />
                                <h6>Squads</h6>
                                <p>
                                    são “times compostos por profissionais com diferentes habilidades”, um contraponto ao método tradicional onde 
                                    as equipes são formadas por profissionais com uma mesma formação. Assim, é possível ter um ganho considerável 
                                    em autonomia e definir prioridades nos projetos, aplicando-se o conceito “direto ao foco”.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={ScrumImage} />
                                <h6>Scrum</h6>
                                <p>
                                    é um framework para desenvolver, entregar e sustentar produtos complexos. Trata-se de “uma estrutura na qual pessoas 
                                    podem resolver problemas adaptativos complexos, ao mesmo tempo que entregam produtos do mais alto valor possível, de 
                                    forma produtiva e criativa”. O time Scrum é composto pelo Product Owner (proprietário ou detentor do produto), o Scrum 
                                    Master (o mestre ou cabeça do projeto) e o Development Team (a Equipe de Desenvolvimento).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                </Section>

                <Section className='whithout-margin-bottom-mobile'>
                    <SectionDescription>
                        <p>
                            O ICT Farmacêutica atua principalmente com parcerias para o desenvolvimento dos projetos, sendo elas Empresas, 
                            Startups, Empreendedores, Pesquisadores, Instituições de Ensino, Universidades e Instituições Públicas e Privadas, 
                            Laboratórios, das mais diversas Áreas (Médicos e profissionais da Área da Saúde), Clínicas e Hospitais. A construção 
                            das soluções com esses agentes é um dos principais aspectos para o alcance de resultados que superem as expectativas.
                        </p>
                    </SectionDescription>
                </Section>

                <Section>
                    <DescriptionImage className='background-dark d-none-mobile'>
                        <img src={GraphicAboutImage3} />
                    </DescriptionImage>
                </Section>

                <FacilitiesSection className='padding-bottom-default'>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <DescriptionImage>
                                <img src={WaterImage} />
                            </DescriptionImage>
                        </Col>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className='inovation-col'>
                            <h3 className='font-size-36 text-align-left margin-bottom-20'>ICT Farmacêutica e inovação</h3>

                            <p>
                                Por meio do desenvolvimento de soluções em um ambiente que inspira criatividade e tecnologia, o maior propósito do 
                                ICT Farmacêutica se sustenta na entrega de inovações disruptivas. Para atingir esse objetivo, colocamo-nos em 
                                contato direto e contínuo com nossos clientes, ouvindo suas questões, analisando as possibilidades, planejando 
                                ações e desenvolvendo-as, a fim de satisfazer suas necessidades.
                            </p>
                            <p>
                                A partir dessa breve contextualização, é possível perceber e afirmar que os ICTs – Institutos de Ciência e 
                                Tecnologia – são modelos crescentes, andam lado a lado com a modernidade e funcionam como braço direito da inovação. 
                            </p>
                        </Col>
                    </Row>
                </FacilitiesSection>

                <Section>
                    <h2>Modernas instalações</h2>
                    <h3>Instalações modernas e totalmente equipadas </h3>
                    <p>
                        ICT FARMACÊUTICA é um Laboratório Farmacêutico que se destaca pela sua estrutura moderna, totalmente equipada para a 
                        Manipulação, Pesquisa e Desenvolvimento de Produtos Estéreis e Injetáveis, onde destacam-se:
                    </p>
                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>Arquitetura produtiva</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Arquitetura produtiva em consonância com as mais modernas estruturas farmacêuticas mundiais, voltada à excelência de 
                        processos e seus Controles de Qualidade.
                    </p>

                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SistemaArClassificadoImage} />
                                <h2>SISTEMA DE AR CLASSIFICADO (HVAC):</h2>
                                <p>
                                    Controle de Fluxo através do insuflamento de ar filtrado e refrigerado, balanceamento de cascatas de pressão, 
                                    monitorado em tempo real através de 24 Manômetros de diferencial de pressão instalados em todos os ambientes 
                                    produtivos (ISO 5, ISO 6, ISO 7 e ISO 8), em consonância com as melhores instalações industriais farmacêuticas 
                                    do mundo para a fabricação de produtos Estéreis e Injetáveis.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={MonitoramentoAmbientalImage} />
                                <h2>MONITORAMENTO AMBIENTAL EM TEMPO REAL:</h2>
                                <p>
                                    Monitoramento ambiental em tempo real das áreas produtivas, bem como o monitoramento contínuo de materiais e 
                                    colaboradores, garantindo o máximo padrão de qualidade durante os trabalhos e manipulações.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage2} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>LABORATÓRIOS DE PRODUTOS ESTÉREIS E INJETÁVEIS (Padrão Sala Limpa):</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Construídos em padrão SALA LIMPA, com isopainéis em pintura eletrostática e cantos arredondados, evitando o acúmulo de 
                        partículas e permitindo a limpeza e assepsia ideal de todas as áreas, garantindo isolamento total dos ambientes produtivos 
                        (Sistema “Estanque”).
                    </p>

                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={LaboratoiosEnvaseImage} />
                                <h2>2 LABORATÓRIOS DE ENVASE DE PRODUTOS HORMONAIS E CITOSTÁTICOS (Padrão Sala Limpa)</h2>
                                <p>
                                    Laboratórios ISO 6, com Ante-câmara ISO 7 e paramentação ISO 8, totalmente equipados com Fluxo Laminar de 
                                    Segurança Biológica ISO 5, (Classe B2), sistema Bag-in-bag-out para filtração e acúmulo de resíduos contaminantes 
                                    provenientes do sistema de ar, garantindo filtração com eficiência de 99,995%, exclusivos para manipulação de 
                                    produtos HORMONAIS e CITOSTÁTICOS, dotados de intertravamento automático de portas e Pass-throughs exclusivos.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={LaboratoiosEnvaseImage2} />
                                <h2>2 LABORATÓRIOS DE ENVASE DE AMPOLAS E FRASCOS-AMPOXLA (Padrão Sala Limpa)</h2>
                                <p>
                                    Laboratórios ISO 6, com Ante-câmara ISO 7 e paramentação ISO 8, totalmente equipados com Cabines de Fluxo 
                                    Laminar Vertical ISO 5, exclusivos para manipulação de AMPOLAS e FRASCOS-AMPOLA, dotados de intertravamento 
                                    automático de portas e Pass-throughs exclusivos, com Máquinas Envasadoras automáticas e semi-automáticas.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={CentralPesagemImage} />
                                <h2>1 CENTRAL DE PESAGEM (Padrão Sala Limpa)</h2>
                                <p>
                                    ISO 6, com Ante-câmara ISO 7 e paramentação ISO 8, totalmente equipada com Cabine de Pesagem ISO 5, dotada de 
                                    intertravamento automático de portas e Pass-throughs exclusivos e Balanças de precisão, entre outros.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={CentralAmostragemImage} />
                                <h2>1 CENTRAL DE AMOSTRAGEM DE MATÉRIAS PRIMAS (Padrão Sala Limpa)</h2>
                                <p>
                                    ISO 7, com Ante-câmara ISO 8, totalmente equipada com Cabine de Fluxo Laminar de Pesagem ISO 5, dotada de 
                                    intertravamento automático de portas e Pass-through exclusivo, Balança de precisão, entre outros. Após a 
                                    Amostragem das Matérias-primas adquiridas pela empresa, o Controle de Qualidade realiza as rotinas analíticas 
                                    para cada substância que, somente após aprovação, são liberadas para a produção.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage3} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>1 CENTRAL DE LAVAGEM E ESTERILIZAÇÃO (Padrão Sala Limpa):</h2>
                    <p className='text-align-center margin-bottom-40'>
                        ISO 6, com Ante-câmara ISO 7 e paramentação ISO 8, totalmente equipada com Esterelização por Calor Úmido, Esterelizaçào por 
                        Calor Seco; Sistema de Água Ultrapurificada; 
                    </p>

                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={EsterilizacaoCalorImage} />
                                <h2>ESTERILIZAÇÃO POR CALOR ÚMIDO:</h2>
                                <p>
                                    Autoclaves Horizontais com portas automáticas deslizantes (Tipo Guilhotina), com ciclos programáveis, 
                                    automatizadas, com sistema de registro de dados, garantindo uma Esterilização por calor úmido completa e 
                                    segura de produtos envasados e utensílios utilizados nos processos produtivos;
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={EsterilizacaoCalorImage2} />
                                <h2>ESTERILIZAÇÃO POR CALOR SECO:</h2>
                                <p>
                                    Estufa de Esterilização e Despirogenização por calor seco, com ciclos programáveis, automatizada, com sistema 
                                    de registro de dados, garantindo uma Esterilização completa e segura de ampolas e frascos, bem como de vidrarias 
                                    e utensílios utilizados nos processos produtivos;
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SistemaAguaImage} />
                                <h2>SISTEMA DE ÁGUA ULTRAPURIFICADA:</h2>
                                <p>
                                    O mais moderno Sistema de Produção de Água Ultrapurificada, padrão WFI (Water for Injection), com monitoramento 
                                    on-line de Condutividade/Resistividade, TOC (Teor de Carbono Orgânico), entre outros parâmetros, abastecendo 
                                    inclusive as Autoclaves e Lavadora de Frascos com Vapor de Água Ultrapuro, garantindo uma perfeita e segura 
                                    higienização das vidrarias e utensílios utilizados nos processos produtivos (em atendimento às mais exigentes 
                                    normas da Indústria Farmacêutica de Produtos Estéreis e Injetáveis).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage4} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>1 LABORATÓRIO DE MICROBIOLOGIA (Padrão Sala Limpa):</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Laboratório exclusivo para rotinas analíticas microbiológicas completas e rastreáveis, equipado com Salas Limpas ISO 7, 
                        Ante-câmara ISO 8, e Sala de Análise Microbiológica ISO 6 com Ante-câmara de acesso exclusiva ISO 7 equipada com Cabine de 
                        Fluxo Laminar de Segurança Biológica ISO 5 (Classe B2), com intertravamento automático de portas e Pass-through exclusivo. 
                        Laboratório equipado com Sistema de Água de Osmose Reversa, Banho-Maria, Contador de Colônia, Sistemas de Filtração à vácuo, 
                        Estufa de Cultura Microbiológica, Estufa Refrigerada para Cultura de Fungos e Leveduras, Estufa de Esterilização e Secagem 
                        de Materiais e Vidrarias, Autoclave exclusiva para Esterilização de Meios de Cultura, Autoclave exclusiva para 
                        Descontaminação e Inativação de Meios de Cultura antes de serem descartados, Balanças de precisão, Refrigerador 
                        exclusivo, entre outros.
                    </p>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage5} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>1 LABORATÓRIO FISICO-QUÍMICO:</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Laboratório de Análises Fisico-químicas, totalmente equipado para a realização de rotinas analíticas completas e 
                        rastreáveis, desde a análise das matérias-primas até o produto final. Equipado com Sistema de Água de Osmose Reversa, 
                        moderno Sistema de Produção de Água Ultrapurificada com monitoramento on-line de Condutividade/Resistividade, TOC 
                        (Teor de Carbono Orgânico), entre outros parâmetros, Banho-Maria, Sistemas de Filtração à vácuo e sob pressão, Manifold, 
                        Estufa de Esterilização e Secagem de Materiais e Vidrarias, Câmara Climática para Testes e Estudos de Estabilidade de 
                        Formulações, Capela de Exaustão de Gases, Microscópios Binoculares, Agitadores Mecânicos com e sem aquecimento, Agitadores 
                        Magnéticos com e sem aquecimento, Espectrofotômetro UV-visível, Espectrofotômetro UV-visível de Varredura com sistema de 
                        registro automático e coleta de dados rastreáveis, Banhos-Maria, Bombas peristálticas, Bombas de Vácuo, Balanças de 
                        precisão, entre outros.
                    </p>

                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={RevisaoOpticaImage} />
                                <h2>2 SALAS DE REVISÃO ÓPTICA:</h2>
                                <p>
                                    Salas de Revisão Óptica equipadas com Revisores Fundo Claro/Escuro em aço inox, ideais para a realização de 
                                    atividades relacionadas à revisão de ampolas, frascos-ampola, entre outros.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={AlmoxarifadoMateriaPrimaImage} />
                                <h2>1 ALMOXARIFADO DE MATÉRIAS-PRIMAS:</h2>
                                <p>
                                    Almoxarifado exclusivo para a estocagem de Matérias-primas aprovadas pelo Controle de Qualidade, dotado de 
                                    refrigeração e monitoramento ininterrupto de temperatura durante as 24 horas do dia, 365 dias por ano, 
                                    garantindo a qualidade de todos os insumos utilizados nos produtos fabricados.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SalaQuaretenaImage} />
                                <h2>1 SALA DE QUARENTENA DE MATÉRIAS-PRIMAS e MATERIAIS DE EMBALAGEM:</h2>
                                <p>
                                    Local segregado de guarda temporária de Matérias-primas e Materiais de Embalagem aguardando aprovação e 
                                    liberação do Controle de Qualidade.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={AlmoxarifadoEmbalagensImage} />
                                <h2>1 ALMOXARIFADO DE EMBALAGENS:</h2>
                                <p>
                                    Almoxarifado exclusivo para a estocagem de Materiais de Embalagem aprovadas pelo Controle de Qualidade, 
                                    dotado monitoramento ininterrupto de temperatura durante as 24 horas do dia, 365 dias por ano, garantindo a 
                                    qualidade de todas as embalagens e utensílios utilizados nos produtos e processos da empresa.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={CentralGasesNobresImage} />
                                <h2>1 CENTRAL DE GASES NOBRES (N2 e O2 analíticos e GLP):</h2>
                                <p>
                                    Local segregado para armazenamento dos Gases N2 e O2 analíticos e GLP, os quais são filtrados e esterilizados 
                                    antes de serem utilizados na manipulação dos produtos injetáveis. Alimentam os diversos laboratórios através de 
                                    tubulações e manômetros reguladores de pressão nos diversos pontos de uso na empresa, em atendimento aos mais 
                                    rigorosos padrões de segurança (ABNT) e normas internacionais. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={CentralArComprimidoImage} />
                                <h2>1 CENTRAL DE AR COMPRIMIDO:</h2>
                                <p>
                                    Área exclusiva equipada com Gerador de Ar Comprimido filtrado, desumidificado e posteriormente esterilizado 
                                    antes de serem utilizados. Alimentam os diversos laboratórios através de tubulações e manômetros reguladores 
                                    de pressão nos diversos pontos de uso na empresa, em atendimento aos mais rigorosos padrões de segurança (ABNT) 
                                    e normas internacionais. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={AreaFinalizacaoImage} />
                                <h2>1 ÁREA DE FINALIZAÇÃO:</h2>
                                <p>
                                    Área exclusiva e totalmente equipada para rotinas de conferência e finalização de produtos.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={DmlImage} />
                                <h2>2 DML:</h2>
                                <p>
                                    Depósitos de Materiais de Limpeza (DML) exclusivos para armazenamento de produtos e sanitizantes utilizados 
                                    nas Áreas controladas (Salas Limpas) e não-controladas da empresa.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={DocaImage} />
                                <h2>1 DOCA:</h2>
                                <p>
                                    Área exclusiva coberta para embarque e desembarque dos produtos produzidos e recebidos pela empresa dotada de 
                                    Pass-through exclusivo.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={VestiariosImage} />
                                <h2>2 VESTIÁRIOS:</h2>
                                <p>
                                    Vestiários Masculino e Feminino onde são fornecidos vestimentas completas aos funcionários dos diversos setores 
                                    da empresa.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                </Section>

                <FacilitiesSection>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <h2 className='text-align-left text-uppercase'>Nossa equipe</h2>
                            <h3 className='text-align-left font-size-30-mobile'>Equipe multi-profissional especializada</h3>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <p style={{ marginBottom: '20px' }}>
                                Contando com uma Equipe Multiprofissional com larga experiência na Produção de Produtos Estéreis e Injetáveis, 
                                provenientes de grandes e renomadas Indústrias e Laboratórios farmacêuticos, o ICT-Farmacêutica inova desde sua 
                                concepção inicial, aliando a agilidade de uma Plataforma Magistral com a Pesquisa e Desenvolvimento, introduzindo 
                                e implementando processos com agilidade e pioneirismo:
                            </p>
                            <p>
                                Equipe Multiprofissional proveniente de empresas farmacêuticas de renome e com larga experiência em processos 
                                produtivos para medicamentos Estéreis e Injetáveis; Consultores internos e externos especializados nas mais diversas 
                                áreas e projetos; Equipe de Pesquisa e Desenvolvimento para assessoria de projetos.
                            </p>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalBox>
                                <img src={ProfessionalExampleImage} />
                                <ProfessionalName>Fulano da Silva</ProfessionalName>
                                <ProfessionalArea>Farmacêutico</ProfessionalArea>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s,  
                                </p>
                            </ProfessionalBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalBox>
                                <img src={ProfessionalExampleImage2} />
                                <ProfessionalName>Fulano da Silva</ProfessionalName>
                                <ProfessionalArea>Farmacêutico</ProfessionalArea>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s,  
                                </p>
                            </ProfessionalBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalBox>
                                <img src={ProfessionalExampleImage3} />
                                <ProfessionalName>Fulano da Silva</ProfessionalName>
                                <ProfessionalArea>Farmacêutico</ProfessionalArea>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s,  
                                </p>
                            </ProfessionalBox>
                        </Col>
                    </Row>
                </FacilitiesSection>

                <Section>
                    <h3>
                        Soluções Inovadoras e Novos Projetos gerando um ciclo virtuoso de desenvolvimento
                    </h3>

                    <SectionDescription className='margin-top'>
                        <p>
                            Uma empresa só cresce e se torna competitiva quando tem em sua essência a capacidade de inovar, de se reinventar e 
                            empreender. São nossos talentos que, de fato, têm o compromisso de servir com inteligência, desenvolvendo a tecnologia 
                            para servir, inovar, criar algo completamente novo ou mesmo melhorar o que já existe.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Inovamos e empreendemos corporativamente com o desejo genuíno de potencializar a confiança de nossos clientes, 
                            fortalecer os negócios e ter uma sociedade mais desenvolvida.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Seguir as mudanças de perto e se transformar. Enxergar o futuro e criar novas tendências. É assim que fazemos no ICT 
                            Farmacêutica. Levamos conosco os aprendizados de anos de experiência em Indústria Farmacêutica, Farmácia de Manipulação 
                            e Laboratórios de Pesquisa e Desenvolvimento de produtos para a Área da Saúde e plantamos a inovação, com uma equipe 
                            dinâmica, motivada e cheia de energia. 
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Ser a sua melhor versão e buscar o extraordinário: esse é o seu objetivo ? Então traga suas necessidades para quem é 
                            especialista em atender essas demandas. Suas necessidades são nossa especialidade. Soluções para que a vida flua, gota 
                            a gota!
                        </p>
                    </SectionDescription>
                </Section>
            </Container>

            <MapSection />
            <ContactFormSection />
        </>
    );
};