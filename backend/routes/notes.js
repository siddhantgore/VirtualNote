const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Note = require("../models/Notes");

//ROUTE 1:-Fetch all the notes GET:"/api/notes/fetchallnotes": Require Authentication
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2:-Add Notes POST:"/api/notes/addnote": Require Authentication
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter Title").isLength({min: 1}),
    body("description", "Description must be greater than 5 chars").isLength({min: 5}),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //generate error if data validation fails
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 2:-Update Note PUT:"/api/notes/updatenote/:id": Require Authentication
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try {
      const {title,description,tag}=req.body
      //create new note object
      const newNote={}
      if(title){newNote.title=title}
      if(description){newNote.description=description}
      if(tag){newNote.tag=tag}

      //find note which user want to update
      let note =await Note.findById(req.params.id)
      if(!note){return res.status(404).send("Not Found")}
      if(note.user.toString()!==req.user.id){
          return res.status(401).send("Not Allowed")
      }

      note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
      res.json(note)


    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

//ROUTE 2:-Delete Note DELETE:"/api/notes/deletenote:id": Require Authentication
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {

    //find note which user want to delete
    let note =await Note.findById(req.params.id)
    if(!note){return res.status(404).send("Not Found")}

    //check is user own the note which he/she want to delete
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed")
    }

    note=await Note.findByIdAndDelete(req.params.id)
    res.json("Note Deleted Successfully")


  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
