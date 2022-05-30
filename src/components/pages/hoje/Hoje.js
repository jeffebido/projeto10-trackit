import React from 'react';
import styled from 'styled-components';

import Topo from '../../layout/topo/Topo';
import Menu from '../../layout/menu/Menu';

import CheckIcon from '../../../img/check.svg';


export default function Hoje() {

    return (
        
        <>  
            <Topo/>
                <div className="container">
                    <div className="page-heading">
                        <h1 className="page-title">Meus hábitos <span className="">sdsd</span></h1>
                        
                    </div>

                    <Card>
                        <div>
                            <p className="card-title">sdsdsdsd</p>
                            <p className="card-info"> Sequência atual: </p>
                            <p className="card-info"> Sequência atual: </p>
                        </div>
                        <div className="check-box">
                            <img src={CheckIcon}></img>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <p className="card-title">sdsdsdsd</p>
                            <p className="card-info"> Sequência atual: </p>
                            <p className="card-info"> Sequência atual: </p>
                        </div>
                        <div className="check-box">
                            <img src={CheckIcon}></img>
                        </div>
                    </Card>
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
    .check-box{
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #EBEBEB;
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


