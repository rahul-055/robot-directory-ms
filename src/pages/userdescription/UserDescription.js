import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PersonalInfo from '../../components/description/PersonalInfo';
import LocationInfo from '../../components/description/LocationInfo';
import ContactInfo from '../../components/description/ContactInfo';
import Registration from '../../components/description/Registration';
import NationalInfo from '../../components/description/NationalInfo';
import TopTitle from '../../components/title/TopTitle';
import ProfileInfo from '../../components/description/ProfileInfo';

const UserDescription = () => {
    const { state } = useLocation();

    let desData = state.robot.dataVal;
    let image = state.robot.image;

    return (
        <section className='description_sec'>
            <div className='top_ts'>
                <TopTitle />
                <div className='retun_home_btn'>
                    <Link to={`/`} >Home</Link>
                </div>
            </div>
            <div className='pb-4'>
                <div className='container_style'>
                    <ProfileInfo desData={desData} image={image} />
                    <div className='details_style' >
                        <PersonalInfo desData={desData} />
                        <ContactInfo desData={desData} />
                        <LocationInfo desData={desData} />
                        <Registration desData={desData} />
                        <NationalInfo desData={desData} />
                        <Link to='/' className='back'>Back</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDescription;