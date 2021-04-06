import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { LoginScreen } from '../components/Auth/LoginScreen'
import { RegisterScreen } from '../components/Auth/RegisterScreen'


export const AuthRouter = () => {
    const esteElemento = "auth";
    return (
    
            <div className={`${esteElemento}__main`}> 
                <div className={`${esteElemento}__boxContainer`}>
                    <Switch>
                        <Route exact path="/auth/login" component={LoginScreen}/>
                        <Route exact path="/auth/register" component={RegisterScreen}/>
                        <Redirect to="/auth/register" />
                    </Switch>
                </div>
            </div>
   
    )
}
