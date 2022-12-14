const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getAllNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/notecreate', async (req, res) => {
    try {
      let note = await Note.notecreate(req.body);
      res.send({...note})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/edit', async (req, res) => {
    try {
      let note = await Note.editNotes(req.body);
      res.send({...note, password: undefined});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  .delete('/delete', async (req, res) => {
    try {
        Note.deleteNote(req.body);
      res.send({success: "Notedeleted.. :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })



  
module.exports = router;