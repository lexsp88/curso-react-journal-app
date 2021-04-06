import React from 'react'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

export const NothigSelected = () => {

    const esteElemento = "NothigSelected"
    return (
        <div className={`${esteElemento}__mainContent`}> 
            <p>
                Selecciona una actividad
                <br/>
                O crea una actividad   
            </p>
            <StarBorderOutlinedIcon style={{ fontSize: 100 }} />

        </div>
    )
}
