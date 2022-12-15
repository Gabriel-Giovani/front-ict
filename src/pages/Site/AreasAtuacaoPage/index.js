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
                title='Áreas de Atuação'
                image={AreasAtuacaoHeaderImage}
            />

            <Container>
                <Section>
                    <SectionDescription>
                        <p>
                            Por meio do desenvolvimento de soluções em um ambiente que inspira criatividade e tecnologia, 
                            o maior propósito do ICT Farmacêutica se sustenta na entrega de inovações disruptivas. Para 
                            atingir esse objetivo, colocamo-nos em contato direto e contínuo com nossos clientes, ouvindo 
                            suas questões, analisando as possibilidades, planejando ações e desenvolvendo-as, a fim de 
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
                                    Produtos que apoiam a relação integrativa entre o médico e o paciente para o cuidado da 
                                    saúde.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaEsteticaImage} />
                                <h4>Medicina Estética (Capilar e Corporal)</h4>
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
                                    Desenvolvimento de produtos  em dosagens e apresentações específicas que atendam às 
                                    necessidades médico-hospitalares.
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
                                    Ativos com eficácia clínica comprovada que, associados à prática esportiva, 
                                    potencializam resultados. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={OftamologiaImage} />
                                <h4>Oftamologia</h4>
                                <p>
                                    Soluções magistrais que contribuem com a melhora de um dos nossos sentidos mais 
                                    importantes, a visão.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={UrologiaImage} />
                                <h4>Urologia</h4>
                                <p>
                                    Produtos que promovem não apenas qualidade de vida, como também o bem-estar na vida 
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
                                    Produtos para esclerose de  vasos e melhora da circulação sanguínea 
                                    (Venolinfocinéticos e Esclerosantes).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={IntradermoterapiaImage} />
                                <h4>Intradermoterapia</h4>
                                <p>
                                    Consiste na infiltração de medicamentos na derme ou no tecido subcutâneo, objetivando 
                                    disponibilizar ativos diretamente nas zonas a serem tratadas. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={NutrologiaImage} />
                                <h4>Nutrologia</h4>
                                <p>
                                    Especialidade médica clínica que se dedica ao diagnóstico, prevenção e tratamento de 
                                    doenças do comportamento alimentar.  
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
                                    auxilio para harmonizações faciais. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={MedicinaVeterinariaImage} />
                                <h4>Oftalmologia / Medicina Veterinária</h4>
                                <p>
                                    Além da saúde humana, buscamos também fornecer opções exclusivas que possuem auxiliar 
                                    profissionais no cuidado da saúde animal. 
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={OncologiaImage} />
                                <h4>Oncologia</h4>
                                <p>
                                    Individualização de tratamentos atendendo as necessidades e possibilidades terapêuticas para cada 
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
                                    Produtos para a manutenção da saúde óssea e articulações recuperação de fraturas ou 
                                    osteoporose, dores articulares, osteoartrite, artrite.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={NeurologiaImage} />
                                <h4>Neurologia e Psiquiatria</h4>
                                <p>
                                    Produtos que auxiliam o tratamento de doenças que afetam o sistema nervoso e os 
                                    componentes da junção neuromuscular (nervo e músculos).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={EmagrecimentoImage} />
                                <h4>Emagrecimento e Síndriome Metabólica</h4>
                                <p>
                                    Ativos que visam a potencialização de resultados através da associação de diferentes 
                                    mecanismos de ação (principalmente redução do quadro de inflamação sistêmica e local).
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '80px' }} gutter={24}>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={ReposicaoHormonalImage} />
                                <h4>Reposição Hormonal Feminina e Masculina</h4>
                                <p>
                                    Longevidade e qualidade de vida, alívio sintomatológico do declínio hormonal, prevenção 
                                    de doenças degenerativas, cardiológicas e de qualquer tipo de câncer.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={ImunologiaImage} />
                                <h4>Imunologia</h4>
                                <p>
                                    Ativos que visam manter o sistema de defesa orgânico em equilíbrio através de ações 
                                    imunomoduladoras, imunoestimulantes, antioxidantes, antinflamatórias e  prevenção das 
                                    desordens imunológicas.
                                </p>
                            </ImageAndDescriptionBox>
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <ImageAndDescriptionBox>
                                <img className='height-146' src={CardiologiaImage} />
                                <h4>Cardiologia</h4>
                                <p>
                                    Ativos que demonstram importantes resultados,  tanto na melhora da condição cardíaca, 
                                    quanto na prevenção e tratamento de doenças cardiovasculares.
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