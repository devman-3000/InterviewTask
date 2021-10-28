import React, {useState, useEffect} from 'react';
import Post from '../../components/post'
import {PostWrapper} from './postsStyles'
import axios from 'axios';

export default function Posts(){
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        const getData = async ()=> {
            const result = await axios("https://jsonplaceholder.typicode.com/posts");
            if(result.status !== 200){
                throw new Error(`Something isn't right: server's response ${result.status}`);
            }else{
                setPosts(result.data)
            }
        }
        getData()   
    },[]);
  
     
      return (
        <PostWrapper>
            {posts.map(item => (
                <Post 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                body={item.body}>
                </Post>
            ))}
        </PostWrapper>
      );
}