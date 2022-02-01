import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const initialNotes=
        [
            {
              "_id": "61e5738bdfd82479f61a13ce1",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Shopping",
              "description": "Lets go for shopping",
              "tag": "shopping",
              "date": "2022-01-17T13:47:55.047Z",
              "__v": 0
            },
            {
              "_id": "61e58614dfd82479f61a13dd2",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:00.935Z",
              "__v": 0
            },
            {
              "_id": "61e58617dfd82479f61a13df3",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:03.329Z",
              "__v": 0
            },
            {
              "_id": "61e5738bdfd82479f61a13ce4",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Shopping",
              "description": "Lets go for shopping",
              "tag": "shopping",
              "date": "2022-01-17T13:47:55.047Z",
              "__v": 0
            },
            {
              "_id": "61e58614dfd82479f61a13dd5",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:00.935Z",
              "__v": 0
            },
            {
              "_id": "61e58617dfd82479f61a13df6",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:03.329Z",
              "__v": 0
            },
            {
              "_id": "61e5738bdfd82479f61a13ce7",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Shopping",
              "description": "Lets go for shopping",
              "tag": "shopping",
              "date": "2022-01-17T13:47:55.047Z",
              "__v": 0
            },
          ]

          const [notes,setNotes]=useState(initialNotes)

          //Add notes
          const addNote=(title,description,tag)=>{
            console.log("Adding new note")
            let note={
              "_id": "61e58614dfd82479f61a13dd84",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2022-01-17T15:07:00.935Z",
              "__v": 0
            }
            setNotes(notes.concat(note))
          }
          //Delete Note
          const deleteNote=(id)=>{
            console.log("deleting id "+id);
            const newNotes=notes.filter((note)=>{return note._id!==id})
            setNotes(newNotes)
          }
          //Edit Note
          const editNote=()=>{

          }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;