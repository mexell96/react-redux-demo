import { createPost, showAlert } from "./../redux/actions";
import React, { useState } from "react";
import { Alert } from "./Alert.tsx";
import { useDispatch, useSelector } from "react-redux";

const PostForm = () => {
    const alert = useSelector((state) => state.app.alert);
    const dispatch = useDispatch();
    const [title, setTitleCustom] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            return dispatch(showAlert("Название поста не может быть пустым"));
        }
        const newPost = {
            title: title,
            id: Date.now().toString(),
        };

        console.log("newPost", newPost);

        dispatch(createPost(newPost));
        setTitleCustom("");
    };

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setTitleCustom(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            {alert && <Alert text={alert} />}
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    name="title"
                    onChange={changeInputHandler}
                />
            </div>
            <button className="btn btn-success" type="submit">
                Создать
            </button>
        </form>
    );
};

export default PostForm;
