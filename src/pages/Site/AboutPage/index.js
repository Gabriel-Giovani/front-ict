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
import AiltonImage from '../../../assets/images/ailton-granja-image.png';
import AlexandreImage from '../../../assets/images/alexandre-image.png';
import RegianeImage from '../../../assets/images/regiane-image.png';
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
                    <SectionTitle>Intelig??ncia e Tecnologia a servi??o da sa??de</SectionTitle>

                    <Row gutter={24}>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <SectionDescription className='xl-margin-bottom'>
                                <span className='text-bold'>O que ?? um ICT?</span>
                                <p>
                                    Os ICTs, ou Institutos de Ci??ncia e Tecnologia, s??o organiza????es que possuem como principal objetivo a 
                                    cria????o e o incentivo a pesquisas cient??ficas e tecnol??gicas de maneira ??gil e objetiva. Os ICTs tem por 
                                    finalidade o desenvolvimento de solu????es que respondam ??s necessidades de seus clientes e parceiros de maneira 
                                    inovadora, aplicando conceitos de Pesquisa e Desenvolvimento alicer??ada em uma Plataforma Magistral inovadora, com 
                                    agilidade, atrav??s de uma equipe de multi-profissionais, contando com especialistas e consultores nas mais diversas 
                                    ??reas.
                                </p>
                            </SectionDescription>
                        </Col>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <DescriptionImage>
                                <img src={InteligenciaTecnlogiaImage} className='w-100-mobile' />
                            </DescriptionImage>
                        </Col>
                    </Row>
                </Section>

                <Section>
                    <SectionTitle>Uma Plataforma Magistral inovadora</SectionTitle>

                    <p>
                        O ICT Farmac??utica - Instituto de Ci??ncia e Tecnologia Farmac??utica - surge como uma ???Plataforma Magistral Inovadora???. 
                        Um conceito ??nico no mercado brasileiro, alicer??ado sob dois pilares principais:
                    </p>

                    <DescriptionImage className='margin-top d-none-mobile'>
                        <img src={GraphicAboutImage} />
                    </DescriptionImage>

                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                            <SectionDescription className='margin-top'>
                                <p>
                                    Como Laborat??rio Farmac??utico Especializado na Manipula????o de Medicamentos Est??reis e Injet??veis, o ICT 
                                    Farmac??utica procura alinhar a necessidade da pesquisa sobre tend??ncias tecnol??gicas na ??rea da sa??de e os 
                                    desejos de seus consumidores alvo, dentre os quais Hospitais, Cl??nicas, Servi??os de Sa??de, Institutos de Pesquisa, 
                                    Pesquisadores independentes, Usu??rios finais, entre outros, com a urg??ncia requerida pelo mercado atual para o 
                                    atendimento de novas solu????es.
                                </p>
                            </SectionDescription>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                            <SectionDescription className='margin-top'>
                                <p>
                                    Como Laborat??rio de Pesquisa e Desenvolvimento (P&D) de Projetos para a ??rea da Sa??de, o ICT Farmac??utica realiza 
                                    testes de bancada para produtos das mais diversas ??reas da sa??de, possibilitando o desenvolvimento de solu????es que 
                                    respondam ??s necessidades de seus clientes e parceiros de maneira inovadora, aplicando conceitos de Pesquisa e 
                                    Desenvolvimento alicer??ados em uma Plataforma Magistral inovadora, trazendo maior agilidade, atrav??s de uma equipe 
                                    de multi-profissional, contando com especialistas e consultores nas mais diversas ??reas.
                                </p>
                            </SectionDescription>
                        </Col>

                        <SectionDescription className='margin-top'>
                            <p>
                                Um laborat??rio alinhado com projetos da Farm??cia e da Ind??stria Farmac??utica moderna, realizando desde a elabora????o 
                                at?? a concep????o da formula????o, sugerindo inclus??o e exclus??o de componentes e suas poss??veis intera????es, estimativa 
                                de Shelf-life e Estudo de Estabilidade Acelerado. 
                            </p>
                        </SectionDescription>
                        <SectionDescription className='margin-top'>
                            <p>
                                Um conceito in??dito que o ICT Farmac??utica traz ao mercado magistral brasileiro, proporcionando garantia total a 
                                suas formula????es e, consequentemente, aos usu??rios de seus produtos, al??m de todo um expertise aplicado por uma 
                                equipe de profissionais especializados em produ????o, pesquisa e desenvolvimento de produtos.
                            </p>
                        </SectionDescription>
                    </Row>
                </Section>

                <FacilitiesSection>
                    <h2>Facilidades</h2>
                    <h3>Saiba o que o ICT Farmac??utica pode realizar</h3>

                    <Row gutter={24} style={{ marginBottom: '85px' }}>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <DescriptionImage className='margin-bottom-mobile'>
                                <img src={FacilitiesImage} className='w-100-mobile' />
                            </DescriptionImage>
                        </Col>
                        <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <SectionDescription>
                                <p>
                                    Conhecer as particularidades das necessidades ?? fundamental para o bom andamento de um projeto entre o ICT 
                                    Farmac??utica e seus parceiros ou usu??rios. A chave do nosso sucesso ?? a intera????o e, por isso, ?? necess??rio que 
                                    haja uma troca de informa????es transparente, acordos bem definidos e comprometimento de ambas as partes. O ICT 
                                    Farmac??utica atua conceitualmente numa Plataforma Magistral, inovadora e ??gil. Um Laborat??rio Farmac??utico 
                                    Especializado na Manipula????o, Pesquisa e Desenvolvimento de Produtos Est??reis e Injet??veis, alicer??ado sob duas 
                                    plataformas:
                                </p>
                            </SectionDescription>
                        </Col>
                    </Row>

                    <h4>Laborat??rio Farmac??utico Magistral especializado na produ????o de medicamentos est??reis injet??veis</h4>

                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmac??utica atua como Laborat??rio Farmac??utico Magistral Especializado na Manipula????o de Medicamentos Est??reis e 
                            Injet??veis para as mais diversas ??reas da sa??de.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            O ICT Farmac??utica como plataforma magistral trabalha com foco nas seguintes frentes:

                            <ul>
                                <li>
                                    Atendimento direto ??s necessidades magistrais de Pacientes, Cl??nicas e Institui????es M??dico-hospitalares, 
                                    atrav??s da manipula????o de receitas m??dicas.
                                </li>
                                <li>
                                    Desenvolvimento de Produtos para necessidades M??dico-hospitalares em Plataforma Magistral ??? Cl??nicas 
                                    Especializadas e Hospitais.
                                </li>
                            </ul>
                        </p>
                    </SectionDescription>

                    <h4>Laborat??rio de Pesquisa e Desenvolvimento de Projetos</h4>

                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmac??utica atua tamb??m como Laborat??rio de Pesquisa & Desenvolvimento de projetos para empresas e ind??strias 
                            farmac??uticas na fase da idea????o de solu????es, concep????o, desenvolvimento de MVPs (Minimum Viable Products), valida????o 
                            com o p??blico-alvo e execu????o.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Atua como um acelerador de Projetos para a ??rea da Sa??de, com expertise necess??ria para a viabiliza????o de projetos e 
                            produtos, desde o desenvolvimento de bancada at?? o direcionamento para Registro definitivo na Anvisa. 
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Podemos citar o ???desenvolvimento em bancada??? como um dos in??meros servi??os prestados pelo ICT Farmac??utica, para 
                            in??meros produtos solicitados por nossos clientes, a fim de que estes, ap??s definidos e consagrados, possam ser 
                            viabilizados, seja para utiliza????o na Institui????o M??dico-hospitalar solicitante, seja para um p??blico alvo espec??fico 
                            (pacientes), ou ainda para projetos com a finalidade de industrializa????o e Registro na Anvisa.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmac??utica, em parceria com empresas, profissionais e pesquisadores das mais diversas ??reas, realiza pesquisas e 
                            discute propostas, viabilizando etapas para que, juntos, possam desenvolver solu????es para as demandas apresentadas.
                        </p>
                    </SectionDescription>
                </FacilitiesSection>

                <DescriptionImage className='background-white position-absolute d-none-mobile'>
                    <img src={GraphicAboutImage2} />
                </DescriptionImage>

                <Section className='fix-margin-top-mobile' style={{ marginTop: '-300px' }}>
                    <SectionDescription className='margin-top'>
                        <p>
                            Ainda no contexto da Pesquisa e Desenvolvimento (P&D), o ICT Farmac??utica trabalha com foco nas seguintes frentes:
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            <srtong>
                                Planta-piloto para Desenvolvimentos em Bancada de produtos para a Ind??stria Farmac??utica (Medicamentos, Produtos para Sa??de, 
                                Cosm??ticos, etc.)
                            </srtong>
                            ??? Desenvolvimento de Formula????es, Adequa????es de Formas Farmac??uticas, Estudos de Estabilidade, Planejamento e Estrat??gias de 
                            Produtos de interesse, An??lise de Viabilidade de Mercado, An??lise de viabilidade de Registro de Produto (ANVISA, MAPA), 
                            entre outros.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            <strong>P&D</strong> - Pesquisa e Desenvolvimento em parceria com Universidades, Institui????es de Ensino, Centros de Pesquisa 
                            e Pesquisadores independentes, entre outros.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Cada uma dessas vertentes possui sua equipe pr??pria, denominada SQUAD, que ?? 
                            formada por profissionais multidisciplinares e especializados, que desenvolvem solu????es personalizadas, utilizando a 
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
                                    s??o ???times compostos por profissionais com diferentes habilidades???, um contraponto ao m??todo tradicional onde 
                                    as equipes s??o formadas por profissionais com uma mesma forma????o. Assim, ?? poss??vel ter um ganho consider??vel 
                                    em autonomia e definir prioridades nos projetos, aplicando-se o conceito ???direto ao foco???.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={ScrumImage} />
                                <h6>Scrum</h6>
                                <p>
                                    ?? um framework para desenvolver, entregar e sustentar produtos complexos. Trata-se de ???uma estrutura na qual pessoas 
                                    podem resolver problemas adaptativos complexos, ao mesmo tempo que entregam produtos do mais alto valor poss??vel, de 
                                    forma produtiva e criativa???. O time Scrum ?? composto pelo Product Owner (propriet??rio ou detentor do produto), o Scrum 
                                    Master (o mestre ou cabe??a do projeto) e o Development Team (a Equipe de Desenvolvimento).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                </Section>

                <Section className='whithout-margin-bottom-mobile'>
                    <SectionDescription>
                        <p>
                            O ICT Farmac??utica atua principalmente com parcerias para o desenvolvimento dos projetos, sendo elas Empresas, 
                            Startups, Empreendedores, Pesquisadores, Institui????es de Ensino, Universidades e Institui????es P??blicas e Privadas, 
                            Laborat??rios, das mais diversas ??reas (M??dicos e profissionais da ??rea da Sa??de), Cl??nicas e Hospitais. A constru????o 
                            das solu????es com esses agentes ?? um dos principais aspectos para o alcance de resultados que superem as expectativas.
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
                                <img src={WaterImage} className='w-100-mobile' />
                            </DescriptionImage>
                        </Col>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className='inovation-col'>
                            <h3 className='font-size-36 text-align-left margin-bottom-20'>ICT Farmac??utica e inova????o</h3>

                            <p>
                                Por meio do desenvolvimento de solu????es em um ambiente que inspira criatividade e tecnologia, o maior prop??sito do 
                                ICT Farmac??utica se sustenta na entrega de inova????es disruptivas. Para atingir esse objetivo, colocamo-nos em 
                                contato direto e cont??nuo com nossos clientes, ouvindo suas quest??es, analisando as possibilidades, planejando 
                                a????es e desenvolvendo-as, a fim de satisfazer suas necessidades.
                            </p>
                            <p>
                                A partir dessa breve contextualiza????o, ?? poss??vel perceber e afirmar que os ICTs ??? Institutos de Ci??ncia e 
                                Tecnologia ??? s??o modelos crescentes, andam lado a lado com a modernidade e funcionam como bra??o direito da inova????o. 
                            </p>
                        </Col>
                    </Row>
                </FacilitiesSection>

                <Section>
                    <h2>Modernas instala????es</h2>
                    <h3>Instala????es modernas e totalmente equipadas </h3>
                    <p>
                        ICT FARMAC??UTICA ?? um Laborat??rio Farmac??utico que se destaca pela sua estrutura moderna, totalmente equipada para a 
                        Manipula????o, Pesquisa e Desenvolvimento de Produtos Est??reis e Injet??veis, onde destacam-se:
                    </p>
                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>Arquitetura produtiva</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Arquitetura produtiva em conson??ncia com as mais modernas estruturas farmac??uticas mundiais, voltada ?? excel??ncia de 
                        processos e seus Controles de Qualidade.
                    </p>

                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SistemaArClassificadoImage} />
                                <h2>SISTEMA DE AR CLASSIFICADO (HVAC):</h2>
                                <p>
                                    Controle de Fluxo atrav??s do insuflamento de ar filtrado e refrigerado, balanceamento de cascatas de press??o, 
                                    monitorado em tempo real atrav??s de 24 Man??metros de diferencial de press??o instalados em todos os ambientes 
                                    produtivos (ISO 5, ISO 6, ISO 7 e ISO 8), em conson??ncia com as melhores instala????es industriais farmac??uticas 
                                    do mundo para a fabrica????o de produtos Est??reis e Injet??veis.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={MonitoramentoAmbientalImage} />
                                <h2>MONITORAMENTO AMBIENTAL EM TEMPO REAL:</h2>
                                <p>
                                    Monitoramento ambiental em tempo real das ??reas produtivas, bem como o monitoramento cont??nuo de materiais e 
                                    colaboradores, garantindo o m??ximo padr??o de qualidade durante os trabalhos e manipula????es.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage2} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>LABORAT??RIOS DE PRODUTOS EST??REIS E INJET??VEIS (Padr??o Sala Limpa):</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Constru??dos em padr??o SALA LIMPA, com isopain??is em pintura eletrost??tica e cantos arredondados, evitando o ac??mulo de 
                        part??culas e permitindo a limpeza e assepsia ideal de todas as ??reas, garantindo isolamento total dos ambientes produtivos 
                        (Sistema ???Estanque???).
                    </p>

                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={LaboratoiosEnvaseImage} />
                                <h2>2 LABORAT??RIOS DE ENVASE DE PRODUTOS HORMONAIS E CITOST??TICOS (Padr??o Sala Limpa)</h2>
                                <p>
                                    Laborat??rios ISO 6, com Ante-c??mara ISO 7 e paramenta????o ISO 8, totalmente equipados com Fluxo Laminar de 
                                    Seguran??a Biol??gica ISO 5, (Classe B2), sistema Bag-in-bag-out para filtra????o e ac??mulo de res??duos contaminantes 
                                    provenientes do sistema de ar, garantindo filtra????o com efici??ncia de 99,995%, exclusivos para manipula????o de 
                                    produtos HORMONAIS e CITOST??TICOS, dotados de intertravamento autom??tico de portas e Pass-throughs exclusivos.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={LaboratoiosEnvaseImage2} />
                                <h2>2 LABORAT??RIOS DE ENVASE DE AMPOLAS E FRASCOS-AMPOXLA (Padr??o Sala Limpa)</h2>
                                <p>
                                    Laborat??rios ISO 6, com Ante-c??mara ISO 7 e paramenta????o ISO 8, totalmente equipados com Cabines de Fluxo 
                                    Laminar Vertical ISO 5, exclusivos para manipula????o de AMPOLAS e FRASCOS-AMPOLA, dotados de intertravamento 
                                    autom??tico de portas e Pass-throughs exclusivos, com M??quinas Envasadoras autom??ticas e semi-autom??ticas.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={CentralPesagemImage} />
                                <h2>1 CENTRAL DE PESAGEM (Padr??o Sala Limpa)</h2>
                                <p>
                                    ISO 6, com Ante-c??mara ISO 7 e paramenta????o ISO 8, totalmente equipada com Cabine de Pesagem ISO 5, dotada de 
                                    intertravamento autom??tico de portas e Pass-throughs exclusivos e Balan??as de precis??o, entre outros.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={CentralAmostragemImage} />
                                <h2>1 CENTRAL DE AMOSTRAGEM DE MAT??RIAS PRIMAS (Padr??o Sala Limpa)</h2>
                                <p>
                                    ISO 7, com Ante-c??mara ISO 8, totalmente equipada com Cabine de Fluxo Laminar de Pesagem ISO 5, dotada de 
                                    intertravamento autom??tico de portas e Pass-through exclusivo, Balan??a de precis??o, entre outros. Ap??s a 
                                    Amostragem das Mat??rias-primas adquiridas pela empresa, o Controle de Qualidade realiza as rotinas anal??ticas 
                                    para cada subst??ncia que, somente ap??s aprova????o, s??o liberadas para a produ????o.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage3} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>1 CENTRAL DE LAVAGEM E ESTERILIZA????O (Padr??o Sala Limpa):</h2>
                    <p className='text-align-center margin-bottom-40'>
                        ISO 6, com Ante-c??mara ISO 7 e paramenta????o ISO 8, totalmente equipada com Estereliza????o por Calor ??mido, Estereliza????o por 
                        Calor Seco; Sistema de ??gua Ultrapurificada; 
                    </p>

                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={EsterilizacaoCalorImage} />
                                <h2>ESTERILIZA????O POR CALOR ??MIDO:</h2>
                                <p>
                                    Autoclaves Horizontais com portas autom??ticas deslizantes (Tipo Guilhotina), com ciclos program??veis, 
                                    automatizadas, com sistema de registro de dados, garantindo uma Esteriliza????o por calor ??mido completa e 
                                    segura de produtos envasados e utens??lios utilizados nos processos produtivos;
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={EsterilizacaoCalorImage2} />
                                <h2>ESTERILIZA????O POR CALOR SECO:</h2>
                                <p>
                                    Estufa de Esteriliza????o e Despirogeniza????o por calor seco, com ciclos program??veis, automatizada, com sistema 
                                    de registro de dados, garantindo uma Esteriliza????o completa e segura de ampolas e frascos, bem como de vidrarias 
                                    e utens??lios utilizados nos processos produtivos;
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SistemaAguaImage} />
                                <h2>SISTEMA DE ??GUA ULTRAPURIFICADA:</h2>
                                <p>
                                    O mais moderno Sistema de Produ????o de ??gua Ultrapurificada, padr??o WFI (Water for Injection), com monitoramento 
                                    on-line de Condutividade/Resistividade, TOC (Teor de Carbono Org??nico), entre outros par??metros, abastecendo 
                                    inclusive as Autoclaves e Lavadora de Frascos com Vapor de ??gua Ultrapuro, garantindo uma perfeita e segura 
                                    higieniza????o das vidrarias e utens??lios utilizados nos processos produtivos (em atendimento ??s mais exigentes 
                                    normas da Ind??stria Farmac??utica de Produtos Est??reis e Injet??veis).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage4} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>1 LABORAT??RIO DE MICROBIOLOGIA (Padr??o Sala Limpa):</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Laborat??rio exclusivo para rotinas anal??ticas microbiol??gicas completas e rastre??veis, equipado com Salas Limpas ISO 7, 
                        Ante-c??mara ISO 8, e Sala de An??lise Microbiol??gica ISO 6 com Ante-c??mara de acesso exclusiva ISO 7 equipada com Cabine de 
                        Fluxo Laminar de Seguran??a Biol??gica ISO 5 (Classe B2), com intertravamento autom??tico de portas e Pass-through exclusivo. 
                        Laborat??rio equipado com Sistema de ??gua de Osmose Reversa, Banho-Maria, Contador de Col??nia, Sistemas de Filtra????o ?? v??cuo, 
                        Estufa de Cultura Microbiol??gica, Estufa Refrigerada para Cultura de Fungos e Leveduras, Estufa de Esteriliza????o e Secagem 
                        de Materiais e Vidrarias, Autoclave exclusiva para Esteriliza????o de Meios de Cultura, Autoclave exclusiva para 
                        Descontamina????o e Inativa????o de Meios de Cultura antes de serem descartados, Balan??as de precis??o, Refrigerador 
                        exclusivo, entre outros.
                    </p>

                    <DescriptionImage className='margin-top'>
                        <img src={TrioImage5} className='w-100-mobile' />
                    </DescriptionImage>

                    <h2 className='margin-top-20'>1 LABORAT??RIO FISICO-QU??MICO:</h2>
                    <p className='text-align-center margin-bottom-40'>
                        Laborat??rio de An??lises Fisico-qu??micas, totalmente equipado para a realiza????o de rotinas anal??ticas completas e 
                        rastre??veis, desde a an??lise das mat??rias-primas at?? o produto final. Equipado com Sistema de ??gua de Osmose Reversa, 
                        moderno Sistema de Produ????o de ??gua Ultrapurificada com monitoramento on-line de Condutividade/Resistividade, TOC 
                        (Teor de Carbono Org??nico), entre outros par??metros, Banho-Maria, Sistemas de Filtra????o ?? v??cuo e sob press??o, Manifold, 
                        Estufa de Esteriliza????o e Secagem de Materiais e Vidrarias, C??mara Clim??tica para Testes e Estudos de Estabilidade de 
                        Formula????es, Capela de Exaust??o de Gases, Microsc??pios Binoculares, Agitadores Mec??nicos com e sem aquecimento, Agitadores 
                        Magn??ticos com e sem aquecimento, Espectrofot??metro UV-vis??vel, Espectrofot??metro UV-vis??vel de Varredura com sistema de 
                        registro autom??tico e coleta de dados rastre??veis, Banhos-Maria, Bombas perist??lticas, Bombas de V??cuo, Balan??as de 
                        precis??o, entre outros.
                    </p>

                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={RevisaoOpticaImage} />
                                <h2>2 SALAS DE REVIS??O ??PTICA:</h2>
                                <p>
                                    Salas de Revis??o ??ptica equipadas com Revisores Fundo Claro/Escuro em a??o inox, ideais para a realiza????o de 
                                    atividades relacionadas ?? revis??o de ampolas, frascos-ampola, entre outros.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={AlmoxarifadoMateriaPrimaImage} />
                                <h2>1 ALMOXARIFADO DE MAT??RIAS-PRIMAS:</h2>
                                <p>
                                    Almoxarifado exclusivo para a estocagem de Mat??rias-primas aprovadas pelo Controle de Qualidade, dotado de 
                                    refrigera????o e monitoramento ininterrupto de temperatura durante as 24 horas do dia, 365 dias por ano, 
                                    garantindo a qualidade de todos os insumos utilizados nos produtos fabricados.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={SalaQuaretenaImage} />
                                <h2>1 SALA DE QUARENTENA DE MAT??RIAS-PRIMAS e MATERIAIS DE EMBALAGEM:</h2>
                                <p>
                                    Local segregado de guarda tempor??ria de Mat??rias-primas e Materiais de Embalagem aguardando aprova????o e 
                                    libera????o do Controle de Qualidade.
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
                                    qualidade de todas as embalagens e utens??lios utilizados nos produtos e processos da empresa.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={CentralGasesNobresImage} />
                                <h2>1 CENTRAL DE GASES NOBRES (N2 e O2 anal??ticos e GLP):</h2>
                                <p>
                                    Local segregado para armazenamento dos Gases N2 e O2 anal??ticos e GLP, os quais s??o filtrados e esterilizados 
                                    antes de serem utilizados na manipula????o dos produtos injet??veis. Alimentam os diversos laborat??rios atrav??s de 
                                    tubula????es e man??metros reguladores de press??o nos diversos pontos de uso na empresa, em atendimento aos mais 
                                    rigorosos padr??es de seguran??a (ABNT) e normas internacionais. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={CentralArComprimidoImage} />
                                <h2>1 CENTRAL DE AR COMPRIMIDO:</h2>
                                <p>
                                    ??rea exclusiva equipada com Gerador de Ar Comprimido filtrado, desumidificado e posteriormente esterilizado 
                                    antes de serem utilizados. Alimentam os diversos laborat??rios atrav??s de tubula????es e man??metros reguladores 
                                    de press??o nos diversos pontos de uso na empresa, em atendimento aos mais rigorosos padr??es de seguran??a (ABNT) 
                                    e normas internacionais. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img src={AreaFinalizacaoImage} />
                                <h2>1 ??REA DE FINALIZA????O:</h2>
                                <p>
                                    ??rea exclusiva e totalmente equipada para rotinas de confer??ncia e finaliza????o de produtos.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={DmlImage} />
                                <h2>2 DML:</h2>
                                <p>
                                    Dep??sitos de Materiais de Limpeza (DML) exclusivos para armazenamento de produtos e sanitizantes utilizados 
                                    nas ??reas controladas (Salas Limpas) e n??o-controladas da empresa.
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
                                    ??rea exclusiva coberta para embarque e desembarque dos produtos produzidos e recebidos pela empresa dotada de 
                                    Pass-through exclusivo.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
                            <ImageAndDescriptionBox>
                                <img src={VestiariosImage} />
                                <h2>2 VESTI??RIOS:</h2>
                                <p>
                                    Vesti??rios Masculino e Feminino onde s??o fornecidos vestimentas completas aos funcion??rios dos diversos setores 
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
                                Contando com uma Equipe Multiprofissional com larga experi??ncia na Produ????o de Produtos Est??reis e Injet??veis, 
                                provenientes de grandes e renomadas Ind??strias e Laborat??rios farmac??uticos, o ICT-Farmac??utica inova desde sua 
                                concep????o inicial, aliando a agilidade de uma Plataforma Magistral com a Pesquisa e Desenvolvimento, introduzindo 
                                e implementando processos com agilidade e pioneirismo:
                            </p>
                            <p>
                                Equipe Multiprofissional proveniente de empresas farmac??uticas de renome e com larga experi??ncia em processos 
                                produtivos para medicamentos Est??reis e Injet??veis; Consultores internos e externos especializados nas mais diversas 
                                ??reas e projetos; Equipe de Pesquisa e Desenvolvimento para assessoria de projetos.
                            </p>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalBox>
                                <img src={AiltonImage} />
                                <ProfessionalName>Ailton Granja</ProfessionalName>
                                <ProfessionalArea>Qu??mico</ProfessionalArea>
                                <p>
                                    Formado em Qu??mica (UFSCAR) com mestrado em Ci??ncia dos Materiais (UNISO) ele ?? respons??vel 
                                    pelo setor de Controle de Qualidade na ICT Farmac??utica. Com vasta experi??ncia em gest??o e 
                                    controle de qualidade, auditoria e consultoria ele se torna a pe??a chave no setor de Qualidade. 
                                </p>

                                <a href='/corpo-tecnico'>saiba mais</a>
                            </ProfessionalBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalBox>
                                <img src={AlexandreImage} />
                                <ProfessionalName>Dr. Alexandre Winarski</ProfessionalName>
                                <ProfessionalArea>Farmac??utico</ProfessionalArea>
                                <p>
                                    Formado em Farm??cia com P??s Gradua????o em Gest??o Empresarial e Lean Six Sigma na Universidade Paulista - 
                                    UNIP. Possui 24 anos de experi??ncia com empresas farmac??uticas com foco em Desenvolvimento de Novos 
                                    Produtos, Produ????o Industrial e Produ????o de Injet??veis. 
                                </p>

                                <a href='/corpo-tecnico'>saiba mais</a>
                            </ProfessionalBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24}>
                            <ProfessionalBox>
                                <img src={RegianeImage} />
                                <ProfessionalName>Dra. Regiane Santo</ProfessionalName>
                                <ProfessionalArea>Farmac??utica</ProfessionalArea>
                                <p>
                                    Formada em Farm??cia com p??s-gradua????o em Produ????o Industrial Farmac??utica e Farm??cia Cl??nica. Ampla experi??ncia 
                                    na ??rea limpa, manipula????o de produtos est??reis, Nutri????o Parental e Farm??cia Cl??nica Hospitalar. J?? realizou 
                                    acompanhamentos de visitas t??cnicas: Anvisa, CRF, ONA, ISO 9001.
                                </p>

                                <a href='/corpo-tecnico'>saiba mais</a>
                            </ProfessionalBox>
                        </Col>
                    </Row>
                </FacilitiesSection>

                <Section>
                    <h3>
                        Solu????es Inovadoras e Novos Projetos gerando um ciclo virtuoso de desenvolvimento
                    </h3>

                    <SectionDescription className='margin-top'>
                        <p>
                            Uma empresa s?? cresce e se torna competitiva quando tem em sua ess??ncia a capacidade de inovar, de se reinventar e 
                            empreender. S??o nossos talentos que, de fato, t??m o compromisso de servir com intelig??ncia, desenvolvendo a tecnologia 
                            para servir, inovar, criar algo completamente novo ou mesmo melhorar o que j?? existe.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Inovamos e empreendemos corporativamente com o desejo genu??no de potencializar a confian??a de nossos clientes, 
                            fortalecer os neg??cios e ter uma sociedade mais desenvolvida.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Seguir as mudan??as de perto e se transformar. Enxergar o futuro e criar novas tend??ncias. ?? assim que fazemos no ICT 
                            Farmac??utica. Levamos conosco os aprendizados de anos de experi??ncia em Ind??stria Farmac??utica, Farm??cia de Manipula????o 
                            e Laborat??rios de Pesquisa e Desenvolvimento de produtos para a ??rea da Sa??de e plantamos a inova????o, com uma equipe 
                            din??mica, motivada e cheia de energia. 
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Ser a sua melhor vers??o e buscar o extraordin??rio: esse ?? o seu objetivo ? Ent??o traga suas necessidades para quem ?? 
                            especialista em atender essas demandas. Suas necessidades s??o nossa especialidade. Solu????es para que a vida flua, gota 
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