import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../store';
import { Link } from 'react-router-dom';

const Home = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const currentState = useSelector((state) => state);

    const onSubmit = (e) => {
        e.preventDefault();
        // currentState.map((todo) => console.log(todo));
        // console.log(currentState)
        setText("");
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onClick = () => {
        dispatch(add(text));
    }

    const onDelClick = (e) => {
        // console.log(e.target.parentNode);
        const id = parseInt(e.target.parentNode.id);
        dispatch(remove(id));
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={onClick}>Add</button>
            </form>
            <ul>
                {currentState.map((todo) => (
                    <li key={todo.id} id={todo.id}>
                        <Link to={`${todo.id}`}>{todo.text}</Link>
                        <button onClick={onDelClick}>DEL</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;