import styled from 'styled-components';

//Botão de Scroll Down
const Container = styled.div`
  position: absolute;
  bottom: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Título do botão
const ScrollDown = styled.div`
  font-size: 12px;
  color: #AFAFAF;
  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif ;
`;

//Cículo do botão
const Button = styled.div`
  padding: 1.1rem 0.75rem;
  border: solid 1px white;
  border-radius: 9999px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;


const ScrollDownButton = () => {

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
      <Container>
      <ScrollDown onClick={scrollToNextSection}>
        SCROLL DOWN
        </ScrollDown>
        <Button>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" >
        <path d="M1.00001 1L10.8039 9.33515L20.6078 1" stroke="#ACC1CC" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> 
        </Button>
      </Container>
  );
};

export default ScrollDownButton;
