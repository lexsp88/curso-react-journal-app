import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUpload } from '../../actions/notes'

export const NoteAppBar = () => {

    const esteElemento = "notesAppBar";
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = () =>{
       
        dispatch(startSaveNote(active));
    };

    const handlePic = () =>{
        document.querySelector('#fileSelector').click();
    }

    const HandleFileChange = ( e ) =>{
         const file = e.target.files[0];
         if( file ){
             dispatch(startUpload( file ) );
         }
    }
    return (
        <div className={`${esteElemento}`}>
            <span>27 de marzo de 2021</span>
            <input
            name="file"
            id="fileSelector"
            type="file"
            style={{display: 'none'}}
            onChange={HandleFileChange}/>
            <div>
                <button className="btn"
                        onClick={handlePic}>Picture</button>
                <button className="btn"
                        onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
