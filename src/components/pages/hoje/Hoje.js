import {useState, useEffect, setState} from 'react';
import styled from 'styled-components';
import Topo from '../../layout/topo/Topo';
import Menu from '../../layout/menu/Menu';
import axios from "axios";
import dayjs from 'dayjs';

import { ThreeDots } from  'react-loader-spinner'
import {useAuth} from "../../../providers/Auth"; 

import CheckIcon from '../../../img/check.svg';

function HabitoCard({habito, id}){

    const {user} = useAuth();

    function checkHabito(done){
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        
        const URL = done ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck` : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`;
       
        const promise = axios.post(URL, {}, config);

        promise.then(response => {
            
            window.location.reload(false);
        });
    }

    return (
        <Card key={id} done={habito.done}>
            <div>
                <p className="card-title">{habito.name}</p>
                <p className="card-info"> Sequência atual: <span>{habito.currentSequence} </span></p>
                <p className="card-info"> Seu Recorde: <span>{habito.highestSequence}</span></p>
            </div>
            <div className="check-box" onClick={() => checkHabito(habito.done)}>
                <img src={CheckIcon}></img>
            </div>
        </Card>
    );
}

export default function Hoje() {

    const {user} = useAuth();
    
    const [listaHabitos, setListaHabitos] = useState([]);
    const [habitosConcluidos, setHabitosConcluidos] = useState(0);
    const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domigo"];

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promise.then(response => {


            setListaHabitos(response.data);
            setHabitosConcluidos( response.data.filter((el) => el.done).length );
        });

     
    }, []);



    
    return (
        
        <>  
            <Topo/>
                <div className="container">
                    <div className="page-heading">
                        <h1 className="page-title">
                            
                            {diasSemana[dayjs().day() -1]}, {dayjs().format('DD/MM')}

                            {
                                habitosConcluidos == 0 ? 
                                    <span>Nenhum hábito concluído ainda</span> :
                                    <span className="green">{habitosConcluidos } dos hábitos concluídos</span>
                            }
                            

                        </h1>
                        
                    </div>

                    { listaHabitos === null ? (<p className="pt-30">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>): (

                        listaHabitos.map( habito => <HabitoCard habito={habito} key={habito.id}/> ) 

                    )}
                </div>

            <Menu/>
        </>
        
    )
}
const Card = styled.div`
	padding: 18px;
	width: 100%;
	border-radius: 5px;
	background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    .card-title{
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
    }
    .card-info{
        font-size: 12px;
        line-height: 16px;
        color: #666666;
    }
    .card-info span{
        color: ${
            props => props.done ? "#8FC549" :  "#666666"
        };
    }
    .check-box{
        cursor: pointer;
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${
            props => props.done ? "#8FC549" :  "#EBEBEB"
        };
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        img{
            height: 30px;
            width: auto;
        }
    }
    .check-box.active{
        background: #8FC549;
        border: none;
    }
`;


