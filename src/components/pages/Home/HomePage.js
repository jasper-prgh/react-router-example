import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    {title: 'Post 1', id: 1, content: 'Some content 1'},
    {title: 'Post 2', id: 2, content: 'Some content 2'},
    {title: 'Post 3', id: 3, content: 'Some content 3'},
    {title: 'Post 4', id: 4, content: 'Some content 4'},
];

function HomePage() {

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {posts.map(p => (<li key={p.id}>
                    <h3>{p.title}</h3>
                    <Link to={`/post/${p.id}`}>Read content</Link>
                </li>))}
            </ul>
        </div>
    );
}

export default HomePage;
export {posts};
