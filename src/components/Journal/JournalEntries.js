import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const { notes } = useSelector(state => state.notes)

    const esteElemento = "journal__entries"
    

    return (
        
            <div className={`${esteElemento}`}> 
            
                {
                    notes.map( note =>( 
                        <JournalEntry key={ note.id }
                                        {...note}/>
                    ))
                }

            </div>
       
    )
}

