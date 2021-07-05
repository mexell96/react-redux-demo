import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface IState {
    posts: {
        posts: {
            title: string;
            id: string;
        };
    };
}

export interface IPost {
    id: string;
    title: string;
}

const Posts = () => {
    const syncPosts = useSelector((state: RootState) => state.posts.posts);
    console.log(syncPosts, "444");

    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>;
    }
    return syncPosts.map((post: IPost) => <Post post={post} key={post.id} />);
};

export default Posts;
