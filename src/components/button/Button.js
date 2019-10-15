import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default function Button(props) {
    const buttonColor = props.color ? props.color : "#693FAD";
    const color = props.color ? "#693FAD" : "#ffffff";
    const width = props.width ? props.width : "3.75rem";
    const maxWidth = props.maxWidth ? props.maxWidth : "250px";
    const height = props.height ? props.height : "4rem";
    const borderColor = props.white ? "#ffffff" : "#693FAD";

    const Button = styled.button`
        padding: 0 3rem;
        min-width: ${width};
        max-width: ${maxWidth};
        background-color: ${buttonColor};
        border: 2px solid ${borderColor};
        border-radius: 5rem;
        color: ${color};
        box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
        font-size: 1.125rem;
        height: ${height};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 200ms ease-in-out;
        ${props.white && `box-shadow: none; border: 2px solid #ffffff;`}
        @media screen and (max-width: 360px){
            font-size: 0.85rem;
            height: 3rem;
        }
        &:hover{
            box-shadow: none;
        }
        &:active{
            ${props.white && `background-color: #FFFFFF;`}
            border: ${props.color ? `2px solid #FFFFFF` : `2px solid #693FAD`};
            color: ${props.color ? `#FFFFFF`: '#693FAD'};
            outline: none;
        }
        &:focus {
            outline: none;
        }
    `

    return (
         <Button> 
            {props.children}
        </Button>
    )
}
