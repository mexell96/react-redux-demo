interface Props {
    post: object;
}

interface Title {
    title: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ post }: Props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Title here {post.title}: Title</h5>
            </div>
        </div>
    );
};
