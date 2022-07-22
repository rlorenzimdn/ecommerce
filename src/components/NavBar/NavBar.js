// UpperCamelCase
import React, { useState } from "react";
import './NavBar.scss'
import {Container,LogoContainer,Wrapper,Menu,MenuItem,MenuItemLink,MobileIcon,} from "./Narbar.elements";
import CartWidget from './CartWidget'

const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);  
    return(
        <Container>
      <Wrapper>
            <LogoContainer>
                <img src="/assets/logo.png" width="90" height="70" className="d-inline-block align-top" alt="Logo Puntero"/>
            </LogoContainer>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          </MobileIcon>
            <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  INICIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  LIBROS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  TEMAS
                </div>
              </MenuItemLink>
            </MenuItem>
            </Menu>

            <CartWidget />
            </Wrapper>
            </Container>
    )
}

export default NavBar