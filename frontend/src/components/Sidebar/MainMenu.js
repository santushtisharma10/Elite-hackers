import React, { useState } from 'react'
import {details} from "./menu"
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;
const Button = styled.button`
  background-color: var(--blue);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;


const SidebarContainer = styled.div`
  background-color: var(--blue);
  width: 3.5rem;
//   height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
// padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;


const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  padding: 2rem 0;
  position: absolute;
//   top: 1rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled.a`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  svg {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;



function MainMenu() {

   const [toggle, setToggle] = useState(false)
   const [profileClick, setProfileClick] = useState(false)

   const handleClick = () => {

    setToggle(!toggle)
   }
   const handleProfileClick = () => {

    setProfileClick(!profileClick)
   }

  const getMenus = menuArray => menuArray.map((item, index)=>{

    return (
    
        
          <Item
            onClick={()=>setToggle(!toggle)}
            exact
            activeClassName="active"
            to="/"
          > 
          {item.icon &&
            <ListItemIcon>
              <Icon >{item.icon}</Icon>
            </ListItemIcon>
          }

            <Text clicked={toggle}>{item.name}</Text>
          </Item>
    
        
    )
  })
  return (
    <div>
        <Container />
       <Button clicked={toggle} onClick={() => handleClick()}>
        
      </Button>
       <SidebarContainer>
       <SlickBar clicked={toggle}>
           {/* add a profile also */}
        {getMenus(details)}
        </SlickBar>
      
        </SidebarContainer>
      
       
    </div>
  )
}

export default MainMenu