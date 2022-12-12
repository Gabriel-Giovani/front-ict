import React from 'react';
import HeaderPages from '../../../components/LandingPage/Elements/HeaderPages';
import PesquisaDesenvolvimentoHeaderImage from '../../../assets/images/pesquisa-desenvolvimento-header-image.png';
import {
    Container,
    DescriptionImage,
    FacilitiesSection,
    Section,
    SectionDescription,
    SectionTitle
} from '../styles';
import {
    SumaryTitle,
    SumarySubtitle
} from './styles';
import GraphicPesquisaDesenvolvimentoImage from '../../../assets/images/grafico-pesquisa-desenvolvimento-image.png';
import ImportanciaTestesImage from '../../../assets/images/importancia-testes-image.png';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import ContactFormSection from '../../../components/LandingPage/Sections/ContactFormSection';

export default () => {
    return (
        <>
            <HeaderPages
                title='Pesquisa e Desenvolvimento'
                image={PesquisaDesenvolvimentoHeaderImage}
            />

            <Container>
                <Section>
                    <SectionTitle className='font-size-28-mobile'>Laboratório de Pesquisa e Desenvolvimento de Projetos</SectionTitle>
                    <SectionDescription className='margin-top'>
                        <p>
                            O ICT Farmacêutica atua também como Laboratório de Pesquisa & Desenvolvimento de projetos para 
                            empresas e indústrias farmacêuticas na fase da ideação de soluções, concepção, desenvolvimento 
                            de MVPs (Minimum Viable Products), validação com o público-alvo e execução.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Atua como um acelerador de Projetos para a área da Saúde, com expertise necessária para a 
                            viabilização de projetos e produtos, desde o desenvolvimento de bancada até o direcionamento 
                            para Registro definitivo na Anvisa.
                        </p>
                    </SectionDescription>
                </Section>

                <FacilitiesSection className='background-dark padding-bottom-default'>
                    <DescriptionImage className='d-none-mobile'>
                        <img src={GraphicPesquisaDesenvolvimentoImage} />
                    </DescriptionImage>

                    <SectionDescription className='margin-top color-white'>
                        <p>
                            O setor de Pesquisa e Desenvolvimento (P&D) de uma empresa é o cerne da inovação. Local onde 
                            pulsam as novas ideias e os planos estratégicos para conceber produtos mais alinhados com a 
                            necessidade do mercado e com as exigências dos consumidores.
                            Diante da necessidade de se criar, juntamente com os cuidados envolvidos nessa operação, surgem 
                            as necessidades da adoção de alguns procedimentos industriais que otimizam e certificam o 
                            trabalho de P&D.
                            Estamos falando da aplicação de testes de bancada, de plantas-piloto e industriais. Todos esses 
                            procedimentos são base para a criação de produtos seguros e que tenham a qualidade esperada 
                            pelos gestores da empresa e pelo mercado consumidor. 	A partir de agora, você terá a 
                            oportunidade de conhecer mais sobre os testes mencionados acima e como eles são fundamentais 
                            para a Pesquisa e Desenvolvimento de produtos na indústria farmacêutica e em geral.
                        </p>
                    </SectionDescription>
                </FacilitiesSection>

                <Section>
                    <SectionTitle>A importância por trás dos testes de bancada, em planta piloto e em planta industrial</SectionTitle>

                    <DescriptionImage>
                        <img src={ImportanciaTestesImage} />
                    </DescriptionImage>

                    <SectionDescription className='margin-top'>
                        <p>
                            Em todos os projetos, faz-se necessária a transição suave da bancada para a planta-piloto. Teste Industrial é devido 
                            somente quando já se tem bastante certeza, ou ao menos certeza o suficiente de que a formulação e processos desenvolvidos 
                            estavam no ponto para serem levados até essa etapa. Porém isso não foi verdade sempre!
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Empresas que não possuem uma Planta-piloto para chamar de sua sofrem na pele o impacto que esta ausência traz para um 
                            projeto de desenvolvimento de seus produtos. Não bastasse isso, a experiência com os visionários, em treinamentos e consultorias, 
                            corrobora esta visão.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            O uso de Plantas-piloto é necessário para apoiar e acelerar a inovação e o desenvolvimento de produtos, trabalho esse que o 
                            departamento de P&D faz. Entretanto, o trabalho de P&D não começa na Planta-piloto. E muito menos termina ali. Um projeto de 
                            desenvolvimento de produtos bem estruturado é capaz de fornecer pistas do futuro e informações relevantes em todas as suas etapas. 
                            Por isso, é muito importante não pular direto dos testes de bancada para a planta industrial.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            A seguir, vamos falar sobre o que é possível extrair de informações nos diferentes níveis de testes que a Pesquisa e 
                            Desenvolvimento realiza.
                        </p>
                    </SectionDescription>
                </Section>

                <Section>
                    <SectionTitle className='font-size-25 margin-bottom'>Testes de Bancada</SectionTitle>

                    <SumaryTitle>O que são?</SumaryTitle>
                    <SectionDescription className='margin-top'>
                        <p>
                            Considera-se teste de bancada aquele que utiliza equipamentos simples e bastante distantes 
                            da escala industrial. Falamos aqui de balanças, batedeiras, estufas, misturadores e outros 
                            equipamentos de pequeno porte, porém devidamente qualificados. 
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Não é porque um teste é realizado em Planta-piloto que ele deixa de ser “de bancada”. 
                            Para o desenvolvimento de “Protótipos”, utilizamos uma planta-piloto – porém a maioria dos 
                            testes é realizada no nível de bancada. 
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            É importante observar a escala do teste: se a quantidade de matérias-primas empregada for 
                            dezenas ou até milhares de vezes inferior a uma produção industrial, estamos em frente a um 
                            teste de bancada.
                        </p>
                    </SectionDescription>

                    <SumaryTitle>Para que servem os Testes de Bancada?</SumaryTitle>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                    </SectionDescription>

                    <SumaryTitle>Testes de Bancada são excelentes para:</SumaryTitle>
                    <SumarySubtitle>Protótipos rápidos:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Toda “prototipação” faz parte do design, e quanto mais rápido e barato for o protótipo, melhor. 
                            Valoriza-se, nesta época de experimentação constante, a velocidade com que a inovação chega até 
                            o usuário – afinal é ele, e somente ele, que é capaz de definir se o caminho tomado pela 
                            empresa está correto. 
                            É uma visão muito diferente de levar 3 anos desenvolvendo um produto e construindo uma fábrica 
                            para produzi-lo, para só então fazer o lançamento de um produto, quando só então o usuário 
                            poderá dizer algo a respeito dele ! Isso não faz muito sentido!
                            Considerando este ponto de vista, os testes de bancada são ideais para fazermos os primeiros 
                            protótipos, mais simples, que nos ajudem a visualizar o que havia sido conceituado no briefing. 
                            Como sugestão, inclusive, mesmo antes do briefing ser preenchido e um projeto completo de P&D 
                            ser iniciado, devemos testar em bancada a viabilidade do projeto ou da idéia. 
                            Hoje, aproveitando de nossa maior experiência, sugerimos protótipos – e não só ideias – para as 
                            mesas de reunião com nossos clientes, onde propomos diretrizes e traçamos estratégias conjuntas 
                            para cada caso de um projeto.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Ajustes de Formulação Iniciais:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Num teste simples de bancada, já é possível perceber necessidades de ajuste da formulação, 
                            ajustes de características físicas e até mesmo químicas, entre outras, que já são facilmente 
                            determinadas por estes primeiros testes de bancada que acontecem em escala diminuta e, assim, 
                            evitam que se gaste demais em matérias-primas ou em fórmulas desbalanceadas.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Observação de Funcionalidades básicas:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Considerando como funcionalidades, já conseguimos prever o que o produto tem como 
                            características básicas. Nos testes de bancada já é possível perceber uma boa gama destas 
                            funcionalidades, o que faz com que permaneçamos neste nível de testes por uma parte 
                            significativa do trabalho de desenvolvimento. Só iremos para o próximo nível quando tivermos 
                            certeza de que alcançamos um produto com as funcionalidades básicas adequadas ao projeto.
                            Equipamentos de pequena escala não definem exatamente um possível processo industrial, porque 
                            estão ainda distantes dessa realidade. Há toda uma ciência por trás do scale-up de processos. 
                            Mas os testes de bancada nos trarão informações valiosas e, usando dessa experiência, 
                            criatividade e capacidade de observação, poderão inferir como o produto se comportará num 
                            futuro processo de produção industrial.
                            Um projeto industrial de sucesso deve passar sempre por um bom planejamento, um adequado 
                            projeto de desenvolvimento, ser feito em áreas adequadas, através de profissionais 
                            especializados. E os desenvolvimentos em bancada em plantas-piloto são, sem dúvida nenhuma, 
                            uma ferramenta imprescindível para o nascimento de um produto de sucesso!
                        </p>
                    </SectionDescription>
                </Section>

                <Section>
                    <SectionTitle className='font-size-25 margin-bottom'>Testes em Planta Piloto</SectionTitle>

                    <SumaryTitle>O que são?</SumaryTitle>
                    <SectionDescription className='margin-top'>
                        <p>
                            Os testes realizados em planta-piloto diferem dos testes de bancada por um fator bastante importante: eles reproduzem, 
                            mesmo que em escala reduzida, a produção e os processos envolvidos nela, assim como as ferramentas utilizadas.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top'>
                        <p>
                            Resumindo: é como se fosse feita uma espécie de “maquete” do modelo de produção, no qual os especialistas analisam 
                            como o produto se comporta dentro deste processo.
                        </p>
                    </SectionDescription>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            Atenção: os testes em planta-piloto demandam o uso de equipamentos e processos semelhantes, portanto, não se 
                            trata apenas de um teste de bancada mais produzido.
                        </p>
                    </SectionDescription>

                    <SumaryTitle>Principais Vantagens</SumaryTitle>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            Para ser considerado um teste de planta-piloto, é necessário reduzir a escala, porém, sem grandes desvios na forma de produzir. 
                            Os principais ganhos que a empresa tem com os testes em planta-piloto são:
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Refino e definição de processos:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Ao utilizar um simulacro da produção industrial, a empresa pode avaliar como estão definidos os processos de produção e 
                            se há ajustes a serem feitos para otimizar a cadeia de produção.
                        </p>
                    </SectionDescription>
                    <SectionDescription>
                        <p>
                            A planta-piloto concede flexibilidade de teste para as condições de processo e o impacto deles nas funcionalidades 
                            básicas do produto.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>“Estresse do produto”:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Com a reprodução do modelo industrial, a empresa pode averiguar a capacidade de estresse do produto, ou seja, as condições 
                            de produção quando os processos estão próximos ao seu limite. Esse tipo de análise serve para conferir a estabilidade do 
                            produto e se há mudanças na funcionalidade quando a escala de produção está próxima do máximo e como ele se comporta em 
                            casos extremos ou emergenciais na linha de produção.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Realização de testes em protótipos mais desenvolvidos:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Se a bancada é lugar ideal para testes em protótipos que estão engatinhando em sua concepção, a planta-piloto permite o teste para 
                            protótipos em avançado teste de produção. Já são englobadas todas ou quase todas as funcionalidades esperadas no produto, o que ajuda 
                            a ampliar o realismo envolvido nos testes.
                            Vai ser na análise da planta piloto que a equipe de P&D poderá analisar a viabilidade do projeto em todas as suas esferas.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Análise de funcionalidades estendidas:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Já que a planta-piloto está próxima da realidade industrial, os testes realizados ali também funcionam para averiguar 
                            as funcionalidades estendidas do produto em análise.
                        </p>
                    </SectionDescription>
                    <SectionDescription>
                        <p>
                            Pode-se testar se haverá problemas como separação de fase, mudança de textura após alguns dias, processabilidade de 
                            ingredientes da formulação, análise de aditivos e avaliações sensoriais, entre outras.
                        </p>
                    </SectionDescription>
                    <SectionDescription>
                        <p>
                            É possível realizar diversos testes, tudo vai depender dos aspectos que a empresa pretende analisar antes de dar o 
                            próximo passo, que são os testes industriais.
                        </p>
                    </SectionDescription>
                </Section>

                <Section>
                    <SectionTitle className='font-size-25 margin-bottom'>Testes Industriais</SectionTitle>

                    <SumaryTitle>O que são?</SumaryTitle>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            Por fim, temos os testes industriais. Na progressão lógica dos testes de P&D, fica evidente que esse teste 
                            se trata de uma análise realizada com as mesmas condições de produção em larga escala.
                            Aqui, saem de cenas os simulacros e análises mais rasas para dar lugar à um teste mais preciso. A precisão é a 
                            palavra de ordem no teste industrial, afinal, o que os pesquisadores querem é saber a real condição do produto 
                            durante o processo completo de produção.
                            O teste industrial precisa ser grande o suficiente para reproduzir a realidade, portanto, costumam ser procedimentos 
                            mais custosos para a empresa.
                            Apesar de ter um custo elevado, é necessário fazer esse teste, em muitos casos será necessário mais de um teste industrial 
                            para obter a precisão analítica desejada.
                        </p>
                    </SectionDescription>

                    <SumaryTitle>Principais Ganhos</SumaryTitle>
                    <SectionDescription className='margin-top margin-bottom'>
                        <p>
                            Para ser considerado um teste de planta-piloto, é necessário reduzir a escala, porém, sem grandes desvios na forma de produzir. 
                            Os principais ganhos que a empresa tem com os testes em planta-piloto são:
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Maior definição de processos:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            O nível de detalhamento dos processos de produção é amplo nos testes industriais. Por serem a simulação mais 
                            verossímil que a empresa realiza, fica bem claro quais são os processos adotados e seus impactos.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Avaliação Completa das Funcionalidades:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            O teste industrial vai permitir que a empresa tire as dúvidas finais e faça seu veredito sobre as funcionalidades 
                            do produto e como elas se comportam na linha de produção.
                        </p>
                    </SectionDescription>

                    <SumarySubtitle>Testes de Shelf-Life:</SumarySubtitle>
                    <SectionDescription>
                        <p>
                            Os testes de Shelf-Life têm como finalidade analisar como o produto se comporta nas condições esperadas para as 
                            prateleiras, ou seja, após finalizado todo o processo de produção. Ele permite análise precisa de vida útil do 
                            produto, assim como seu índice de deterioração e quais as alterações sofridas nas principais funcionalidades do 
                            produto.
                        </p>
                    </SectionDescription>
                </Section>

                <Section style={{ marginBottom: '-50px' }}>
                    <FacilitiesSection style={{ padding: '38px' }}>
                        <h2 className='whitout-uppercase'>Conclusão</h2>

                        <SectionDescription>
                            Todos esses testes visam apenas um objetivo: criar um produto de qualidade. O mercado clama por produtos seguros, 
                            saudáveis, confiáveis e que supram suas necessidades de consumo. 
                            Os testes são parte indexável do processo de produção, portanto, é fundamental para qualquer profissional de 
                            P&D saber quais são os tipos de testes, como é feita sua condução e quais são os critérios analíticos envolvidos 
                            nesta demanda.
                        </SectionDescription>
                    </FacilitiesSection>
                </Section>
            </Container>

            <MapSection />
            <ContactFormSection />
        </>
    );
};