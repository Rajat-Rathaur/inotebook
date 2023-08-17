import { Router } from 'express';
const noterouter = Router();
import { model } from 'mongoose';
import fetchUser from '../middleware/fetchUser.js'
import Note from '../models/Note.js';
import { body, check, validationResult } from 'express-validator';

noterouter.get('/fetchAllNotes',fetchUser,async(req, res)=>{
    try{
    const notes=await Note.find({user: req.user. id})
    res.json(notes)
    }catch(error){
        console.error(error.message);
        res.status(500).send("internal server error")
    }
})

noterouter.post('/addnote', fetchUser, [
    body('title', 'Enter a valid ttle').isLength({min : 3}),
    body('description', 'Description must be atleast 5 characters').isLength({min:5}),
], async (req, res)=>{
    try{
    const {title, description ,tag} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});

    }
    const note = new Note({
        title, description, tag, user: req.user.id
    })
   const saveNote = await  note.save()
    res.json(saveNote)
} catch(error){
    console.error(error.message);
    res.status(500).send("internal server error")
}

})

noterouter.put('/updatenote/:id', fetchUser, async(req, res)=>{
    try{
const {title, description , tag} = req.body;
const newNote = {};
if(title){newNote.description = description };
if(tag){newNote.tag = tag}
let note = await Note.findById(req.params.id);
if(!note){res.status (404).send("not found")}
if(note.user.toString()!==req.user.id){
    return res.status(401).send("Not Allowed");
}
note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
res.json({note});}catch(error){
    console.error(error.message);
    res.status(500).send("internal server error")}
})


noterouter.delete('/deletenote/:id', fetchUser, async(req, res)=>{
    try{
    const{ title, description, tag } =req.body;
    let note=await Note.findOneAndDelete ({_id:req.params.id });
    if(!note){return res.status(404).send("Not Found ")}
    if(note.user.toString()!==req.user.id){
        return res.status(401).send ("UnAuthorized User ");
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"success":"Note has been deleted", note: note})
}catch(error){
    console.error(error.message);
    res.status(500).send("internal server error")}
})

export default noterouter