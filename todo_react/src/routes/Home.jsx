import React, { useState } from 'react';

const Home = () => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}

export default Home;