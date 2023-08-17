import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/notesContext'

const About = () => {
  const {notes} = useContext(noteContext)
 
  
  return (
    <div>
     hello this is my first not {notes.title}
    </div>
  )
}

export default About
