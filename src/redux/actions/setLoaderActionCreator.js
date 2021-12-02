export default function setLoaderActionCreator(value) {
    return (dispatch) => {
        dispatch({type: 'SET_LOADING', payload: value});
    };
}