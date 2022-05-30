import React from 'react';
import styled from 'styled-components';

import Topo from '../../layout/topo/Topo';
import Menu from '../../layout/menu/Menu';


export default function Historico() {

    return (

        <>  
            <Topo/>

                <div className="container">
                    <div className="page-heading">
                        <h1 className="page-title">Histórico</h1>
                        
                    </div>
                    <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                    </p>
                </div>

            <Menu/>
        </>
    )
}