import React from 'react'
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <Nav>
           <NavLink to="/">pizza</NavLink> 
           <NavIcon onClick={toggle}>
             <p>Menu</p>
             <Bars />  
           </NavIcon>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
background: transparent;
height:80px;
display:flex;
justify-content: center;
font-weight: 700;
`;
const NavLink = styled(Link)`
color:#fff;
font-size: 2rem;
display:flex !important;
align-items:center;
text-decoration:none;
cursor: pointer;
@media screen and (max-width:400px){
    position:absolute  !important;
    top:10px  !important;
    left:25px  !important;
}
`;
const NavIcon = styled.div`
display:block ;
position:absolute  !important;
top:0 !important;
right:0;
cursor:pointer;
color:#fff;

p{
   transform:translate(-175%, 100%);
   font-weight: bold; 
}
`;
const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
transform: translate(-50%,-15%);
`;
