import { createPost, showAlert } from "./../redux/actions";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Alert } from "./Alert";

const PostForm = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: "",
    //     };
    // }
    const [title, setTitleCustom] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        // const { title } = this.state;

        if (!title.trim()) {
            return props.showAlert("Название поста не может быть пустым");
        }
        const newPost = {
            title: title,
            id: Date.now().toString(),
        };

        console.log("newPost", newPost);

        props.createPost(newPost);
        setTitleCustom("");
    };

    const changeInputHandler = (event) => {
        event.persist();
        // setTitleCustom((prev) => {
        //     console.log(prev, "prev");
        //     return {
        //         ...prev,
        //         ...{ [event.target.name]: event.target.value },
        //     };
        // });
        setTitleCustom(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            {props.alert && <Alert text={props.alert} />}
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

const mapDispatchToProps = {
    createPost,
    showAlert,
};

const mapStateToProps = (state) => ({
    alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
