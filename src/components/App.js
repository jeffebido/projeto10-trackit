import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "../providers/Auth"; 
import {ButtonProvider} from "../providers/Button"; 

import Cadastro from "./pages/cadastro/Cadastro";
import Habitos from "./pages/habitos/Habitos";
import Historico from "./pages/historico/Historico";
import Hoje from "./pages/hoje/Hoje";
import Login from "./pages/login/Login";



export default function App() {

    return (

        <>  
            <AuthProvider>
                <ButtonProvider>   
                    <BrowserRouter>
                        <Routes>

                            <Route path="/cadastro" element={<Cadastro />} />

                            
                                <Route path="/habitos" element={<Habitos />} />
                                <Route path="/historico" element={<Historico />} />
                                <Route path="/Hoje" element={<Hoje />} />
                            

                            <Route path="/" element={<Login />} />

                        </Routes> 
                    </BrowserRouter>
                </ButtonProvider>
            </AuthProvider>
        </>
    );

}

