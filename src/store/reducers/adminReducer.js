import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('Fetch gender is get data ...', action)
            return {
                ...state,
                isLoadingGender: true
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            console.log('Fetch gender is success!')
            return {
                ...state,
                genders: action.genders,
                isLoadingGender: false
            }
        case actionTypes.FETCH_GENDER_FAIL:
            console.log('Fetch gender is fail!')
            return {
                ...state,
                isLoadingGender: false
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            console.log('Fetch role is success!')
            return {
                ...state,
                roles: action.roles,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            console.log('Fetch role is fail!')
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            console.log('Fetch position is success!')
            return {
                ...state,
                positions: action.positions,
            }
        case actionTypes.FETCH_POSITION_FAIL:
            console.log('Fetch position is fail!')
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;