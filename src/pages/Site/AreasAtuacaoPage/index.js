import { Col, Row } from 'antd';
import React from 'react';
import AreasAtuacaoHeaderImage from '../../../assets/images/areas-atuacao-header-image.png';
import HeaderPages from '../../../components/LandingPage/Elements/HeaderPages';
import {
    Container,
    ImageAndDescriptionBox,
    Section,
    SectionDescription
} from '../styles';
import MedicinaOrtomolecularImage from '../../../assets/images/areas-atuacao/medicina-ortomolecular-image.png';
import MedicinaEsteticaImage from '../../../assets/images/areas-atuacao/medicina-estetica-image.png';
import MedicinaHospitalarImage from '../../../assets/images/areas-atuacao/medicina-hospitalar-image.png';
import MedicinaEsportivaImage from '../../../assets/images/areas-atuacao/medicina-esportiva-image.png';
import OftamologiaImage from '../../../assets/images/areas-atuacao/oftamologia-image.png';
import UrologiaImage from '../../../assets/images/areas-atuacao/urologia-image.png';
import VascularImage from '../../../assets/images/areas-atuacao/vascular-image.png';
import IntradermoterapiaImage from '../../../assets/images/areas-atuacao/intradermatoterapia-image.png';
import NutrologiaImage from '../../../assets/images/areas-atuacao/nutrologia-image.png';
import OdontologiaImage from '../../../assets/images/areas-atuacao/odontologia-image.png';
import MedicinaVeterinariaImage from '../../../assets/images/areas-atuacao/medicina-veterinaria-image.png';
import OncologiaImage from '../../../assets/images/areas-atuacao/oncologia-image.png';
import OrtopediaImage from '../../../assets/images/areas-atuacao/ortopedia-image.png';
import NeurologiaImage from '../../../assets/images/areas-atuacao/neurologia-image.png';
import EmagrecimentoImage from '../../../assets/images/areas-atuacao/emagrecimento-image.png';
import ReposicaoHormonalImage from '../../../assets/images/areas-atuacao/reposicao-hormonal-image.png';
import ImunologiaImage from '../../../assets/images/areas-atuacao/imunologia-image.png';
import CardiologiaImage from '../../../assets/images/areas-atuacao/cardiologia-image.png';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import ContactFormSection from '../../../components/LandingPage/Sections/ContactFormSection';

