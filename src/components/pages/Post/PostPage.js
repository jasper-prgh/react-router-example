import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { posts } from '../Home/HomePage';

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        setPost(posts.find(p => p.id == id));
    }, [id]);

    return (post == null ? null : (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>)
    )
}

export default PostPage;
