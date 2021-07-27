import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon>

                </CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
position: fixed;
z_index:999;
width:350px;
height:100%;
background: #ffc500;
display:grid;
align-items:center;
top:0;
transition:0.3 ease-in-out;
right ${({isOpen}) => (isOpen ? '0' : '-1000px')};

@media screen and (max-width:400px){
    width:100%;    
}
`;
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
border:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon = styled(FaTimes)`
color:#000
`;
const SidebarMenu = styled.div`
display:grid;
grid-template-columns:1fr;
gridtemplate-rows:repeat(3,80px );
text-align:center;

@media screen and (max-width:480px){
    gridtemplate-rows:repeat(3,60px );
}
`;
const SidebarLink = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition: 0.2s ease-in-out;
color:#000;
cursor:pointer;

&:hover{
    color:#e31837;
    transition:0.2s ease-in-out;
}
`;
const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
`;
const SidebarRoute = styled(Link)`
background:#e31837;
white-space:nowrap;
padding:16px 64px;
color:#fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;