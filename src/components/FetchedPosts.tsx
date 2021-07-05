import { Loader } from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";
import { RootState } from "../redux/rootReducer";

export interface IPost {
    userId: number;
    body: string;
    id: number;
    title: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts.fetchedPosts);
    const loading = useSelector((state: RootState) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    if (!posts.length) {
        return (
            <button
                className="btn btn-primary"
                onClick={() => dispatch(fetchPosts())}>
                Загрузить
            </button>
        );
    }
    return posts.map((post: IPost) => {
        console.log(post, "$$$$$$$$$$____________________________________");

        return <Post post={post} key={post.id} />;
    });
};
