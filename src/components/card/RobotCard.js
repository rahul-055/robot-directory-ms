import React from 'react';

const RobotCard = ({ data, onDescriptionClick }) => {
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3'>
            <div className='img_details'>
                <div className='img_size'>
                    <img src={data.image} alt={data.name} />
                </div>
                <div className='details'>
                    <h5>{data.name}</h5>
                    <p>{data.email}</p>
                    <button type='button' className='btn' onClick={() => onDescriptionClick(data.id)}>
                        Description
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RobotCard;
