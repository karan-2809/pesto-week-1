import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux';

import {useSelector, useDispatch} from 'react-redux';

import {refreshData, setLoader} from './redux/actions';

const User = () => {

    const {data, loading} = useSelector((state) => state);
    const dispatch = useDispatch();

    const ACS = bindActionCreators(
        {
            refreshData: refreshData,
            setLoader: setLoader
        },
        dispatch
    );

    useEffect(() => {
        ACS.refreshData();
    }, []);

    return (
        <div>
            <div id="refresh-container">
                <button disabled={loading} className={loading ? 'loading' : ''} id="refresh-button" onClick={() => {
                    ACS.setLoader(true);
                    ACS.refreshData();
                }}>REFRESH DATA
                </button>
            </div>
            {loading ? null :
                <div className="user-details">
                    <div id="title-container">
                        <img src={data.picture.large} alt="User photo" width="128"
                             height="128"/>
                        <div className="ml-auto">
                            <h1>{data.name.title} {data.name.first} {data.name.last}</h1>
                            <div className="location"><i title="Location"
                                                         className="fas fa-map-marker-alt"></i> {data.location.city}, {data.location.country}
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <table>
                            <tbody>
                            <tr>
                                <td><i title="Username" className="fas fa-id-card"></i> {data.login.username}</td>
                            </tr>
                            <tr>
                                <td><i title="Birthday"
                                       className="fas fa-birthday-cake"></i> {data.dob.date.split('T')[0]}
                                </td>
                            </tr>
                            <tr>
                                <td><i title="Email" className="fas fa-envelope"></i> {data.email}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                            <tr>
                                <td><i title="Phone Number" className="fas fa-phone"></i> {data.phone}</td>
                            </tr>
                            <tr>
                                <td><i title="Gender"
                                       className={"fas " + (data.gender === 'male' ? "fa-mars" : "fa-venus")}></i> {data.gender}
                                </td>
                            </tr>
                            <tr>
                                <td><i title="Timezone" className="fas fa-clock"></i> {data.location.timezone.offset}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>


    )
};

export default User;