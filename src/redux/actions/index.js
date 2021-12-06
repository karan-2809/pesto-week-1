export function refreshData() {
    return (dispatch) => {
        fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => {

                dispatch({type: 'UPDATE_DATA', payload: data.results[0]});

                dispatch({type: 'SET_LOADING', payload: false});

            });
    };
}

export function setLoader(value) {
    return (dispatch) => {
        dispatch({type: 'SET_LOADING', payload: value});
    };
}