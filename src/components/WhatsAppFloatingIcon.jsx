import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/dist/client/link';
import { Box } from '@mui/system';

const buttonStyle = {
    width: { xs: '54px', sm: '64px' },  
    height: { xs: '54px', sm: '64px' },
    display: 'flex',
    cursor: 'pointer',
    borderRadius: '50%',
    alignItems: 'center',
    bottom: '30px',
    right: '30px',
    position:'fixed',
    zIndex:'10',
    backgroundColor:'#D9D9D9',
    justifyContent:'center'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}

export default function WhatsAppFloatingIcon() {
    return (
      <Box sx={ buttonStyle } >
        <Link style={ containerStyle } href={''} >
        <WhatsAppIcon sx={{height:'auto',width:'50%', color:'#34af23'}} />
        </Link>
      </Box>
    )
}
