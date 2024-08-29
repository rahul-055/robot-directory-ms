import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RobotCard from '../../components/card/RobotCard';
import Search from '../../components/search/Search';
import TopTitle from '../../components/title/TopTitle';
import PageLoader from '../../components/loader/PageLoader';
import NoRecordMessage from '../../components/norecordshow/NoRecordMessage';
import UseDebounce from '../../components/customhook/UseDebounce';

const UserList = () => {
    const navigate = useNavigate();

    const [robots, setRobots] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const debouncedSearchTerm = UseDebounce(search, 1000);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=12')
            .then(res => {
                const result = res.data.results.map(userData => ({
                    name: `${userData.name.first} ${userData.name.last}`,
                    email: userData.email,
                    id: userData.login.uuid,
                    image: `https://robohash.org/${userData.login.uuid}.png`,
                    dataVal: userData
                }))
                setRobots(result);
                setIsLoading(false)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        // This effect runs whenever debouncedSearchTerm changes
    }, [debouncedSearchTerm]);

    const handleDescription = (id) => {
        const selectedRobot = robots.find(robot => robot.id === id);
        navigate(`/robot/${id}`, { state: { robot: selectedRobot } })
    }

    const filterRobotData = robots.filter(item =>
        item.name.toLowerCase().includes(debouncedSearchTerm?.toLowerCase()) ||
        item.email.toLowerCase().includes(debouncedSearchTerm?.toLowerCase())
    );

    return (
        <>
            <section>
                <div className='top_ts'>
                    <TopTitle />
                    <Search search={search} setSearch={setSearch} />
                </div>
                {isLoading ? (
                    <PageLoader />
                ) :
                    <>
                        < div className='container mt-4'>
                            {filterRobotData.length !== 0 ?
                                <div className='data_list_box'>
                                    <div className='row'>
                                        {filterRobotData.map((data) =>
                                        (
                                            <RobotCard key={data.id} data={data} onDescriptionClick={handleDescription} />
                                        )
                                        )}
                                    </div>
                                </div>
                                :
                                <NoRecordMessage />
                            }
                        </div>
                    </>
                }
            </section >
        </>
    );
};

export default UserList;