import styled from 'styled-components';
import logo from "../assets/svg/logo.svg";

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 7%;
    background: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 30%;
`;

function Header(){
    return(
        <HeaderContainer>
            <Logo src={logo} alt="Logo FIAP" />
        </HeaderContainer>
    );
}

export default Header;
