import React, { useState } from "react";
import noteContext from "./notesContext";
const NoteState = (props)=>{
    const notesInitial =[ {
        "user": "64cd29e23ef668be155138bd",
        "title": "My title ",
        "description": "Please wake up early updated",
        "tag": "personal updated",
        "date": "2023-08-12T18:51:12.677Z",
        "_id": "64d7d568f51cd167646b980b",
        "__v": 0
    },{
        "user": "64cd29e23ef668be155138bd",
        "title": "My title ",
        "description": "Please wake up early updated",
        "tag": "personal updated",
        "date": "2023-08-12T18:51:12.677Z",
        "_id": "64d7d568f51cd167646b480c",
        "__v": 0
    },{ "user": "64cd29e23ef668be155138bd",
    "title": "My title ",
    "description": "Please wake up early updated",
    "tag": "personal updated",
    "date": "2023-08-12T18:51:12.677Z",
    "_id": "64d7d568f51cd167646b480b",
    "__v": 0}]
    const [notes, setNotes] = useState(notesInitial);

    const addNote = (title, description, tag)=>{
     const   note = {"user": "64cd29e23ef668be155138bd",
        "title": "My title ",
        "description": "Please wake up early updated",
        "tag": "personal updated",
        "date": "2023-08-12T18:51:12.677Z",
        "_id": "64d7d568f51cd167646b480b",
        "__v": 0}
        setNotes(notes.concat(note))
    }
   
    
    
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;