import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            console.log(user)
            if(user) history.push("/chats");
        })
    }, [user, history])

    return (
        <AuthContext.Provider value={user}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;