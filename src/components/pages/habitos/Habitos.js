import {useState, useEffect, setState} from 'react';
import styled from 'styled-components';
import Topo from '../../layout/topo/Topo';
import Menu from '../../layout/menu/Menu';
import axios from "axios";

import { ThreeDots } from  'react-loader-spinner'
import {useAuth} from "../../../providers/Auth"; 

import TrashIcon from '../../../img/trash.svg';

function HabitoCard({nome, dias, id}){

    const {user} = useAuth();
    
    function deleta(){
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        
       
       
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,  config);

        promise.then(response => {
            
            window.location.reload(false);
        });
    }

    return (
        <Card className="mt-10" key={id}>
            <div className="card-title">
                <h2> {nome} </h2>
                <img src={TrashIcon} onClick={() => deleta()} ></img>
            </div>
            <div className={ dias.find( el => el == 1 ) ? "box-day active" : "box-day"  } >D</div>
            <div className={ dias.find( el => el == 2 ) ? "box-day active" : "box-day"  }>S</div>
            <div className={ dias.find( el => el == 3 ) ? "box-day active" : "box-day"  }>T</div>
            <div className={ dias.find( el => el == 4 ) ? "box-day active" : "box-day"  }>Q</div>
            <div className={ dias.find( el => el == 5 ) ? "box-day active" : "box-day"  }>Q</div>
            <div className={ dias.find( el => el == 6 ) ? "box-day active" : "box-day"  }>S</div>
            <div className={ dias.find( el => el == 7 ) ? "box-day active" : "box-day"  }>S</div>

        </Card>
    );
}

export default function Habitos() {

    const {user} = useAuth();

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [hiddenForm, setHiddenForm] = useState(true);
    const [diasHabitos, setDiasHabitos] = useState([]);
    const [listaHabitos, setListaHabitos] = useState([]);
    const [formNome, setFormNome] = useState("");

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise.then(response => {


            setListaHabitos(response.data);
            console.log(response.data);
            
        });

     
    }, []);


    function handleCheckbox (val){
        let newArray = [...diasHabitos, val];

        if (diasHabitos.includes(val)) {
          newArray = newArray.filter(day => day !== val);
        }
        setDiasHabitos(newArray);
    };

    function enviaForm (event) {

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

		event.preventDefault();
        
        setBtnDisabled(true);
        
        
		axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            
            name: formNome,
            days: diasHabitos 
            
		}, config)
        .then( response => {
            window.location.reload(false);
        } )
        .catch((err) => {
            
        });
	}

    return (
        
        <>  
            <Topo/>
                <div className="container">
                    <div className="page-heading">
                        <h1 className="page-title">Meus hábitos</h1>
                        <button className="btn btn-new" onClick={() => setHiddenForm(false)}>+</button>
                    </div>

                    <Card className="card-novo-habito" hiddenForm={hiddenForm}>
                        <form onSubmit={enviaForm}>
                            <input type="text" placeholder="nome do hábito" value={formNome} onChange={e => setFormNome(e.target.value)} className="form-field"></input>

                            <input type="checkbox" id="check_1" name="check_1" value="1"  onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_1">D</label>

                            <input type="checkbox" id="check_2" name="check_2" value="2" onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_2">S</label>

                            <input type="checkbox" id="check_3" name="check_3" value="3" onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_3">T</label>

                            <input type="checkbox" id="check_4" name="check_4" value="4" onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_4">Q</label>

                            <input type="checkbox" id="check_5" name="check_5" value="5" onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_5">Q</label>

                            <input type="checkbox" id="check_6" name="check_6" value="6" onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_6">S</label>

                            <input type="checkbox" id="check_7" name="check_7" value="7" onChange={e => handleCheckbox(e.target.value)} />
                            <label htmlFor="check_7">S</label>


                            <BotoesForm>
                                <button className="btn btn-outline" onClick={() => setHiddenForm(true)}>Cancelar</button>
                                <button className="btn" type="submit">{btnDisabled ? <ThreeDots color="#FFFFFF" height={40} width={40} /> : "Salvar"} </button>
                            </BotoesForm>
                        </form>

                    </Card>

                    { listaHabitos === null ? (<p className="pt-30">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>): (

                        listaHabitos.map( habito => <HabitoCard nome={habito.name} dias={habito.days}  id={habito.id} key={habito.id}/> ) 

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
    display: ${
      props => props.hiddenForm ? "none" :  "block"
    };
    input[type="checkbox"]:not(:checked), 
    input[type="checkbox"]:checked {

        display: none;
    }

    label, .box-day {
        display: inline-flex;
        cursor: pointer;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
        background-color: #fff;
        margin-left: 5px;
        height: 30px;
        width: 30px;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin-top: 10px;
    }

    input[type="checkbox"]:checked + label, .box-day.active {
        background: #CFCFCF;
        color: #fff;
    }

    .card-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: #666666;
        }
        img{
            height: 15px;
            width: auto;
            cursor: pointer;
        }
    }
    
`;
const BotoesForm = styled.div`
	display: flex;
    align-items: center;
    justify-content: right;
    .btn:disabled{
        opacity: 0.6;
    }
`;