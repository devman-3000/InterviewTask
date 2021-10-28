import styled from 'styled-components'
import {Link} from "react-router-dom";

export const ButtonBox = styled.button`
    background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
    border-radius: 40px;
    box-sizing: border-box;
    border: none;
    color: #00a84f;
    display: block;
    height: 50px;
    font-size: 1.4em;
    padding: 4px;
    position: relative;
    text-decoration: none;
    width: 7em;
    z-index: 2;

    &:hover{
        color: #fff;
    }
    & span{
        align-items: center;
        background: #fff;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        height: 100%;
        transition: background 0.5s ease;
        width: 100%;
    }
    &:hover span {
        background: transparent;
    }
`

export default function StyledButton({link, text}){
    return(
        <Link to={link} style={{textDecoration: "none", margin:'20px'}}>
            <ButtonBox>
                <span>{text}</span>
            </ButtonBox>
        </Link>
    )
}