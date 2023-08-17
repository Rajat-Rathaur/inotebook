import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/notesContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context; // Assuming you have a function getNotes in your context to fetch notes

 
return (
  <>
  <AddNote/>
  <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map(note => (
            <Noteitem key={note._id} note={note} />
        ))}
  </div>
  </>
);

        
 
};

export default Notes;