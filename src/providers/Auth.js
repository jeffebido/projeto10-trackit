import { createContext, useEffect, useState, useContext  } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => { 

    const [user, setUser] = useState({
        id: '',
        name: '', 
        image: '', 
        email: '',
        password: '', 
        token: ''
    });

    useEffect(() => {
        const userStorage = localStorage.getItem("user");
        if (userStorage) {
          setUser(JSON.parse(userStorage));
        } else {
          setUser({
            id: '',
            name: '', 
            image: '', 
            email: '',
            password: '', 
            token: ''
          });
        }
    }, []);
    
    return(
        <AuthContext.Provider value ={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);