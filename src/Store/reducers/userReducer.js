const initialState = {
    // token:  window.localStorage.getItem('sc-auth-token') || null,
    token:  window.localStorage.getItem('sc-auth-token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuY2FycmVybzgxMUBnbWFpbC5jb20iLCJmaXJzdF90aW1lIjoiMjAyMy0wOC0xOFQwMDoxMTozMi43Nzg4NjUiLCJleHAiOjE2OTQ5MDk0OTJ9.QMJ1SXyh5NpSD4XsC90pGkvvk--gVUFZSW876eRjDaU', // FIXME: eliminar
    userData: {}
}

const userReducer = (state = initialState, action) => {
    console.log(state)
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