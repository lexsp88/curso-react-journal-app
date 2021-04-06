import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'
export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    
    localStorage.setItem('lastpath', rest.location.pathname)
    return (

        <Route { ...rest }
        
            component={ ( props ) => (
                (isAuthenticated)
                    ? <Component { ...props } />
                    : <Redirect to="/auth/login"/>
            ) }   
        />
    )
}


PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}