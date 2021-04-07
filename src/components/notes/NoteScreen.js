import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDelete } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    const esteElemento = "notes"

    const { active:note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset ] = useForm( note );
    const {  body, title }= formValues;
    const activeId = useRef(note.id)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(note.id !== activeId.current){
            reset ( note ) ;
            activeId.current = note.id
        } 
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues }));

    }, [formValues, dispatch])
    const handleDelete = ( id ) => {
         dispatch(startDelete( activeId ));
     }
    return (
        <div className={`${esteElemento}__mainContent`}>
            <NoteAppBar />

            <div className={`${esteElemento}__content`}>

                <input  type="text"
                        placeholder="Algo genial de titulo"
                        className={`${esteElemento}__titleInput`}
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                        name="title"/>
                <textarea  type="text"
                        placeholder="Algo genial de titulo"
                        className={`${esteElemento}__textarea`}
                        value={ body }
                        onChange={ handleInputChange }
                        name="body"/>

            {   
            (note.url) && 
                <div className={`${esteElemento}__imagen`}>
                    <img
                            src={note.url}
                            alt="imagen" />

                  
                </div>
            }

            </div>

            <button className="btn btn-danger"
                    onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}
