export interface IPost {
    userId: number;
    body: string;
    id: number;
    title: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (post: IPost) => {
    console.log(post, "POST++++++++++");
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Title here {post.post.title}</h5>
                <h5 className="card-title">Id {post.post.id}</h5>
            </div>
        </div>
    );
};
