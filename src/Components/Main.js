import React, { Component } from 'react'
import{useState} from "react"
import styled from "styled-components";
import PostModal from "./PostModal"
function Main() {
    const[showModel,setShowModel]=useState("close");
    const handleClick= (e) =>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }  
        switch(showModel){
        case"open":
            setShowModel("close");
            break;
        case"close":
            setShowModel("open")
            break;
        default:
            setShowModel("close")
            break;
        }
       
    }
    return (

        <div>
            <Container>
                <ShareBox>
                  <div>
                      <img src="/images/user.svg" alt=""/>
                      <button onClick={handleClick}>Start a post </button>
                  </div>
                  
                </ShareBox>
                <div>
                    <Article>
                        <SharedActor>
                            <a>
                                <img src="/images/user.svg" alt=""/>
                                <div>
                                    <span>Title</span>
                                    <span>Info</span>
                                    <span>Date</span>

                                </div>
                            </a>
                            <button>
                                <img src="/images/down-icon.svg" alt=""/>
                            </button>
                        </SharedActor>
                        <Description>
                            Text Descrition
                        </Description>
                        <SharedImg>
                            <a>
                                <img src="https://hunyadi.info.hu/projects/boxplusx/images/image3.jpg" alt=""/>
                            </a>
                        </SharedImg>
                        
                    </Article>
                </div>
                <PostModal showModel={showModel} handleClick={handleClick} />
            </Container>
        </div>
    )
}
const Container= styled.div`
grid-area:main;
`;
const CommonCard= styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = styled(CommonCard)`
display:flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background-color:white;
div{
    button{
        outline:none;
        color:rgba(0,0,0,0.6);
        font-size:14px;
        line-height:1.5;
        min-height:60px;
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;
    }
    &:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 0px 16px;
        img{
            width:48px;
            border-radius:50%;
            margin-right:8px;
        }
        button{
            margin:4px 0;
            flex-grow:1;
            border-radius:35px;
            padding-left:16px;
            border:1px solid rgba(0,0,0,0.15);
            background-color:white;
            text-align:left;
        }
    }
}

`; 
const Article=styled(CommonCard)`
padding:0;
margin:0 0 8px;
overflow:visible;
`;
const SharedActor = styled.div`
    padding-right:40px;
    flex-wrap:nowrap;
    padding:12px 16px 0;
    margin-bottom:8px;
    align-items:center;
    display:flex;
    a{
        margin-right:12px;
        flex-grow:1;
        overflow:hidden;
        display:flex;
        img{
            width:48px;
            height:48px;

        }
         & > div{
            display:flex;
            flex-direction:column;
            flex-grow:1;
            flex-basis:0;
            margin-left:8px;
            overflow:hidden;
            span{
                text-align:left;
                &:first-child{
                    font-size:14px;
                    font-weight:700;
                    color:rgba(0,0,0,1);
                }
                &:nth-child(n + 1){
                    font-size:12px;
                    color:gray;
                }
            }
    }
}
button{
    position:absolute;
    right:12px;
    top:0;
    background:transparent;
    border:none;
    outline:none;

}
`;
const Description= styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;
`;
const SharedImg= styled.div`
margin-top:8px;
width:100%;
display:block;
postion:relative;
background-color :#f9fafb;
img{
    object-fit:contain;
    width:100%;
    height:100%;
}
`;


export default Main

