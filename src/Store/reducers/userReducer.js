const initialState = {
    token:  window.localStorage.getItem('sc-auth-token') || null,
    userData: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case '@user/login':
        return {...state, token: action.token}
    case '@user/logout':
        return {...state, token: null, userData: {}}
    case '@user/userData':
        return {...state, userData: { ...state.userData, ...action.payload }}
    default: 
        return state
    }
}

export default userReducer 