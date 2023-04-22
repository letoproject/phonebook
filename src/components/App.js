import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("Contact list did update");
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    contacts.forEach((el) => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

    const newContact = {
      id: nanoid(2),
      name,
      number,
    };

    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value.trim());
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={s.container}>
      <h1 className={s.div1}>Phonebook</h1>
      <p className={s.div4}>All contacts: {contacts.length}</p>

      <ContactForm onSubmit={addContact} />

      <h2 className={s.div3}>Contacts list</h2>

      {contacts.length > 0 ? (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            filteredContacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        </>
      ) : (
        <p>Contact list is empty now. Please add your contact</p>
      )}
    </div>
  );
};

export default App;
