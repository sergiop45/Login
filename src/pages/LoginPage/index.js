import React, { useState, useContext} from 'react';

import "./style.css";
import {AuthContext} from '../../contexts/auth';


const LoginPage = () => {
   const {authenticated, login} = useContext(AuthContext);
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");


   
    const handleSubmit = (e) => {
        alert("submit");
        e.preventDefault();
        login(email, pass);
    }

    
   
        return(
            <div className='login'>
                <h2>Login do Sistema</h2>
                <p>{String(authenticated)}</p>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" 
                        name="email" id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>

                    <div className='field'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" 
                        name="password"
                         id='password' 
                         value={pass}
                         onChange={(e) => setPass(e.target.value)}
                         />
                    </div>

                    <div className='actions'>
                        <input type="submit" value="Entrar" />
                    </div>

                </form>
                
            </div>
        );
    
}

export default LoginPage;