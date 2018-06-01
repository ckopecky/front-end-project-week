import React from 'react';
import './NoteCard.css';
import SingleNoteView from '../NoteView/SingleNoteView';
import { Link } from 'react-router-dom';


const NoteCards = props =>{
    console.log(props.notes)
    return(
        <div className = "main-container">
        {props.notes.map(note =>{
            return(
            <li key={note.id} className ="card-container">
                <div className="text-wrapper">
                       <Link to= {`/notes/${note.id}`} component={SingleNoteView}>
                       <h4 className="link-card">{note.note_title}</h4>
                       </Link>
                       <hr />
                    <p className = "text-body">{note.note_body}</p>
                </div>
            </li>
            )
        })}
        </div>
    )
    

}
        


export default NoteCards;