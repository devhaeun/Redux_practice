import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
    const currentState = useSelector((state) => state);
    const param = useParams();
    // console.log(currentState)
    const todo = currentState.find((item) => item.id === parseInt(param.id));
    return (
        <>
            <h1>Detail</h1>
            <h3>Text: {todo.text}</h3>
            <h5>Created at: {todo.id}</h5>
        </>
    )
};

export default Detail;