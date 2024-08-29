import React from 'react';

const LocationInfo = ({ desData }) => {
    return (
        <>
            <h4>Location</h4>
            <p><strong>Street:</strong> {desData.location.street.number}, {desData.location.street.name}</p>
            <p><strong>City:</strong> {desData.location.city}</p>
            <p><strong>State:</strong> {desData.location.state}</p>
            <p><strong>Country:</strong> {desData.location.country}</p>
            <p><strong>Postcode:</strong> {desData.location.postcode}</p>
            <p><strong>Coordinates:</strong> {desData.location.coordinates.latitude}, {desData.location.coordinates.longitude}</p>
            <p><strong>Timezone:</strong> {desData.location.timezone.description} (Offset: {desData.location.timezone.offset})</p>
        </>
    );
};

export default LocationInfo;