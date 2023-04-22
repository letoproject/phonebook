import React from "react";
import s from './ContactList.module.css'

const ContactList = ({ filteredContacts, onDeleteContact }) => (
  <ul className={s.list}>
    {filteredContacts.map((contact) => (
      <li className={s.item} key={contact.id}>
        {`${contact.name}: ${contact.number}`}
        <button className={s.btn} type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