export default () => {
    return (
        <>
            <HeaderPages
                title='??reas de Atua????o'
                image={AreasAtuacaoHeaderImage}
            />

            <Container>
                <Section>
                    <SectionDescription>
                        <p>
                            Por meio do desenvolvimento de solu????es em um ambiente que inspira criatividade e tecnologia, 
                            o maior prop??sito do ICT Farmac??utica se sustenta na entrega de inova????es disruptivas. Para 
                            atingir esse objetivo, colocamo-nos em contato direto e cont??nuo com nossos clientes, ouvindo 
                            suas quest??es, analisando as possibilidades, planejando a????es e desenvolvendo-as, a fim de 
                            satisfazer suas necessidades.
                        </p>
                    </SectionDescription>
                </Section>

                <Section>
                    <Row style={{ marginBottom: '80px' }} gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaOrtomolecularImage} />
                                <h4>Medicina Integrativa / Ortomolecular</h4>
                                <p>
                                    Produtos que apoiam a rela????o integrativa entre o m??dico e o paciente para o cuidado da 
                                    sa??de.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaEsteticaImage} />
                                <h4>Medicina Est??tica (Capilar e Corporal)</h4>
                                <p>
                                    Produtos que procuram fornecer uma melhora na auto-estima e qualidade de vida a seus 
                                    pacientes.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaHospitalarImage} />
                                <h4>Medicina Hospitalar</h4>
                                <p>
                                    Desenvolvimento de produtos  em dosagens e apresenta????es espec??ficas que atendam ??s 
                                    necessidades m??dico-hospitalares.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '80px' }} gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaEsportivaImage} />
                                <h4>Medicina Esportiva</h4>
                                <p>
                                    Ativos com efic??cia cl??nica comprovada que, associados ?? pr??tica esportiva, 
                                    potencializam resultados. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={OftamologiaImage} />
                                <h4>Oftamologia</h4>
                                <p>
                                    Solu????es magistrais que contribuem com a melhora de um dos nossos sentidos mais 
                                    importantes, a vis??o.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={UrologiaImage} />
                                <h4>Urologia</h4>
                                <p>
                                    Produtos que promovem n??o apenas qualidade de vida, como tamb??m o bem-estar na vida 
                                    sexual de seus pacientes. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '80px' }} gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={VascularImage} />
                                <h4>Vascular</h4>
                                <p>
                                    Produtos para esclerose de  vasos e melhora da circula????o sangu??nea 
                                    (Venolinfocin??ticos e Esclerosantes).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={IntradermoterapiaImage} />
                                <h4>Intradermoterapia</h4>
                                <p>
                                    Consiste na infiltra????o de medicamentos na derme ou no tecido subcut??neo, objetivando 
                                    disponibilizar ativos diretamente nas zonas a serem tratadas. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={NutrologiaImage} />
                                <h4>Nutrologia</h4>
                                <p>
                                    Especialidade m??dica cl??nica que se dedica ao diagn??stico, preven????o e tratamento de 
                                    doen??as do comportamento alimentar.  
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '80px' }} gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={OdontologiaImage} />
                                <h4>Odontologia</h4>
                                <p>
                                    Produtos com foco em tratamentos inerentes a especialidade bem como no 
                                    auxilio para harmoniza????es faciais. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaVeterinariaImage} />
                                <h4>Oftalmologia / Medicina Veterin??ria</h4>
                                <p>
                                    Al??m da sa??de humana, buscamos tamb??m fornecer op????es exclusivas que possuem auxiliar 
                                    profissionais no cuidado da sa??de animal. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={OncologiaImage} />
                                <h4>Oncologia</h4>
                                <p>
                                    Individualiza????o de tratamentos atendendo as necessidades e possibilidades terap??uticas para cada 
                                    paciente.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={OrtopediaImage} />
                                <h4>Ortopedia e Reumatologia</h4>
                                <p>
                                    Produtos para a manuten????o da sa??de ??ssea e articula????es recupera????o de fraturas ou 
                                    osteoporose, dores articulares, osteoartrite, artrite.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={NeurologiaImage} />
                                <h4>Neurologia e Psiquiatria</h4>
                                <p>
                                    Produtos que auxiliam o tratamento de doen??as que afetam o sistema nervoso e os 
                                    componentes da jun????o neuromuscular (nervo e m??sculos).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={EmagrecimentoImage} />
                                <h4>Emagrecimento e S??ndriome Metab??lica</h4>
                                <p>
                                    Ativos que visam a potencializa????o de resultados atrav??s da associa????o de diferentes 
                                    mecanismos de a????o (principalmente redu????o do quadro de inflama????o sist??mica e local).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '80px' }} gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={ReposicaoHormonalImage} />
                                <h4>Reposi????o Hormonal Feminina e Masculina</h4>
                                <p>
                                    Longevidade e qualidade de vida, al??vio sintomatol??gico do decl??nio hormonal, preven????o 
                                    de doen??as degenerativas, cardiol??gicas e de qualquer tipo de c??ncer.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={ImunologiaImage} />
                                <h4>Imunologia</h4>
                                <p>
                                    Ativos que visam manter o sistema de defesa org??nico em equil??brio atrav??s de a????es 
                                    imunomoduladoras, imunoestimulantes, antioxidantes, antinflamat??rias e  preven????o das 
                                    desordens imunol??gicas.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={CardiologiaImage} />
                                <h4>Cardiologia</h4>
                                <p>
                                    Ativos que demonstram importantes resultados,  tanto na melhora da condi????o card??aca, 
                                    quanto na preven????o e tratamento de doen??as cardiovasculares.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>
                </Section>
            </Container>

            <MapSection />
            <ContactFormSection />
        </>
    );
};