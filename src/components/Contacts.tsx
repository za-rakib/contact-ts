import React, { useState } from "react";
import Contact from "./Contact";
import Button from "./UI/Button";


interface IContact {
  name: string;
  email: string;
}
const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);
  const handleContactList = () => {
    setContactList([...contactList, contact]);
    setContact({
      name: "",
      email: "",
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleRemove = (email: string) => {
    const newContactList = contactList.filter((con) => con.email !== email);
    setContactList(newContactList);
  };
  return (
    <div>
      <h1> Add a new contact</h1>
      <div className="form">
        <input
          value={contact.name}
          onChange={onChange}
          name="name"
          placeholder="Contact Name"
          type="text"
        />
        <input
          value={contact.email}
          onChange={onChange}
          name="email"
          placeholder="Contact Email"
          type="email"
        />
        <Button onClick={handleContactList}>Add Contact</Button>
      </div>
      <h1>Contact List</h1>
      {contactList.map((contact) => (
        <Contact
          key={contact.name}
          name={contact.name}
          email={contact.email}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Contacts;
