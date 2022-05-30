import React from 'react';
import styled from 'styled-components';

import Logo from '../../../img/logo.png';

export default function Cadastro() {

    return (
        
        <Container>
            <Header className="flex-center">
                <img src={Logo} />
            </Header>
            <form>
                <input type="email" placeholder="email" className="form-field"></input>
                <input type="password" placeholder="senha" className="form-field"></input>
                <input type="text" placeholder="nome" className="form-field"></input>
                <input type="text" placeholder="foto" className="form-field"></input>

                <Submit type="submit" value="Cadastrar" className="btn"></Submit>
            </form>
            <Footer className="flex-center">
                <a>Já tem uma conta? Faça login!</a>
            </Footer>
        </Container>
        
    )
}


/* --- STYLES --- */
const Container = styled.div`
	width: 100%;
	height: 100%;
	background: #FFF;
    padding-left: 36px;
    padding-right: 36px;
    input{
        width: 100%;
    }
`;
const Header = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    img{
        margin: 0 auto;
    }
`;
const Footer = styled.div`
    padding-top: 25px;
    a{
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        cursor: pointer;
    }
`;
const Submit = styled.input`
	background: #52B6FF;
	border-radius: 5px;
	font-size: 20px;
	line-height: 26px;
	padding: 10px;
	color: #fff;
	border: none;
	cursor: pointer;
`;