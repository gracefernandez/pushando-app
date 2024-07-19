import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import styles from './Footer.module.css';
import skatemamisLogo from '/public/LogoOf.png';
import Image from 'next/image';

const Footer = () => {
  return (
      <Box className={styles.footer} >
        {/* <img src={skatemamisLogo} /> */}
        <Image
            src={skatemamisLogo} // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            />
         <p>
          Vivo Pushando © 
          sponsored by Skatemamis 
        </p>
        {/* <Box className={styles.footerContainer} sx={{ display: 'flex', justifyContent: 'center'}}> */}
          <p>You can Follow and Support this project! </p> 
          <div className={styles.flinks}> 
          <a className={styles.shopLink} href="https://www.skatemamis.com/shop" target="_blank" rel="noopener noreferrer">
             Shop </a>
          <a className={styles.shopLink}  href="https://www.instagram.com/vivopushando/" >
            Instagram </a>
         </div>
        {/* </Box> */}
      </Box> 
  );
};

export default Footer;
