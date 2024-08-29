import React from 'react';

const PersonalInfo = ({ desData }) => {
    return (
        <>
            <h4>Personal Information</h4>
            <p><strong>Gender:</strong> {desData.gender}</p>
            <p><strong>Age:</strong> {desData.dob.age} (Born on {new Date(desData.dob.date).toLocaleDateString()})</p>
        </>
    );
};

export default PersonalInfo;