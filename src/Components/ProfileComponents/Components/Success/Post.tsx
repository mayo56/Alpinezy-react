import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PostForm {
    id: number;
    message: string;
    timestamp: string;
}
const Post = () => {
    const userID = useParams().id;
    const [post, setPost] = useState<PostForm[]>([]);

    const getPost = useCallback(async () => {
        await axios({
            method: "get",
            url: `http://192.168.1.38:9999/api/user/post/${userID}`,
        }).then(res => {
            setPost(res.data.post);
        });
    }, []);

    useEffect(() => {
        getPost();
        setPost([{ id: 1, message: "test", timestamp: "15214545515" }]);
    }, []);
    return (
        <div className='w-[60%] ml-auto mr-0'>
            {
                post.map((onePost, index) => {
                    const date = new Date(Number(onePost.timestamp))
                    const DateReturned = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}`
                    return (
                        <div className='bg-[blue] mt-[20px] m-auto w-auto h-auto'>
                            {/* contenue */}
                            <p className='text-white'>{onePost.message}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Post;