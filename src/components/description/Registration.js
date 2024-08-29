import React from 'react';

const Registration = ({ desData }) => {
    return (
        <>
            <h4>Registration</h4>
            <p><strong>Registered:</strong> {new Date(desData.registered.date).toLocaleDateString()} (Age: {desData.registered.age})</p>

        </ >
    );
};

export default Registration;