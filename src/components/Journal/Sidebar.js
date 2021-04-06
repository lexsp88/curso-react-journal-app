import React from 'react'
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
export const Sidebar = () => {

    const esteElemento = 'sidebar'

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth)

    const handleLogout = () =>{
        dispatch( startLogout() );
    }
    const handleEntry = () => {
        dispatch(startNewNote())
    }

    return (


        <aside className={`${esteElemento}__mainContent`}>

            <div className={`${esteElemento}__navbar`}>

                <h3 className="mt-5">
                    HOLA { name.toUpperCase() }
                    
                </h3>
                <button className="btn"
                        onClick = {handleLogout}>
                    LogOut
                </button>

            </div>


            <div className={`${esteElemento}__newEntry`}
                    onClick={handleEntry}>
                <TodayOutlinedIcon style={{ fontSize: 50 }}></TodayOutlinedIcon>
                <p>NewEntry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
