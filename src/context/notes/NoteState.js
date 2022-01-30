import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const initialNotes=
        [
            {
              "_id": "61e5738bdfd82479f61a13ce",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Shopping",
              "description": "Lets go for shopping",
              "tag": "shopping",
              "date": "2022-01-17T13:47:55.047Z",
              "__v": 0
            },
            {
              "_id": "61e58614dfd82479f61a13dd",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:00.935Z",
              "__v": 0
            },
            {
              "_id": "61e58617dfd82479f61a13df",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:03.329Z",
              "__v": 0
            },
            {
              "_id": "61e5738bdfd82479f61a13ce",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Shopping",
              "description": "Lets go for shopping",
              "tag": "shopping",
              "date": "2022-01-17T13:47:55.047Z",
              "__v": 0
            },
            {
              "_id": "61e58614dfd82479f61a13dd",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:00.935Z",
              "__v": 0
            },
            {
              "_id": "61e58617dfd82479f61a13df",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:03.329Z",
              "__v": 0
            },
            {
              "_id": "61e5738bdfd82479f61a13ce",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Shopping",
              "description": "Lets go for shopping",
              "tag": "shopping",
              "date": "2022-01-17T13:47:55.047Z",
              "__v": 0
            },
            {
              "_id": "61e58614dfd82479f61a13dd",
              "user": "61e2eff1415dfb05a1d5376d",
              "title": "Learning",
              "description": "Lets go for Exploring",
              "tag": "edutech",
              "date": "2022-01-17T15:07:00.935Z",
              "__v": 0
            },
          ]

          const [notes,setNotes]=useState(initialNotes)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;