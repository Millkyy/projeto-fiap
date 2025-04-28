import styled from 'styled-components';
import backgroundHero from "../assets/imgs/header.jpg";

//background image
const HeroContainer = styled.section`
  width: 100%; 
  height: 90vh;
  background: 
    linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.5) 65%),
    url(${backgroundHero}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: left;
`;

//Conteúdo
const Content = styled.div`
  padding-left: 7%;
  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif ;
  font-size: 80px;
`;

//Título
const Title = styled.h1`
  -webkit-text-stroke: 1px #ED145B;
  font-weight: 600;
  text-transform: uppercase;
`;

//Subtitulo
const Subtitle = styled.h2`
  color: #ACC1CC;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1.5rem 0;
`;

//Descrição
const Paragraph = styled.p`
  font-size: 20px;
  max-width: 700px;
  color: #AFAFAF;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>A MAIOR FACULDADE</Title>
        <Subtitle>DE TECNOLOGIA</Subtitle>
        <Paragraph>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que
          prepara profissionais para o futuro, com um ensino prático, professores
          atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
        </Paragraph>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;
