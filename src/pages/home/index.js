import React from 'react';
import Emoji from '../../components/emoji';
import StyledButton from '../../components/styledButton';
import {Container} from './homeStyles'

export default function Home() {
    return (
        <Container>
            <h1>Welcome to my <Emoji symbol="🔥" label="fire"/>App<Emoji symbol="🔥" label="fire"/></h1>
            <h1>Feel free to see my posts<Emoji symbol="😄" label="smile"/></h1>
            <StyledButton link="/posts" text="Posts"/>
        </Container>
    ) 
  }