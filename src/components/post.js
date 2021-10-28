import React from 'react';
import styled from 'styled-components'

export const PostBox = styled.li`
    text-decoration: none;
    list-style-type: none;
    margin: 20px 0px;
    border-radius: 20px;
    width: 300px;
    margin: 30px;
    padding: 20px;
    -webkit-box-shadow: 5px 5px 30px -7px #000000; 
    box-shadow: 5px 5px 30px -7px #000000;
    display: flex;
    flex-direction: column;

    & .title{
        color: #696969;
        font-size: 0.8rem;
        margin-bottom: 10px;
    }
`


export default function Post({id, title, body}){
    return(
        <PostBox>
               <h3>Post №{id}</h3>
               <span className="title">{title}</span>
               <span className="body">{body}</span>
        </PostBox>
    )
}