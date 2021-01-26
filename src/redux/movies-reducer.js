let initialState = {
    movies: [
        {
            id: 1,
            movieTitle: 'Dogville',
            director: 'Lars von Trier',
            premiereDate: '2003-03-21',
            imageSrc: 'https://sun9-52.userapi.com/impg/npbO2jennMuYF8AJwoXWJz-3nnodqKnk4lXIZQ/s70BfOxgImk.jpg?size=940x942&quality=96&proxy=1&sign=e26cdb0dc4eeae86a9ccac9ee1afb108&type=album',
            cast: ['Nicole Kidman', 'Harriet Andersson', 'Lauren Bacall']
        },
        {
            id: 2,
            movieTitle: 'Climax',
            director: 'Gaspar Noe',
            premiereDate: '2018-09-19',
            imageSrc: 'https://sun9-62.userapi.com/impg/6boczUagW_gQgJDf5mg_ppsuXojtU_dwXqPNfA/zOq5xrWTddU.jpg?size=720x720&quality=96&proxy=1&sign=49393bdfb69c2eeb89f7b29e756c8d8f&type=album',
            cast: ['Sofia Boutella', 'Romain Guillermic', 'Kiddy Smile']
        },
        {
            id: 3,
            movieTitle: 'High and Low',
            director: 'Akira Kurosawa',
            premiereDate: '1963-03-01',
            imageSrc: 'https://sun9-22.userapi.com/impg/MTUqm2lz5xnPhTTUpzntaVoyK6njSHoYNGcvVQ/8PJS6qOFwxY.jpg?size=442x442&quality=96&proxy=1&sign=05f28b3870c00d86ee83bf8df51fd8ca&type=album',
            cast: ['Toshirô Mifune', 'Tatsuya Nakadai', 'Kyôko Kagawa']
        },
        {
            id: 4,
            movieTitle: 'Taxi Driver',
            director: 'Martin Scorsese',
            premiereDate: '1976-02-08',
            imageSrc: 'https://sun9-23.userapi.com/impg/U1jzEO_twMfMVeYVRpS_kIKSr0XuogRJN3S-wQ/S00MAAEl6og.jpg?size=562x562&quality=96&proxy=1&sign=8b7f3b970152f2cf0940f70b1b66c121&type=album',
            cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd']
        },
        {
            id: 5,
            movieTitle: 'Fallen Angels',
            director: 'Kar-Wai Wong',
            premiereDate: '1995-09-06',
            imageSrc: 'https://sun9-27.userapi.com/impg/ASOa0KDtbT0u5Tpq0A2mhV2dmCeo15GJNTa9uQ/TwE4rJMgHA0.jpg?size=891x891&quality=96&proxy=1&sign=b435c48999695abd34870af37fe12d65&type=album',
            cast: ['Leon Lai', 'Michelle Reis', 'Karen Mok']
        },
    ],
};

const moviesReducer = (state = initialState, action) => {
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

export default moviesReducer;