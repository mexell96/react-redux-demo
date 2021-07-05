import { CREATE_POST, FETCH_POSTS } from "./types";

interface IPost {
    id: string;
    title: string;
}

interface IAction {
    type: string;
    payload: string | IPost;
}

const initialState = {
    posts: [],
    fetchedPosts: [],
};

export const postsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload };
        default:
            return state;
    }
};
