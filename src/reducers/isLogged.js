const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
    }
}

export default isLoggedInReducer;