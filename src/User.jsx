import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux';

import {bindActionCreators} from 'redux';

import refreshDataActionCreator from './redux/actions/refreshDataActionCreator';
import setLoaderActionCreator from './redux/actions/setLoaderActionCreator';

const User = () => {


    const {data, loading} = useSelector((state) => state);
    const dispatch = useDispatch();

    const {refreshData, setLoader} = bindActionCreators({
                                                            refreshData: refreshDataActionCreator,
                                                            setLoader: setLoaderActionCreator
                                                        }, dispatch);

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <div>
            <div id="refresh-container">
                <button disabled={loading} onClick={() => {
                    setLoader(true);
                    refreshData()
                }}>Refresh
                </button>
                {loading ? <span id="loader"></span> : null}
            </div>
            <br/><br/>

            {loading ? null : <table className="table">
                <tbody>
                <tr>
                    <td>Username</td>
                    <td>{data.login.username}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{data.name.title} {data.name.first} {data.name.last}</td>
                </tr>

                <tr>
                    <td>Age</td>
                    <td>{data.dob.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{data.gender}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{data.phone}</td>
                </tr>
                <tr>
                    <td>Picture</td>
                    <td>
                        <img width="72" height="72" src={data.picture.medium} alt={'Photo ' + data.name.first + ' ' + data.name.last}/>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.state}, {data.location.country} </td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>{data.location.timezone.offset}</td>
                </tr>
                <tr>
                    <td>Nationality</td>
                    <td>{data.nat}</td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>{data.id.name}: {data.id.value}</td>
                </tr>
                </tbody>
            </table>}
        </div>
    )
};

export default User;