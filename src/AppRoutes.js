import { useState } from 'react';
import {Routes,BrowserRouter as Router, Route,Navigate, } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import {AuthContext} from './contexts/auth';

const AppRoutes = () => {

    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", {email, password});
        setUser({id:"1", email})
    }

    const logout = () => {
        console.log("logout");
    }

    return (
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, user, login}} >
                <Routes>
                    <Route exact path='/' element={<HomePage/> }  />
                    <Route path='/login' element={<LoginPage/>} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    );
}

export default AppRoutes;