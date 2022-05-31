import { createContext, useEffect, useState, useContext  } from 'react';
import axios from "axios";

import {useAuth} from "../providers/Auth"; 

export const ButtonContext = createContext({});

export const ButtonProvider = (props) => { 

    const [percent, setPercent] = useState(0);
    const {user} = useAuth();

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promise.then(response => {

            setPercent( (response.data.filter((el) => el.done).length / response.data.length) * 100  );
        });

     
    }, []);
    
    return(
        <ButtonContext.Provider value ={{ percent, setPercent }}>
            {props.children}
        </ButtonContext.Provider>
    )
}
export const useBtn = () => useContext(ButtonContext);