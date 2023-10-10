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
    holder: holderDefaultStyle,
    name: "text-center bg-zinc-100 uppercase m-2 p-6 font-light",
    designation: "mt-6",
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

export const holderDefaultStyle =
  "text-center my-5 tracking-wider font-extralight";
