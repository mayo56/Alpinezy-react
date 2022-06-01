import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../../App';

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
            url: `${API_URL}/api/user/post/${userID}`,
        }).then(res => {
            setPost(res.data.post);
        });
    }, [userID]);

    useEffect(() => {
        getPost();
        setPost([{ id: 1, message: "BBLBLLBLBLBLLB", timestamp: "15214545515" }]);
    }, [getPost]);
    return (
        <div className='w-[60%] ml-auto mr-0'>
            {
                post.map((onePost, index) => {
                    const date = new Date(Number(onePost.timestamp))
                    const DateReturned = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}`
                    return (
                        <div className='bg-[blue] mt-[20px] m-auto w-auto h-auto'>
                            <p className='text-white'>{onePost.message}</p>
                            <p className='text-white'>{DateReturned}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Post;