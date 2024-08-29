import React from 'react';

const ContactInfo = ({ desData }) => {
    return (
        <>
            <h4>Contact Information</h4>
            <p><strong>Email:</strong> {desData.email}</p>
            <p><strong>Phone:</strong> {desData.phone}</p>
            <p><strong>Cell:</strong> {desData.cell}</p>
        </>
    );
};

export default ContactInfo;