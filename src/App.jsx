import React from 'react'

import {useSelector, useDispatch} from 'react-redux';

import {bindActionCreators} from 'redux';

function refreshDataActionCreator() {
    // return {type: 'UPDATE_DATA'};

    return (dispatch) => {
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({type: 'UPDATE_DATA', payload: data.results[0]}
                )
            });
    };
}

const App = () => {

    console.log('called');

    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const ACTION_CREATORS = bindActionCreators({refreshDataActionCreator}, dispatch);

    // console.log(ACTION_CREATORS);

    console.log(data);

    return (
        <div>
            <button onClick={() => ACTION_CREATORS.refreshDataActionCreator()}>Update</button>
            <br/>
            <table className="table">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{data.name.title} {data.name.first} {data.name.last}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{data.dob.age}</td>
                </tr>
                <tr>
                    <td>Picture</td>
                    <td>
                        <img src={data.picture.medium} alt={'Photo ' + data.name.first + ' ' + data.name.last}/>
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    )
};

export default App;