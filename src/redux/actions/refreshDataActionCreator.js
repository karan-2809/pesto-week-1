export default function refreshDataActionCreator() {
    return (dispatch) => {
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => {

                dispatch({type: 'UPDATE_DATA', payload: data.results[0]});
                dispatch({type: 'SET_LOADING', payload: false});

            });
    };
}