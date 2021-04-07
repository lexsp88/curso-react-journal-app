import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGLogin, startLoginEmailPass } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const esteElemento = "login";

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch(startLoginEmailPass(email,password));        
    }

    const handleGLogin = (e) => {
        dispatch(startGLogin());
    }
    const { email, password} = formValues;
    return (
        <>
            <h3 className={`${esteElemento}__title`}>{ esteElemento.toUpperCase() }</h3>

            <form onSubmit={handleLogin}
                    className="animate__animated animate__fadeIn animate__slower"> 
                
                <input type="text"
                        placeholder="Email"
                        name="email"
                        className={`${esteElemento}__input`}
                        value={email}
                        onChange={handleInputChange}/>

                <input type="password"
                        placeholder="Password"
                        name="password"
                        className={`${esteElemento}__input`}
                        value={password}
                        onChange={handleInputChange}/>

                <button type="submit"
                        className="btn btn-primary btn-block"
                        disabled={loading}>
                            Login
                </button>

                
                <div className={`${esteElemento}__socialNet`}><p>Login con Social Media</p></div>
                <div className="google-btn"
                        onClick={handleGLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link to="/auth/register">
                    Crear nueva cuenta
                </Link>

            </form>
        </>
    )
}
