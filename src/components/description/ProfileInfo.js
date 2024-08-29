import React from 'react';

const ProfileInfo = ({ desData ,image}) => {
    return (
        <>
            <div className='img_size'>
                <img src={image} alt={`${desData.name.first} ${desData.name.last}`} className='image_style' />
            </div>
            <h4 className='text-center'>{desData.name.title} {desData.name.first} {desData.name.last}</h4>
        </>
    );
};

export default ProfileInfo;