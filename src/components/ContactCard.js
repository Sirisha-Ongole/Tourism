import React from "react";

/**
 * A component that renders a contact card with the given contact information.
 * @param {Object} props - The props object that contains the contact and style properties.
 * @param {Object} props.contact - The contact object that contains the name, designation, location, phone, and email properties.
 * @param {Object} props.style - The style object that contains the custom styles for the contact card.
 * @returns {JSX.Element} - The JSX element that represents the contact card.
 */
export const ContactCard = ({ contact, style }) => {
  const defaultStyles = {
    holder: "text-center text-black my-5",
    name: "bg-zinc-100 uppercase m-2 p-4",
    designation: "",
    location: "",
    phone: "",
    email: "",
  };

  return (
    <>
      {contact && (
        <div className={style?.holder || defaultStyles.holder}>
          <p className={style?.name || defaultStyles.name}>{contact.name}</p>
          {contact.designation && (
            <p className={style?.designation || defaultStyles.designation}>
              {contact.designation}
            </p>
          )}
          {contact.location &&
            contact.location.map((loc, index) => (
              <p
                key={index}
                className={style?.location || defaultStyles.location}
              >
                {loc}
              </p>
            ))}
          {contact.phone && (
            <p className={style?.phone || defaultStyles.phone}>
              Ph: {contact.phone}
            </p>
          )}
          {contact.email && (
            <p className={style?.email || defaultStyles.email}>
              Email - {contact.email}
            </p>
          )}
        </div>
      )}
    </>
  );
};
