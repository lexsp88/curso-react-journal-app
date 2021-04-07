import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
export const JournalEntry = ({id,title,date,body,url}) => {
    const esteElemento = "journal__entry";
    const noteDate = moment(date);
    const dispatch = useDispatch();
  

    const handleEntryClick = () => {
        dispatch(activeNote(id, { date,title,body,url } ) );
    }

    return (
        <div className={`${esteElemento} pointer animate__animated animate__bounce animate__faster`}
                onClick= {handleEntryClick}>
            { url &&
                <div className={`${esteElemento}__picture`}
                style={{ backgroundSize: 'cover',
                        backgroundImage: `url(${url})`}}>
                </div>
            }
            
            <div className={`${esteElemento}__body`}>
                <p className={`${esteElemento}__title`}>
                    { title }
                    </p>
                <p className={`${esteElemento}__content`}>
                    { body }
                </p>
            </div>
            <div className={`${esteElemento}__dateBox`}>
                   <span> {noteDate.format('dddd')}</span>
                   <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
