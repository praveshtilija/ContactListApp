import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Header from "./Header";
import ContactAdd from "./ContactAdd";
import Contacts from "./Contacts";

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setContacts] = useState([]);

  const contactAddHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuidv4(), ...contact}]);
  };

  const contactRemoveHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(getContacts) setContacts(getContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  }, [contacts]);
  
  return (
    <div className="ui container">
        <Header />
        <ContactAdd contactAddHandler={contactAddHandler}> </ContactAdd>
        <Contacts contacts={contacts} getContactId={contactRemoveHandler}> </Contacts>
           
    </div>    
  );
}

export default App;
