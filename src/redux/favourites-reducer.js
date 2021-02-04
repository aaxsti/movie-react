let initialState = {
    favourites: [
        {
            id: 1,
            movieTitle: 'Dogville',
            director: 'Lars von Trier',
            premiereDate: '2003-03-21',
            imageSrc: 'https://sun9-52.userapi.com/impg/npbO2jennMuYF8AJwoXWJz-3nnodqKnk4lXIZQ/s70BfOxgImk.jpg?size=940x942&quality=96&proxy=1&sign=e26cdb0dc4eeae86a9ccac9ee1afb108&type=album',
            cast: ['Nicole Kidman', 'Harriet Andersson', 'Lauren Bacall']
        }
    ],
};

const favouritesReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case ADD_POST:
    //         let newPost = {
    //             id: 5,
    //             message: action.newPostText,
    //             likesCount: 0,
    //         };
    //         return {
    //             ...state,
    //             posts: [...state.posts, newPost],
    //             newPostText: ''
    //         };
    //     case SET_USER_PROFILE:
    //         return {
    //             ...state,
    //             profile: action.profile
    //         };
    //     case SET_STATUS:
    //         return {
    //             ...state,
    //             status: action.status
    //         };
    //     case DELETE_POST:
    //         return {
    //             ...state,
    //             posts: state.posts.filter(p => p.id !== action.postId)
    //         };
    //     default:
    //         return state;
    // }
    return state;
}

export default favouritesReducer;