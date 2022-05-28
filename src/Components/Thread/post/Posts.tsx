import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
//document.getElementById("")!.append("<div>blblb</div>")
interface PostForm {
    id: number;
    user_id: number;
    message: string;
    timestamp: string;
}

const Posts = () => {
    const [post, setPost] = useState<PostForm[]>([]);
    const [users, setUsers] = useState<string[]>([]);

    const getPost = useCallback(async () => {
        const AllPost: PostForm[] = await axios({
            method: "get",
            url: "http://192.168.1.38:9999/api/thread/requestAllPost",
            headers: {
                "Authorization": localStorage.getItem("Alpinezy") as string
            }
        }).then(res => {
            return (res.data.post)
        })
        let AllUser: string[] = []
        for (let i = 0; i < AllPost.length; i++) {
            await axios({
                method: "get",
                url: `http://192.168.1.38:9999/api/user/get/${AllPost[i].user_id}`
            }).then(res => {
                AllUser.push(res.data.user[0].username)
            })
        }
        setPost(AllPost)
        setUsers(AllUser)
    }, [])


    useEffect(() => {
        getPost()
            .then(() => console.log("success"))
            .catch(err => console.log("error \n" + err))
    }, [])

    return (
        <div className='mt-[50px]'>
            {
                post.map((onePost, index) => {
                    const date = new Date(Number(onePost.timestamp))
                    /**
                     * "Date: "+date.getDate()+
                        "/"+(date.getMonth()+1)+
                        "/"+date.getFullYear()+
                        " "+date.getHours()+
                        ":"+date.getMinutes()+
                        ":"+date.getSeconds());
                     */
                    const DateReturned = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}`
                    return (
                        <div key={onePost.id} className='bg-[#325D79] grid w-[620px] grid-rows-3 mt-[20px] rounded-lg p-[20px] text-white'>

                            {/* Top */}
                            <div className='grid grid-cols-2 row-span-1 h-[30px] w-[560px]'>
                                <NavLink to={`/profile/${onePost.user_id}`}>
                                    <div className={"hover:bg-[#407496] h-[50px] flex items-center rounded-lg hover:cursor-pointer"}>
                                        <div className=''>
                                            <h1 className=''>{users[index]}</h1>
                                        </div>
                                    </div>
                                </NavLink>
                                <p className='text-right p-[10px]'>{DateReturned}</p>
                            </div>

                            {/* content */}
                            <div className='row-span-2 h-[24px] p-[10px]'>
                                <br />
                                <p className='max-w-[600px] truncate h-[24px] break-words'>{decodeURI(onePost.message)}</p>
                                <br />
                            </div>

                            {/* Bottom */}
                            <div className=' row-span-3 p-[10px]'>
                                <h1>img</h1>
                                <h1>coeur</h1>
                            </div>



                        </div>
                    )
                }, [])
            }
            <br />
        </div>
    );
};

export default Posts;