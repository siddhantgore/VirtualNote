import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import List from './List'; 

export default function Search() {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')
    const hots = "http://localhost:5000/api/notes/";

    // const getNotes_New = async () => {
    //     console.log("Adding new note");
    
    //     const response = await fetch(`${hots}fetchallnotes`, {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "auth-token":localStorage.getItem('token')
    //       },
    //     });
    //     const json= await response.json()
    //     return json;
    //   };

    useEffect(() => {
        
    const API_URL = `${hots}fetchallnotes`
        axios
            .get(API_URL)
            .then(res => {
                const contacts = res.data
                setContacts(contacts)
            })
    }, [])

    const filteredContacts = search.length === 0 ? contacts : 
    contacts.filter(contact => contact.full_name.
                toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h3>CONTACTS LIST</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            <List contacts={filteredContacts}/>
        </div>
    )
}