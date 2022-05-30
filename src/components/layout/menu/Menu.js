import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link, useNavigate } from "react-router-dom";

import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {

    const percentage = 66;

    return (
        <>  
            <Footer>
                <Link to={`/habitos`} >
                    <Btn>
                        Hábitos
                    </Btn>
                </Link>
                <Progressbar>
                    <CircularProgressbar value={percentage}  text="Hoje"/>
                </Progressbar>
                <Link to={`/historico`} >
                    <Btn>
                        Histórico
                    </Btn>
                </Link>
            </Footer>
        </>
        
    )
}

/* --- STYLES --- */
const Footer = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px;
    padding-left: 36px;
    padding-right: 36px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Btn = styled.div`
    color: #52B6FF;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;
`;
const Progressbar = styled.div`
    background: #52B6FF;
    border-radius: 50%;
    padding: 6px;
    height: 90px;
    width: 90px;
    bottom: 20px;
    position: relative;
    .CircularProgressbar-path {
        stroke: #fff;
    }
    .CircularProgressbar-trail {
        stroke: none;
    }
    .CircularProgressbar-text {
        fill: #fff;
    }
    .CircularProgressbar-background {
        fill: #52B6FF;
    }
`;