import React from "react";
import { useState, useEffect } from 'react';
import shortid from 'shortid';

import  ContactList  from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import  Filter  from "./Filter/Filter";




export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (name === '') {
      alert(`Введите, пожалуйста, имя контакта.`);
      return;
    }

    if (number === '') {
      alert(`Введите, пожалуйста, номер телефона контакта.`);
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={addContact}  />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        
          <ContactList
            contacts={getVisibleContacts()}
            onRemoveContact={deleteContact}
          />
        
      </div>
    );
  }

