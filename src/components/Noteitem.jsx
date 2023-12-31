import React, { useContext } from 'react'
import noteContext from '../context/notes/notesContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const{deleteNote}=context;
  const { note } = props;
  console.log(note)
  return (
    <div className='col-md-3'>

      <div className="card my-3" >

        <div className="card-body">
          <div className="d-flex align-items-centre">
          <h5 className="card-title">{note.title}</h5>  <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id)}}></i><i className="fa-regular fa-pen-to-square"></i>
          </div>
          <p className="card-text">{note.description}</p>
        
          

        </div>
      </div>


    </div>
  )
}

export default Noteitem
