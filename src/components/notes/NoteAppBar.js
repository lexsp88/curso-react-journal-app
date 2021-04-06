import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NoteAppBar = () => {

    const esteElemento = "notesAppBar";
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = () =>{
       
        dispatch(startSaveNote(active));
    };
    return (
        <div className={`${esteElemento}`}>
            <span>27 de marzo de 2021</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn"
                        onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
