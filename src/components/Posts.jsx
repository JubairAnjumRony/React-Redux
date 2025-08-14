import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPosts } from '../features/Posts/postsSlice';

const Posts = () => {

    const { isLoading,isError,posts,error} = useSelector(
        (state)=>state.posts
    );

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    },[dispatch]);


    let content;
    if(isLoading){
        content = <h1>Loding Posts</h1>;
    }

    if(!isLoading && isError) {
        content = (
            <h1 className='text-red-600'>something wrong happend - {error}</h1>
        );
    }
    

        if (!isLoading && !isError) {
        if (posts.length > 0) {
            content = (
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                listStyleType: "sqaure",
                            }}
                        >
                            {post.title}
                        </li>
                    ))}
                </ul>
            );
        } else {
            content = <h1>No posts found!</h1>;
        }
    }

    
    return (
          <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
        </div>
    );
};

export default Posts;