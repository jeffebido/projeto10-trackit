import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'


import axios from "axios";

import Logo from '../../../img/logo.png';

export default function Cadastro() {

    const navigate = useNavigate();
    

    const [formEmail, setFormEmail] = useState("");
    const [formSenha, setFormSenha] = useState("");
    const [formNome, setFormNome] = useState("");
    const [formFoto, setFormFoto] = useState(""); 

    const [formDisabled, setFormDisabled] = useState(false);

    function enviaForm (event) {
		event.preventDefault();
        
        setFormDisabled(true);
        

		axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: formEmail,
            name: formNome,
            image: formFoto,
            password: formSenha
		})
        .then( response => {
            
            navigate("/");
        } )
        .catch((err) => {

            console.error(err);
            alert("Dados inválidos!");
            setFormDisabled(false);
        });
	}
    
    return (
        
        <Container>
            <Header className="flex-center">
                <img src={Logo} />
            </Header>
            <form  onSubmit={enviaForm}>
                <input type="email" placeholder="email" value={formEmail} onChange={e => setFormEmail(e.target.value)} className="form-field" required disabled={formDisabled} ></input>
                <input type="password" placeholder="senha" value={formSenha} onChange={e => setFormSenha(e.target.value)} className="form-field" required disabled={formDisabled} ></input>
                <input type="text" placeholder="nome" value={formNome} onChange={e => setFormNome(e.target.value)} className="form-field" required disabled={formDisabled} ></input>
                <input type="text" placeholder="foto" value={formFoto} onChange={e => setFormFoto(e.target.value)} className="form-field" required disabled={formDisabled} ></input>

                <Submit type="submit" > {formDisabled ? <ThreeDots color="#FFFFFF" height={40} width={40} /> : "Cadastrar"} </Submit>
            </form>
            <Footer className="flex-center">
                <Link to={`/`} >
                    Já tem uma conta? Faça login!
                </Link>
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
const Submit = styled.button`
	background: #52B6FF;
	border-radius: 5px;
	font-size: 20px;
	line-height: 26px;
	
	color: #fff;
	border: none;
	cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    max-height: 45px;
`;