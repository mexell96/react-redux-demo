import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

type Obj = {
    state: any[];
}

const Posts: React.FC = () => {
    const syncPosts = useSelector(
        (state: Obj) => state.posts.posts
    );
    console.log(syncPosts, "444");

    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>;
    }
    return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

export default Posts;
