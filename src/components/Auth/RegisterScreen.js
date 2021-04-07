import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  validator from 'validator';
import { starRegisterEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {

     const dispatch = useDispatch();

     const {ui} = useSelector(state => state);

    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid() ){
            dispatch( starRegisterEmailPasswordName(email, password, nombre))
        }              
    }

    const esteElemento = "register";

    const { nombre, email, password, password2 } = formValues;
    const isFormValid=()=>{

        if(nombre.trim().length === 0) {
            dispatch(setError('Nombre necesario'));
            return false;
        } else if( email.trim().length === 0 ){
            dispatch(setError('Correo no es valido'));
            return false;
        }
        else if( !validator.isEmail(email) ){
            dispatch(setError('Correo no es valido'));
            return false;
        } else if( password.length < 5 ){
            dispatch(setError('La constraseña no cumple con los parametros necesarios'));
            return false;
        } else if( password !== password2 ){
            dispatch(setError('Las contraseñas no coinciden'));
            return false;
        }
        dispatch(removeError())
        return true;
    }
    return (
        <>
        <h3 className={`${esteElemento}__title`}>{ esteElemento.toUpperCase()  }</h3>

        <form onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__slower">
            {
                ui.msgError &&
                <div className={`${esteElemento}__alert-error`}>{ui.msgError}</div>
            }
            <input type="text"
                    placeholder="Nombre"
                    name="nombre"
                    className={`${esteElemento}__input`}
                    value={nombre}
                    onChange={handleInputChange}/>

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

            <input type="password"
                    placeholder="Confirma tu Password"
                    name="password2"
                    className={`${esteElemento}__input`}
                    value={password2}
                    onChange={handleInputChange}/>

            <button type="submit"
                    className="btn btn-primary btn-block">
                        Register
            </button>

            
            <div className={`${esteElemento}__socialNet`}><p>Login con Social Media</p></div>
            <div className="google-btn">
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Register with google</b>
                </p>
            </div>
            <Link to="/aut/login">
                Inicia Sesión
            </Link>

        </form>
    </>
    )
}
