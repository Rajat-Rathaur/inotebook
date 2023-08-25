import React,{useContext, useState} from 'react';
import AddNote from './AddNote'
import Footer from './Footer';
import Notes from './Notes'


export const Home = (props) => {
const {mode,togglemode,showAlert}=props;
    return (
   <>
     <Notes  mode={mode} togglemode={togglemode} showAlert={showAlert}/>
     <Footer title="Designed by Rajat Rathaur" mode={mode} togglemode={togglemode} fixed={""}/>
   </>
    )
}