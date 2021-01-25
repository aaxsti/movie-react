let initialState = {
    movies: [
        {
            id: 1,
            movieTitle: 'Dogville',
            director: 'Lars von Trier',
            premiereDate: '21-03-2003',
            imageSrc: 'https://cdn.onebauer.media/one/empire-tmdb/films/553/images/2R9B56wqtx8tVXu8KBE0JmYuUkL.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
            cast: ['Nicole Kidman', 'Harriet Andersson', 'Lauren Bacall']
        },
        {
            id: 2,
            movieTitle: 'Climax',
            director: 'Gaspar Noe',
            premiereDate: '19-09-2018',
            imageSrc: 'https://static.rogerebert.com/uploads/blog_post/primary_image/interviews/gaspar-noe-on-climax-accidental-allegories-catastrophe-movies-and-more/noe-image.jpg',
            cast: ['Sofia Boutella', 'Romain Guillermic', 'Kiddy Smile']
        },
        {
            id: 3,
            movieTitle: 'High and Low',
            director: 'Akira Kurosawa',
            premiereDate: '01-03-1963',
            imageSrc: 'https://esculpiendoeltiempocom.files.wordpress.com/2018/07/06dac4afc2f4bd85bd23f73a4b688179.jpg?w=1040',
            cast: ['Toshirô Mifune', 'Tatsuya Nakadai', 'Kyôko Kagawa']
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