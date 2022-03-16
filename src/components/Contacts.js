import React from "react";
import ContactInfo from "./ContactInfo";

const Contacts = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContacts = props.contacts.map((contact) => {
        return (
            <ContactInfo contact={contact} clickHandler={deleteContactHandler}
                key={contact.id}></ContactInfo>
          
        );
    });
    return (
        <div className="ui celled list">{renderContacts}</div>

    );
};

export default Contacts;