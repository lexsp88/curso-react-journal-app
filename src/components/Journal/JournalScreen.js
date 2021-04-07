import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothigSelected } from './NothigSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    const {active} = useSelector(state => state.notes);

    const esteElemento = "journal"
    return (
        <div className={`${esteElemento}__mainContent animate__animated animate__fadeIn animate__slower`}>
            <Sidebar />
            <main>

                {
                    ( active )
                    ? <NoteScreen/>
                    :<NothigSelected />
                }
              
                
            </main>
        </div>
    )
}
