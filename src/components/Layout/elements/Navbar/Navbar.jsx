import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Drawer, IconButton, ListItemButton, ListItemText} from '@mui/material'
import { Box, fontSize } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './navbar.module.scss'
import logo from '/public/DOGA_LOGO_Blanco.png'

const dividerStyle = {
  mb: 2, 
  width: "100%"
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };


  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles.logo}/>
          </Link>
          <ul className={styles.links}>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>      
      </nav>
      {/* hamburger icon shows the drawer on click */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        className={styles.hamMenu}
        sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MenuIcon className={styles.hamIcon}/>
      </IconButton>

      {/* The outside of the drawer */}
      <Drawer
        anchor="bottom" //from which side the drawer slides in
        variant="temporary" //if and how easily the drawer can be closed
        open={open} //if open is true, drawer is shown
        onClose={toggleDrawer(false)} //function that is called when the drawer should close
        onOpen={toggleDrawer(true)} //function that is called when the drawer should open
      >
        <Box sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: 2,
          height: 1,
          height: "100vh",
          backgroundColor: "#C3C3C3",
        }}>
          <Box sx={{width: "100%", display: "flex"}}>
            <IconButton sx={{mb: 2, ml: "auto"}}>
              <CloseIcon sx={{fontSize: "50px"}} onClick={toggleDrawer(false)} />
            </IconButton>
          </Box>

          <Divider sx={dividerStyle} />

          <ListItemButton onClick={toggleDrawer(false)}>
            <Link href="/">
              <ListItemText primaryTypographyProps={{ color: "#3F4C67", fontSize: "20px", fontWeight: "500" }} primary="HOME" />
            </Link>
          </ListItemButton>

          <Divider sx={dividerStyle} />
            
          <ListItemButton onClick={toggleDrawer(false)}>
            <Link href="/about"> 
              <ListItemText primaryTypographyProps={{ color: "#3F4C67", fontSize: "20px", fontWeight: "500" }} primary="ABOUT US" />
            </Link>
          </ListItemButton>

          <Divider sx={dividerStyle} />
            
          <ListItemButton onClick={toggleDrawer(false)}>
            <Link href="/portfolio"> 
              <ListItemText primaryTypographyProps={{ color: "#3F4C67", fontSize: "20px", fontWeight: "500" }} primary="PORTFOLIO" />
            </Link>
          </ListItemButton>

          <Divider sx={dividerStyle} />

          <ListItemButton onClick={toggleDrawer(false)}>
            <Link href="/services"> 
              <ListItemText primaryTypographyProps={{ color: "#3F4C67", fontSize: "20px", fontWeight: "500" }} primary="SERVICES" />
            </Link>
          </ListItemButton>

          <Divider sx={dividerStyle} />

          <ListItemButton onClick={toggleDrawer(false)}>
            <Link href="/contact"> 
              <ListItemText primaryTypographyProps={{ color: "#3F4C67", fontSize: "20px", fontWeight: "500" }} primary="CONTACT US" />
            </Link>
          </ListItemButton>

          <Divider sx={dividerStyle} />
        
        </Box>
      </Drawer>
    </>
  )
}