import React from 'react';

const NationalInfo = ({ desData }) => {
    return (
        <>
            <h4>National ID</h4>
            <p><strong>ID Name:</strong> {desData.id.name}</p>
            <p><strong>ID Value:</strong> {desData.id.value}</p>
        </>
    );
};

export default NationalInfo;