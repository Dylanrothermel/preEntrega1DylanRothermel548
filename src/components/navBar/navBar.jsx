import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti"
import CartWidget from '../cartWidget/cartWidget'
import "./navBar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src="https://w7.pngwing.com/pngs/337/572/png-transparent-dying-light-techland-dead-island-pure-farming-2018-video-game-dead-island-game-orange-logo.png" alt="Logo" style={{width : "150px"}}/>
      </div>
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
                Productos
            </MenuButton>
            <MenuList>
                <MenuItem>Laptops</MenuItem>
                <MenuItem>Mouses</MenuItem>
                <MenuItem>Teclados</MenuItem>
                <MenuItem>Auriculares</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </div>
  )
}

export default NavBar